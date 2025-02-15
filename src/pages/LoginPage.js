import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Sign in with Supabase Auth
      const { data: { user }, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      if (user) {
        // Check if user exists in custom_users
        let { data: userData, error: userError } = await supabase
          .from('custom_users')
          .select('id')
          .eq('auth_user_id', user.id)
          .single();

        if (!userData) {
          // User doesn't exist in custom_users, create them
          const { data: newUser, error: createError } = await supabase
            .from('custom_users')
            .insert([
              {
                auth_user_id: user.id,
                username: email.split('@')[0], // Default username from email
                email: email,
                skills: [] // Initialize empty skills array
              }
            ])
            .select('id')
            .single();

          if (createError) throw createError;
          userData = newUser;
        }

        // Redirect to the user's profile page
        navigate(`/profile/${userData.id}`);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError(error.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
