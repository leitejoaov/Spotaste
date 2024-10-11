import React from 'react';
import './components/Login.css';
import spotifyLogo from './images/logo.png';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1 className="login-title">Spotaste</h1>
          <img src={spotifyLogo} alt="Spotaste logo" className="login-logo larger" />
        </div>
        <button className="login-button" onClick={() => window.location.href = 'https://us-central1-spotaste-438219.cloudfunctions.net/spotifyAuth/auth/login'}>Log in with Spotify</button>
      </div>
    </div>
  );
};

export default Login;