import clsx from "clsx";
import { JSX } from "react";
import { useTheme } from "../../../context/themeContext";

const Button = (item : {icon?: JSX.Element, text:string}) =>{
    const {theme} = useTheme()
    return (
        <>
            <div className={clsx(`transition transform delay-75 duration-700 flex font-bold my-4 max-w-fit
                gap-x-2 cursor-pointer uppercase px-3 py-4 rounded-md shadow-lg shadow-black-500`,
                theme === "light" ? "bg-gradient-to-right from-white/40 via-sky-400 to-white/60 hover:shadow-sky-500/50" :
                `from-black/40 via-red-400/50 to-black/60 shadow-black hover:shadow-red-400/50 dark:from-black/40 dark:via-red-400/50 dark:to-black/60 dark:shadow-black hover:dark:shadow-red-400/50`)}>{item["icon"]} {item["text"]}</div>
        </>
    )
}

export default Button;