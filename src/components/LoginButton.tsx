import React from 'react';

const loginUrl = 'https://us-central1-spotaste-438219.cloudfunctions.net/spotifyAuth/auth/login';

const LoginButton: React.FC = () => {
  const handleLogin = () => {
    window.location.href = loginUrl;
  };

  return (
    <button onClick={handleLogin} className="login-btn">
      Login with Spotify
    </button>
  );
};

export default LoginButton;
