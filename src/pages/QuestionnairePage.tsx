import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { QuestionnaireForm } from '../components/QuestionnaireForm';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function QuestionnairePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData;

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'page_view',
      'page_path': window.location.pathname
    });
  }, []);

  const [questionnaireData, setQuestionnaireData] = useState({
    companyName: '',
    industry: '',
    targetAudience: '',
    brandPersonality: '',
    mainCompetitors: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuestionnaireData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuestionnaireSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      if (formData) {
        formDataToSend.append('mail', formData.mail);
        formDataToSend.append('free22', formData.free22);
        formDataToSend.append('free23', formData.free23);
        formDataToSend.append('free24', formData.free24);
      }
      formDataToSend.append('companyName', questionnaireData.companyName);
      formDataToSend.append('industry', questionnaireData.industry);
      formDataToSend.append('targetAudience', questionnaireData.targetAudience);
      formDataToSend.append('brandPersonality', questionnaireData.brandPersonality);
      formDataToSend.append('mainCompetitors', questionnaireData.mainCompetitors);

      await fetch('https://try.ishot.jp/r/upE4fPq19hLX/store', {
        method: 'POST',
        body: formDataToSend
      });
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
    }

    navigate('/analyzing', { state: { questionnaireData } });
  };

  return (
    <QuestionnaireForm
      questionnaireData={questionnaireData}
      handleInputChange={handleInputChange}
      onSubmit={handleQuestionnaireSubmit}
    />
  );
}