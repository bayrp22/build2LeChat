import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    // Register the user
    const { error: signUpError } = await supabase.auth.signUp({ email, password });

    if (signUpError) {
      console.error('Error registering:', signUpError);
      return;
    }

    // Log in the user
    const { data: { user }, error: loginError } = await supabase.auth.signInWithPassword({ email, password });

    if (loginError) {
      console.error('Error logging in:', loginError);
      return;
    }

    // Insert user data into custom_users table
    const { error: insertError } = await supabase
      .from('custom_users')
      .insert([{ id: user.id, username, email: user.email }]);

    if (insertError) {
      console.error('Error inserting user data:', insertError);
    } else {
      console.log('User data inserted successfully');
      // Redirect to the profile page
      navigate(`/profile/${user.id}`);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
