import React, { useEffect, useState } from 'react';
import './components/Profile.css';
import { useLocation } from 'react-router-dom';
import spotifyLogo from './images/logo.png';

const Profile: React.FC = () => {
  const [profileAnalysis, setProfileAnalysis] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const analysis = searchParams.get('analysis');

    if (analysis) {
      try {
        setProfileAnalysis(decodeURIComponent(analysis));
      } catch (error) {
        console.error('Erro ao decodificar o texto da análise:', error);
        setProfileAnalysis('Erro ao processar a análise fornecida.');
      }
    } else {
      setProfileAnalysis('Nenhuma análise encontrada.');
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={spotifyLogo} alt="Spotaste logo" className="profile-logo" />
        <h1 className="profile-title">Spotaste</h1>
      </div>
      <div className="analysis-box">
        <p className="analysis-text">{profileAnalysis}</p>
      </div>
    </div>
  );
};

export default Profile;