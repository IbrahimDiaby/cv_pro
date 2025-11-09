import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import clsx from "clsx";

const NotFound = () => {

    const navigate = useNavigate();
    const {theme} = useTheme();

  return (
    <section className={clsx("flex items-center justify-center w-screen min-h-screen bg-gradient-to-right", theme === "light" ? "from-sky-500 to-green-600" : "from-red-500 to-green-600 dark:from-red-500 dark:to-green-600")}>
      <div className={clsx("w-full h-full text-center", theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white dark:text-white")}>
        <h1 className="text-6xl font-bold animate-bounce mb-6">404</h1>
        <p className="text-2xl mb-6 animate-pulse">Page introuvable</p>
        <button
        role="button"
            onClick={() => navigate('/')}
          className={clsx("px-6 py-3 cursor-pointer font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105", theme === "light" ? "bg-sky-500 hover:bg-sky-400 text-white" : "dark:bg-red-500 dark:hover:bg-red-400 bg-red-500 hover:bg-red-400 text-white dark:text-white")}
        >
          Revenir à l'accueil
        </button>
      </div>
    </section>
  );
};

export default NotFound;
