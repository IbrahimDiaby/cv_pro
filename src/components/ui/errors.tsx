import { AlertTriangle } from "react-feather";

const ErrorMsg = ({ message }: { message: string }) => {
  return (
    <>
      <div className="flex self-center px-4 py-2 mx-4 my-2 w-full h-auto font-bold bg-red-200 lg:mx-0">
        <div className="flex flex-row gap-0">
          <AlertTriangle className="text-red-400 me-2 size-6" />
          <span className="text-red-400">{message}</span>
        </div>
      </div>
    </>
  );
};

export default ErrorMsg;
