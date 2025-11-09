import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Button from "./ui/button";
import clsx from "clsx";
import { useTheme } from "../context/themeContext";

const Pagination = ({
  page,
  setPage,
  maxPage,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  maxPage: number;
}) => {
  const [tmpPage, setTmpPage] = useState(page);

  useEffect(() => {
    if (tmpPage < 1) {
      setTmpPage(1);
    }
    if (tmpPage > maxPage) {
      setTmpPage(maxPage);
    }
  }, [maxPage, tmpPage]);

  useEffect(() => {
    setTmpPage(page);
  }, [page]);

  const {theme} = useTheme();

  return (
    <>
      <div className={clsx("py-2 flex w-full items-center justify-center gap-x-4 transition delay-75 duration-1000")}>
        <div className="flex">
          {page > 1 && (
            <div
              onClick={() => setPage(page - 1)}
              className={clsx("next transition delay-75 duration-1000 transform hover:scale-105 cursor-pointer", theme === "light" ? "hover:text-orange-400" : "dark:hover:text-orange-400 hover:text-orange-400")}
            >
              <Button className={clsx("transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm shadow-md shadow-slate-400", theme === "light" ? "bg-sky-400 text-white" : "bg-red-400 text-white dark:bg-red-400 dark:text-white")}>
                Précédent
              </Button>
            </div>
          )}
        </div>
        {Array.from({ length: maxPage > 2 ? 2 : maxPage }, (_, i) => i + 1).map(
          (item: number) => {
            return (
              <div className="" key={nanoid()} onClick={() => setPage(item)}>
                <Button
                  key={nanoid()}
                  className={clsx("transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm shadow-md shadow-slate-400", theme === "light" ? "bg-sky-400 text-white" : "bg-red-400 text-white dark:bg-red-400 dark:text-white")}
                >
                  {item}
                </Button>
              </div>
            );
          }
        )}
        {page > 3 && maxPage > 3 && (
          <Button className={clsx("transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm shadow-md shadow-slate-400", theme === "light" ? "bg-sky-400 text-white" : "bg-red-400 text-white dark:bg-red-400 dark:text-white")}>
            ...
          </Button>
        )}
        {page > 2 && (page == 3 || page <= maxPage - 2) && (
          <Button className={clsx("transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm shadow-md shadow-slate-400", theme === "light" ? "bg-sky-400 text-white" : "dark:bg-red-400 dark:text-white bg-red-400 text-white")}>
            {page}
          </Button>
        )}
        {maxPage > 3 && page < maxPage - 2 && (
          <Button className={clsx("transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm shadow-md shadow-slate-400", theme === "light" ? "bg-sky-400 text-white" : "dark:bg-red-400 dark:text-white bg-red-400 text-white")}>
            ...
          </Button>
        )}
        {maxPage - 2 > 2 &&
          Array.from({ length: 2 }, (_, i) => maxPage - 1 + i).map((item) => {
            return (
              <div className="" onClick={() => setPage(item)}>
                <Button
                  key={nanoid()}
                  className={clsx("transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm shadow-md shadow-slate-400", theme === "light" ? "bg-sky-400 text-white" : "dark:bg-red-400 dark:text-white bg-red-400 text-white")}
                >
                  {item}
                </Button>
              </div>
            );
          })}
        <div className="flex">
          {page < maxPage && (
            <div
              onClick={() => setPage(page + 1)}
              className={clsx("next transition delay-75 duration-1000 transform hover:scale-105 cursor-pointer", theme === "light" ? "bg-sky-400 text-white hover:text-orange-400" : "bg-red-400 text-white hover:text-orange-400 dark:bg-red-400 dark:text-white dark:hover:text-orange-400")}
            >
              <Button className={clsx("transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm shadow-md shadow-slate-400", theme === "light" ? "bg-sky-400 text-white" : "bg-red-400 text-white dark:bg-red-400 dark:text-white")}>
                Suivant
              </Button>
            </div>
          )}
        </div>
        <input
          className={clsx("border-2 w-15 outline-none px-1 py-1 text-center rounded-sm", theme ==="light" ?"border-black":"dark:border-white ")}
          type="number"
          name="page"
          id="page"
          value={tmpPage}
          onChange={(e) => setTmpPage(parseInt(e.target.value))}
        />
        <div className="" onClick={() => setPage(tmpPage)}>
          <Button className={clsx("transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm shadow-md shadow-slate-400",  theme === "light" ? "bg-sky-400" : "bg-red-400 dark:bg-red-400")}>
            OK
          </Button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
