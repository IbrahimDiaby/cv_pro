import clsx from 'clsx';
import { useTheme } from '../../context/themeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={clsx("relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2", 
      theme === "light" ? "bg-gray-300 focus:ring-blue-500" : "dark:bg-gray-600 dark:focus:ring-red-500 bg-gray-600 focus:ring-red-500")}
      aria-label="Changer le thème"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-7 dark:bg-gray-800 dark:outline-red-500 bg-gray-800 outline-red-500' : 'translate-x-0 bg-white outline-blue-500'
        }`}
      >
        {theme === 'light' ? '☽' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggleButton;