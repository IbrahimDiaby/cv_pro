import { nanoid } from "nanoid";
import { ProjectInterface } from "../../utils/types";
import ProjectCard from "../card/project-card";
import TechCard from "../card/tech-card";
import { useEffect, useMemo, useState } from "react";
import { AlertTriangle } from "react-feather";

const Projects = () => {
  const [idx, setIdx] = useState(0);

  const categories = [
    {
      content: "Web",
      tag: "web",
    },
    {
      content: "Mobile",
      tag: "mobile",
    },
    {
      content: "Desktop",
      tag: "desktop",
    },
    {
      content: "UI/UX Design",
      tag: "design",
    },
  ];

  const items: Array<ProjectInterface> = useMemo<Array<ProjectInterface>>(
    () => [
      {
        image: "amadoudiaby.png",
        title: "AMADOU DIABY",
        role: "Développeur Web Fullstack",
        description:
          "Collaborateur sur la conception d'un site web pour une figure publique (politique) du parti Houphouétisme pour l'Efficacité dans la Justice (H.E.J).",
        technologies: ["Wordpress", "HTML", "CSS", "Bootstrap", "Javascript", "PHP", "Elementor", "Wordpress Plugins", "Configuration SMTP", "Adobe Illustrator/VectorPea"],
        url: "https://amadoudiaby.com",
        tools: ["Filezilla"],
        type: "web",
      },
      {
        image: "unes-idf.png",
        title: "UNES IDF",
        role: "Développeur Web Fullstack",
        description:
          "Conception de site web pour l'Union des Etudiants et Stagiaires Ivoiriens d'Ile de France pour la promotion et l'insertion des étudiants et Stagiaires Ivoiriens en Ile de France.",
        technologies: ["React", "TypeScript", "TailwindCSS", "PHP", "Vite", "Github"],
        url: "https://unes-idf.fr",
        tools: ["Filezilla", "IONOS"],
        type: "web",
      },
      {
        image: "ameetis.png",
        title: "AMEETIS",
        role: "Développeur Web Fullstack",
        description:
          "Conception de site web pour une association étudiante Ivoirienne de Strasbourg pour la promotion et l'insertion des élèves et étudiants ivoiriens à Strasbourg.",
        technologies: ["React", "TypeScript", "TailwindCSS", "PHP", "Vite", "Github"],
        url: "https://ameetis.fr",
        tools: ["Filezilla", "IONOS"],
        type: "web",
      },
      {
        image: "aesss.png",
        title: "AESSS",
        role: "Développeur Web Fullstack",
        description:
          "Conception de site web pour une association étudiante Sénégalaise de Strasbourg pour la promotion et l'insertion des étudiants et stagiaires Sénégalais à Strasbourg.",
        technologies: ["React", "TypeScript", "Bootstrap", "PHP", "Vite", "Github"],
        tools: ["Filezilla", "IONOS"],
        type: "web",
        url: "https://aess-strasbourg.fr",
      },
    ],
    []
  );

  const [projectType, setProjectType] = useState(categories[0].tag);
  const [itemsFiltered, setItemsFiltered] = useState<Array<ProjectInterface>>(
    items.filter((e) => e.type === projectType)
  );

  useEffect(() => {
    setItemsFiltered(items.filter((e) => e.type === projectType));
  }, [items, projectType]);

  return (
    <>
      <section className="flex flex-col">
        <div className="py-4 flex flex-col items-center justify-center">
          <h1 className="font-bold uppercase text-4xl lg:text-6xl">Projets</h1>
          <div className="flex w-full justify-center flex-wrap px-10 py-3 gap-2 gap-y-6">
            {categories.map(
              (categorie: { content: string; tag: string }, index: number) => (
                <div
                  key={nanoid()}
                  onClick={() => {
                    setProjectType(categorie.tag);
                    setIdx(index);
                  }}
                >
                  <TechCard
                    key={nanoid()}
                    text={categorie.content}
                    active={idx === index ? true : false}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row px-10 w-full items-center justify-center gap-y-6">
          <div className="flex w-full gap-y-4 flex-col lg:gap-0">
            {itemsFiltered.length === 0 &&
              <div className="flex py-8 text-sky-400 dark:text-red-400 items-center justify-center">
                <AlertTriangle className="size-6 me-2" />
                <p className="font-bold">
                  Les projets seront bientôt ajoutés.
                </p>
              </div>
            }
            {itemsFiltered.length > 0 &&
              itemsFiltered.map((item, index) => (
                <ProjectCard key={nanoid()} item={item} index={index} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
