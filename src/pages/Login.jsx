import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
  let {setIsAuth} = useContext(AuthContext);
  const router = useNavigate();

  const Login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', true)
    router('/react-list-posts/posts/')
  }
  return (
    <div className='login'>
      <h1>Страница для логина</h1>
      <p>Авторизация фиктивная, просто нажмите "Войти"</p>
      <form onSubmit={Login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login;
