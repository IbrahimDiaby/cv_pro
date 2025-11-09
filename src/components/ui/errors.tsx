import { AlertTriangle } from "react-feather";
import { useTheme } from "../../context/themeContext";
import clsx from "clsx";

const ErrorMsg = ({ message }: { message: string }) => {
  const {theme} = useTheme();
  return (
    <>
      <div className={clsx("flex self-center px-4 py-2 mx-4 my-2 w-full h-auto font-bold lg:mx-0", theme === "light" ? "bg-red-200" : "dark:bg-red-200 bg-red-200")}>
        <div className="flex flex-row gap-0">
          <AlertTriangle className={clsx("me-2 size-6", theme ==="light" ? "text-red-400" : "dark:text-red-400 text-red-400")} />
          <span className={clsx("", theme ==="light" ? "text-red-400" : "dark:text-red-400 text-red-400")}>{message}</span>
        </div>
      </div>
    </>
  );
};

export default ErrorMsg;
