import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }
  return (
    <div className="navbar">
      <MyButton onClick={logout}>
        Выйти
      </MyButton>
      <div className="navbar__links">
        <MyButton>
          <a href='https://github.com/Alexandr7944/react-list-posts' className="btn__link">GitHub</a>
        </MyButton>
        <MyButton>
          <Link to="/react-list-posts/about" className="btn__link">О сайте</Link>
        </MyButton>
        <MyButton>
          <Link to="/react-list-posts/posts" className="btn__link">Посты</Link>
        </MyButton>
      </div>
    </div>
  )
}

export default Navbar;