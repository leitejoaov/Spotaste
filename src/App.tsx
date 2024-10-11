import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
