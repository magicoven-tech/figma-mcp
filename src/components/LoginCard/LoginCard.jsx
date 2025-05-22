import React, { useState } from 'react';
import './LoginCard.css';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt with:', { email });
      setIsLoading(false);
      // In a real app, you would handle the login logic here
    }, 1000);
  };

  return (
    <div className="login-card">
      <div className="login-card__header">
        <h2 className="login-card__title">Welcome back</h2>
        <p className="login-card__subtitle">Please enter your details to sign in</p>
      </div>
      
      <form onSubmit={handleSubmit} className="login-card__form">
        {error && (
          <div className="login-card__error">
            <svg className="login-card__error-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {error}
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="Enter your email"
              disabled={isLoading}
            />
          </div>
        </div>
        
        <div className="form-group">
          <div className="form-label-wrapper">
            <label htmlFor="password" className="form-label">Password</label>
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          </div>
          <div className="input-wrapper">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="login-button"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="button-loader">
              <span className="loader-spinner"></span>
              Signing in...
            </span>
          ) : 'Sign in'}
        </button>
      </form>
      
      <div className="login-card__footer">
        <p className="signup-text">
          Don't have an account? <a href="/signup" className="signup-link">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
