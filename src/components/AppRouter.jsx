import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import Error from '../pages/Error';
import Login from '../pages/Login';
import { privateRoutes, publicRoutes } from '../router/routes';

const AppRouter = () => {
  let {isAuth} = useContext(AuthContext);
  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map((route, index) =>
          <Route key={index} path={route.path} element={<route.element/>}/>
        )}
        <Route path="/react-list-posts/*" element={<Error to="/error" replace />} />
      </Routes>
      :
      <Routes>
        {publicRoutes.map((route, index) =>
          <Route key={index} path={route.path} element={<route.element />}/>
        )}
        <Route path="/react-list-posts/*" element={<Login to="/error" replace />} />
      </Routes>
  )
}

export default AppRouter;