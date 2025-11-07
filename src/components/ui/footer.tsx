import clsx from "clsx";
import { useTheme } from "../../context/themeContext";

const Footer = ({ref}:{ref: React.RefObject<HTMLDivElement | null>}) => {
    const {theme} = useTheme();
    return (
        <>
        <footer ref={ref} className={clsx("flex mt-2 py-4 font-bold min-h-20 justify-center items-center shadow-lg", theme === "light" ? "bg-white text-black shadow-black": "dark:bg-gray-900 dark:text-white dark:shadow-white")}>
            <p className="text-center">Copyright 2025 &copy; Ibrahim DIABY - Tous droits reservés</p>
            <div className="py-10 md:py-0"></div>
        </footer>
        </>
    );
}

export default Footer;