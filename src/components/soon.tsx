import clsx from "clsx";
import { useTheme } from "../context/themeContext";

const Soon = () => {
    const {theme} = useTheme();
    return (
        <>
            <div className={clsx("flex flex-col h-150 justify-center items-center py-8 px-4 lg:px-25", theme === "light" ? "bg-white" : "dark:bg-gray-900")}>
                <h1 className="text-8xl animate-pulse">
                    Coming soon!!!
                </h1>
            </div>
        </>
    )
}

export default Soon;