import React from "react";
import { motion } from "framer-motion";

interface QuestionnaireFormProps {
  questionnaireData: {
    companyName: string;
    industry: string;
    targetAudience: string;
    brandPersonality: string;
    mainCompetitors: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onSubmit: () => void;
}

export const QuestionnaireForm: React.FC<QuestionnaireFormProps> = ({
  questionnaireData,
  handleInputChange,
  onSubmit,
}) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center py-12 px-4">
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Get Your Professional Brand Color Strategy
        </h1>
        <h3 className="sub-text3xl mb-10">
          Fill out this comprehensive analysis form and receive your expert
          color recommendations
        </h3>

        <form
          onSubmit={handleFormSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={questionnaireData.companyName}
              onChange={handleInputChange}
              placeholder="Enter your company name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="industry"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Industry <span className="text-red-500">*</span>
            </label>
            <select
              id="industry"
              name="industry"
              required
              value={questionnaireData.industry}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select your industry</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Retail">Retail</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Non-profit">Non-profit</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="targetAudience"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Target Audience <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="targetAudience"
              name="targetAudience"
              required
              value={questionnaireData.targetAudience}
              onChange={handleInputChange}
              placeholder="e.g., Young professionals, Enterprise clients, Families"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="brandPersonality"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Brand Personality <span className="text-red-500">*</span>
            </label>
            <select
              id="brandPersonality"
              name="brandPersonality"
              required
              value={questionnaireData.brandPersonality}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select brand personality</option>
              <option value="Professional">Professional</option>
              <option value="Playful">Playful</option>
              <option value="Luxurious">Luxurious</option>
              <option value="Trustworthy">Trustworthy</option>
              <option value="Innovative">Innovative</option>
              <option value="Friendly">Friendly</option>
              <option value="Bold">Bold</option>
              <option value="Minimalist">Minimalist</option>
              <option value="Elegant">Elegant</option>
              <option value="Energetic">Energetic</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="mainCompetitors"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Main Competitors <span className="text-red-500">*</span>
            </label>
            <textarea
              id="mainCompetitors"
              name="mainCompetitors"
              required
              value={questionnaireData.mainCompetitors}
              onChange={handleInputChange}
              placeholder="List 2-3 main competitors (company names or websites)"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Professional Analysis
          </button>
        </form>
      </motion.div>
    </div>
  );
};
