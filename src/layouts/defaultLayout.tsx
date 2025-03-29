import { Outlet } from "react-router-dom";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import ScrollButton from "../components/scrollButton";
import { useRef } from "react";

const DefaultLayout = () => {

  const refHeader = useRef<HTMLDivElement>(null);
  const refFooter = useRef<HTMLDivElement>(null);

  return (
    <>
      <section className="flex flex-col w-full min-h-screen">
        <Header ref={refHeader} />
        <section className="flex flex-col w-screen min-h-screen">
          <Outlet />
        </section>
        <ScrollButton refHeader={refHeader} refFooter={refFooter} />
        <Footer ref={refFooter} />
      </section>
    </>
  );
};

export default DefaultLayout;
