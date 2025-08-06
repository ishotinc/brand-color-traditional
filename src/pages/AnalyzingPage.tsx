import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnalyzingPage as AnalyzingComponent } from '../components/AnalyzingPage';

export function AnalyzingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const questionnaireData = location.state?.questionnaireData;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/results', { state: { questionnaireData } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, questionnaireData]);

  return (
    <div className="min-h-screen bg-white">
      <AnalyzingComponent />
    </div>
  );
}