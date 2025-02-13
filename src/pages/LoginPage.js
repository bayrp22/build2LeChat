import React from 'react';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <Login />
      <div className="register-link">
        <p>Don't have an account?</p>
        <Link to="/register">Create an account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
