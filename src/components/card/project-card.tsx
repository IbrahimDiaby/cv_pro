import { nanoid } from "nanoid";
import { ProjectInterface } from "../../utils/types";
import { imageProjectsPath, OpenLink } from "../../utils/utilities";
import TechCard from "./tech-card";

const ProjectCard = ({
  item,
  index,
}: {
  item: ProjectInterface;
  index: number;
}) => {
  return (
    <>
      <div className="flex gap-y-2 lg:gap-0 relative w-full flex-col lg:flex-row overflow-x-hidden">
        {index % 2 === 0 && (
          <>
            <div onClick={() => OpenLink(item.url)} className="flex lg:px-2 lg:border-r-2 lg:border-dashed w-full lg:w-1/2">
            <img src={`${imageProjectsPath}`+item.image} alt={item.title} className="shadow-md lg:me-10 transition delay-75 duration-700 hover:scale-105 cursor-pointer rounded-md aspect-video z-10 object-fit lg:object-cover min-w-100 max-h-100" title={item.title} srcSet={`${imageProjectsPath}`+item.image} />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-2 hidden lg:flex size-4 bg-black dark:bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 -translate-x-2 hidden lg:flex my-2 w-1/6 h-0.5 bg-black dark:bg-white"></div>
            <div className="flex flex-col lg:justify-center lg:px-4 items-center gap-y-2 w-full lg:w-1/2">
                <h1 className="font-bold uppercase text-4xl">{item.title}</h1>
                <h3 className="font-bold uppercase text-xl">{item.role}</h3>
                <p className="py-2">{item.description}</p>
                <div className="flex lg:px-4 flex-wrap gap-2">
                  {
                    item.technologies.map((tech : string) => <TechCard key={nanoid()} text={tech} />)
                  }
                </div>
            </div>
          </>
        )}

        {index % 2 !== 0 && (
          <>
            <div className="flex flex-col lg:justify-center lg:px-4 order-2 lg:order-none items-center lg:border-r-2 lg:border-dashed w-full lg:w-1/2">
            <h1 className="font-bold uppercase text-4xl">{item.title}</h1>
            <h3 className="font-bold uppercase text-xl">{item.role}</h3>
                <p className="py-2">{item.description}</p>
                <div className="flex lg:px-4 flex-wrap gap-2">
                  {
                    item.technologies.map((tech : string) => <TechCard key={nanoid()} text={tech} />)
                  }
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-2 hidden lg:flex size-4 bg-black dark:bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-2 hidden lg:flex my-2 w-1/6 h-0.5 bg-black dark:bg-white"></div>
            <div onClick={() => OpenLink(item.url)} className="flex order-1 lg:order-none lg:px-2 justify-end items-center w-full lg:w-1/2">
                <img src={`${imageProjectsPath}`+item.image} alt={item.title} className="shadow-md lg:ms-10 transition delay-75 duration-700 hover:scale-105 cursor-pointer rounded-md aspect-video z-10 object-fit lg:object-cover min-w-100 max-h-100 lg:w-full lg:h-full" title={item.title} srcSet={`${imageProjectsPath}`+item.image} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
