import { Outlet } from "react-router-dom";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import ScrollButton from "../components/scrollButton";
import { useRef } from "react";
import ThemeToggleButton from "../components/ui/theme-toggle-button";
import { useTheme } from "../context/themeContext";
import clsx from "clsx";

const DefaultLayout = () => {
  const refHeader = useRef<HTMLDivElement>(null);
  const refFooter = useRef<HTMLDivElement>(null);

  const {theme} = useTheme()

  return (
    <>
        <section className={clsx("flex flex-col w-full min-h-screen transition-colors duration-200", theme === "light" ? "bg-white text-gray-900" : "dark:text-gray-100 dark:bg-gray-900")}>
          <Header ref={refHeader} />
          <section className="flex flex-col w-screen min-h-screen">
            <Outlet />
          </section>
          <ScrollButton refHeader={refHeader} refFooter={refFooter} />
          <Footer ref={refFooter} />
          <div className="fixed bottom-5 left-5 z-100">
            <ThemeToggleButton />
          </div>
        </section>
    </>
  );
};

export default DefaultLayout;
