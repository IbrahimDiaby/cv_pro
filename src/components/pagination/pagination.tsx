import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../context/themeContext";
import clsx from "clsx";

const Pagination = () => {
    const {theme} = useTheme();
    return (
        <>
            <div className={clsx("flex items-center justify-center gap-x-4 transition delay-75 duration-1000", theme === "light" ? "" : "")}>
                <div className={clsx("previous size-12 hover:cursor-pointer", theme === "light" ? "hover:text-sky-400" : "hover:text-red-400")}><ArrowLeftCircleIcon /></div>
                <div className={clsx("next size-12 hover:cursor-pointer", theme === "light" ? "hover:text-sky-400" : " hover:text-red-400")}><ArrowRightCircleIcon /></div>
            </div>
        </>
    )
}

export default Pagination;