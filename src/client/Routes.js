import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      }, {
        ...UsersListPage,
        path: '/users',
      }, {
        ...AdminPage,
        path: '/admins'
      }, {
        ...NotFoundPage
      }
    ]
  }
]

