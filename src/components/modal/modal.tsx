import { XMarkIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";
import { useTheme } from "../../context/themeContext";
import clsx from "clsx";
// import { JSX } from "react";

const Modal = ({
  ref,
  setModal,
  children
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children : ReactNode
}) => {

  const {theme} = useTheme();

  return (
    <>
      <div className={clsx("flex w-full flex-col min-h-screen justify-center items-center pt-8", 
        theme === "light" ? "bg-white text-black" : "dark:bg-gray-900 dark:text-white")
      }>
        <div className="flex justify-end absolute top-0 right-5"
          onClick={(e) => {
            e.stopPropagation();
            setModal(false);
            ref?.current?.remove();
          }}
        >
          <div
            className="flex p-4 transition duration-300 transform cursor-pointer hover:scale-105 font-bold items-center"
          >
            <XMarkIcon className="transition transform delay-75 duration-200 size-10 shadow-lg hover:shadow-red-500 bg-red-700 font-bold" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
