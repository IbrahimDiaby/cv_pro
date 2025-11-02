import { Outlet } from "react-router-dom";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import ScrollButton from "../components/scrollButton";
import { useRef } from "react";
import ThemeToggleButton from "../components/ui/theme-toggle-button";

const DefaultLayout = () => {
  const refHeader = useRef<HTMLDivElement>(null);
  const refFooter = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="flex flex-col w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Header ref={refHeader} />
        <section className="flex flex-col w-screen min-h-screen">
          <Outlet />
        </section>
        <ScrollButton refHeader={refHeader} refFooter={refFooter} />
        <Footer ref={refFooter} />
        <div className="fixed bottom-5 left-5 z-99">
          <ThemeToggleButton />
        </div>
      </section>
    </>
  );
};

export default DefaultLayout;