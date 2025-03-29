import { useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center w-screen min-h-screen bg-gradient-to-r from-orange-500 to-green-600">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold animate-bounce mb-6">404</h1>
        <p className="text-2xl mb-6 animate-pulse">Page introuvable</p>
        <button
        role="button"
            onClick={() => navigate('/')}
          className="px-6 py-3 cursor-pointer bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
        >
          Revenir à l'accueil
        </button>
      </div>
    </section>
  );
};

export default NotFound;
