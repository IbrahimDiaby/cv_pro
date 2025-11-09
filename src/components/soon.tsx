import clsx from "clsx";
import { useTheme } from "../context/themeContext";
import ThemeToggleButton from "./ui/theme-toggle-button";

const Soon = () => {
    const {theme} = useTheme();
    return (
        <>
            <div className={clsx("flex flex-col h-150 justify-center items-center py-8 px-4 lg:px-25", theme === "light" ? "bg-white text-sky-400" : "dark:bg-gray-900 dark:text-red-400 bg-gray-900 text-red-400")}>
                <h1 className="text-8xl animate-pulse">
                    Coming soon!!!
                </h1>
            </div>
            <div className="fixed bottom-5 left-5 z-100">
        <ThemeToggleButton />
      </div>
        </>
    )
}

export default Soon;