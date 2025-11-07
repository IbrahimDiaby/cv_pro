import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import clsx from "clsx";

const NotFound = () => {

    const navigate = useNavigate();
    const {theme} = useTheme();

  return (
    <section className={clsx("flex items-center justify-center w-screen min-h-screen", theme === "light" ? "bg-gradient-to-right from-sky-500 to-green-600" : "dark:bg-gradient-to-right dark:from-red-500 dark:to-green-600")}>
      <div className="text-center text-black dark:text-white">
        <h1 className="text-6xl font-bold animate-bounce mb-6">404</h1>
        <p className="text-2xl mb-6 animate-pulse">Page introuvable</p>
        <button
        role="button"
            onClick={() => navigate('/')}
          className="px-6 py-3 cursor-pointer bg-sky-500 dark:bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-sky-400 dark:hover:bg-red-400 transition duration-300 transform hover:scale-105"
        >
          Revenir à l'accueil
        </button>
      </div>
    </section>
  );
};

export default NotFound;
