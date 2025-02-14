import React from 'react';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login-container">
      <h1>Sign In</h1>
      <Login />
      <div className="register-link">
        <p>Don't have an account?</p>
        <Link to="/register">Create an account</Link>
      </div>
    </div>
  );
}
