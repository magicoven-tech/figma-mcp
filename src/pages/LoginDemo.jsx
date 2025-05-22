import React from 'react';
import LoginCard from '../components/LoginCard/LoginCard';
import '../styles/global.css';

const LoginDemo = () => {
  return (
    <div className="login-demo">
      <div className="login-demo__container">
        <h1 className="login-demo__title">Design System Demo</h1>
        <p className="login-demo__subtitle">Login Card Component</p>
        
        <div className="login-demo__card">
          <LoginCard />
        </div>
        
        <div className="login-demo__tokens">
          <h2>Design Tokens Used</h2>
          <ul>
            <li><strong>Primary Color:</strong> #E04747</li>
            <li><strong>Primary Hover:</strong> #B21919</li>
            <li><strong>Text Colors:</strong> #22242A (primary), #636B7E (secondary)</li>
            <li><strong>Borders:</strong> #DDE1E4</li>
            <li><strong>Backgrounds:</strong> #FFFFFF (card), #F4F4F5 (page)</li>
            <li><strong>Error Colors:</strong> #E04747 (text), #FFEBEB (background)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginDemo;
