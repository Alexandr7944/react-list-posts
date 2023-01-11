import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: '/react-list-posts/about', element: About },
  { path: '/react-list-posts/posts', element: Posts },
  { path: '/react-list-posts/posts/:id', element: PostIdPage },
]

export const publicRoutes = [
  { path: '/react-list-posts/login', element: Login},
  { path: '/*', element: Login},
];
