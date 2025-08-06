import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ColorPalette } from '../components/ColorPalette';

export function ResultsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const questionnaireData = location.state?.questionnaireData || {
    companyName: '',
    industry: '',
    targetAudience: '',
    brandPersonality: '',
    mainCompetitors: ''
  };

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <ColorPalette questionnaireData={questionnaireData} onRestart={handleRestart} />
    </div>
  );
}