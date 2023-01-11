import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
  const router = useNavigate();

  const {title, body} = props.post;
  return(
    <div className="post">
        <div className="post__content">
          <strong>
            {props.post.id}. {title}
          </strong>
          <div>
            {body}
          </div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => router(`/react-list-posts/posts/${props.post.id}`)}>
            Открыть
          </MyButton>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => props.remove(props.post)}>
            Удалить
          </MyButton>
        </div>
      </div>
  )
}

export default PostItem;