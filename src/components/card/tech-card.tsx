import clsx from "clsx";
import { useTheme } from "../../context/themeContext";

const TechCard = ({text, active} : {text:string, active? : boolean}) => {
      const { theme } = useTheme();
    return (
        <>
        <div className={clsx(`transition delay-75 duration-1000 flex font-bold cursor-pointer capitalize px-4 py-2 border-2 rounded-md`, 
        theme === "light" ? "hover:scale-105 hover:text-sky-400 hover:bg-white/40" : "dark:hover:bg-black/40 dark:hover:text-red-400",
        active && `scale-105 ${theme === "light" ? "bg-white/40" : "text-red-400 bg-black/40 dark:text-red-400 dark:bg-black/40"}`)}>
            {text}
        </div>
        </>
    );
}

export default TechCard;