import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostSevice';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  })
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id)
  }, []);

  return (
    <div>
      <h1>Вы попали на страницу поста ID: {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}. {post.title}</div>
      }
    
      <h3>Комментарии</h3>
      {isComLoading
        ? <Loader />
        : <div>
            {comments.map(comment =>
              <div key={comment.id} style={{marginTop: 15}}>
                <h5>{comment.email}</h5>
                <p>{comment.body}</p>
              </div>
            )}
          </div>
      }
    </div>
  )
};

export default PostIdPage;