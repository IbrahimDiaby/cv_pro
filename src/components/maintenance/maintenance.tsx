import clsx from "clsx";
import { useTheme } from "../../context/themeContext";
import { imagePath } from "../../utils/utilities";
import ThemeToggleButton from "../ui/theme-toggle-button";

const Maintenance = () => {
  const { theme } = useTheme();

  return (
    <>
      <section
        className={clsx(
          "flex flex-col justify-center items-center font-bold h-screen max-h-screen w-screen lg:px-4 lg:p-0",
          theme === "light"
            ? "bg-white text-black"
            : "dark:bg-gray-900 dark:text-white bg-gray-900 text-white"
        )}
      >
        <div
          className={clsx(
            "cursor-pointer my-8 rounded-md animate-pulse shadow-lg",
            theme === "light" ? "shadow-sky-400" : "dark:shadow-red-400 shadow-red-400"
          )}
        >
          <img
            className="mix-blend-screen rounded-md size-40"
            src={`${imagePath}/p-5.png`}
            width={150}
            height={150}
            alt={""}
          />
        </div>
        <div className="lg:py-2">
          <p className="text-center text-pretty">
            Excellente nouvelle.
            <br />
            Le portofolio fait peau neuve.
          </p>
        </div>
        <div className="py-4 lg:py-1 flex items-center justify-center flex-wrap">
          <p className="text-center">
            Contactez-moi :{" "}
            <a
              className={clsx(
                "text-lg",
                theme === "light" ? "text-sky-400" : "dark:text-red-400 text-red-400"
              )}
              href="mailto:ibrahim.diaby707@gmail.com"
            >
              ibrahim.diaby707@gmail.com
            </a>
          </p>
        </div>
      </section>
      <div className="fixed bottom-5 left-5 z-100">
        <ThemeToggleButton />
      </div>
    </>
  );
};

export default Maintenance;
