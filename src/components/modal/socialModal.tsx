import { XMarkIcon } from "@heroicons/react/24/solid";
import ErrorMsg from "../ui/errors";

const SocialHandlerModal = ({
  ref,
  setModal,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

  setTimeout(() => {
    setModal(false);
  }, 4000);

  return (
    <>
      <div className="fixed transition transform delay-100 duration-[2000] top-5 flex w-full flex-col z-10 justify-center items-center">
        <div className="flex">
          <ErrorMsg message={"Le/La responsable désire ne pas partager ou n'est pas présent(e) sur ce réseau."}/>
          <div
            onClick={() => {
              setModal(false);
              ref?.current?.remove();
            }}
            className="hidden md:flex transition duration-300 transform cursor-pointer hover:scale-105 font-bold items-center my-4"
          >
            <XMarkIcon className="transition delay-75 text-red-600 duration-200 size-10 shadow-lg hover:shadow-red-500 bg-red-400 font-bold" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialHandlerModal;
