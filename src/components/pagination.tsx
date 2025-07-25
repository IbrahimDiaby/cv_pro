import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Button from "./ui/button";

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
  return (
    <>
      <div className="py-2 flex w-full items-center justify-center gap-x-4 transition delay-75 duration-1000">
        <div className="flex">
          {page > 1 && (
            <div
              onClick={() => setPage(page - 1)}
              className="next transition delay-75 duration-1000 transform hover:scale-105 cursor-pointer hover:text-orange-400"
            >
              <Button className="transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm bg-sky-400 dark:bg-red-400 shadow-md shadow-slate-400 text-white dark:text-white">
                Précédent
              </Button>
            </div>
          )}
        </div>
        {Array.from({ length: maxPage > 2 ? 2 : maxPage }, (_, i) => i + 1).map(
          (item: number) => {
            return (
              <div className="" onClick={() => setPage(item)}>
                <Button
                  key={nanoid()}
                  className="transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm bg-sky-400 dark:bg-red-400 shadow-md shadow-slate-400"
                >
                  {item}
                </Button>
              </div>
            );
          }
        )}
        {page > 3 && maxPage > 3 && (
          <Button className="transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm bg-sky-400 dark:bg-red-400 shadow-md shadow-slate-400">
            ...
          </Button>
        )}
        {page > 2 && (page == 3 || page <= maxPage - 2) && (
          <Button className="transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm bg-sky-400 dark:bg-red-400 shadow-md shadow-slate-400">
            {page}
          </Button>
        )}
        {maxPage > 3 && page < maxPage - 2 && (
          <Button className="transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm bg-sky-400 dark:bg-red-400 shadow-md shadow-slate-400">
            ...
          </Button>
        )}
        {maxPage - 2 > 2 &&
          Array.from({ length: 2 }, (_, i) => maxPage - 1 + i).map((item) => {
            return (
              <div className="" onClick={() => setPage(item)}>
                <Button
                  key={nanoid()}
                  className="transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm bg-sky-400 dark:bg-red-400 shadow-md shadow-slate-400"
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
              className="next transition delay-75 duration-1000 transform hover:scale-105 cursor-pointer hover:text-orange-400"
            >
              <Button className="transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm bg-sky-400 dark:bg-red-400 shadow-md shadow-slate-400 text-white dark:text-white">
                Suivant
              </Button>
            </div>
          )}
        </div>
        <input
          className="border-2 w-15 border-black dark:border-white outline-none px-1 py-1 text-center rounded-sm"
          type="number"
          name="page"
          id="page"
          value={tmpPage}
          onChange={(e) => setTmpPage(parseInt(e.target.value))}
        />
        <div className="" onClick={() => setPage(tmpPage)}>
          <Button className="transition delay-75 duration-300 hover:scale-105 font-bold px-4 py-2 cursor-pointer rounded-sm bg-sky-400 dark:bg-red-400 shadow-md shadow-slate-400">
            OK
          </Button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
