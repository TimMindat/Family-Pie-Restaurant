import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const translations = {
    title: {
      ar: 'الصفحة غير موجودة',
      en: 'Page Not Found'
    },
    description: {
      ar: 'عذراً، الصفحة التي تبحث عنها غير موجودة.',
      en: 'Sorry, the page you are looking for does not exist.'
    },
    goHome: {
      ar: 'العودة للرئيسية',
      en: 'Go Home'
    },
    goBack: {
      ar: 'العودة للخلف',
      en: 'Go Back'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100/50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {translations.title[language]}
        </h2>
        <p className="text-gray-600 mb-8">
          {translations.description[language]}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            {translations.goHome[language]}
          </button>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {translations.goBack[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;