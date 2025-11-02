import { useTheme } from '../../context/themeContext';
import { useEffect, useState } from 'react';

const ThemeDebug = () => {
  const { theme } = useTheme();
  const [htmlClass, setHtmlClass] = useState('');

  useEffect(() => {
    setHtmlClass(document.documentElement.className);
  }, [theme]);

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg shadow-lg text-sm">
      <div className="font-bold mb-2">Debug Thème :</div>
      <div>Theme State: <span className="font-mono">{theme}</span></div>
      <div>HTML Class: <span className="font-mono">{htmlClass || 'aucune'}</span></div>
      <div>localStorage: <span className="font-mono">{localStorage.getItem('theme') || 'vide'}</span></div>
      <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-700 rounded">
        Ce texte change de couleur
      </div>
    </div>
  );
};

export default ThemeDebug;