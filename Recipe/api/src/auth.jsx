// auth.jsx

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './auth.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [usedCredentials, setUsedCredentials] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    history.push('/recipes'); 
  };

  const handleSignUp = () => {
    if (email === 'existing@example.com') {
      setUsedCredentials(true);
      return;
    }

    history.push('/recipes'); 
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'} to your Recipe App</h2>
      {usedCredentials && <p className="error">These credentials have already been used.</p>}
      {error && <p className="error">{error}</p>}
      <form className="auth-form" onSubmit={(e) => {
        e.preventDefault();
        isSignUp ? handleSignUp() : handleLogin();
      }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        {isSignUp && (
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        )}
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <p>{isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
        <span className="auth-toggle" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Login' : 'Sign Up'}
        </span>
      </p>
    </div>
  );
};

export default Auth;
