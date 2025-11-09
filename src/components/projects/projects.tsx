import { nanoid } from "nanoid";
import { ProjectInterface } from "../../utils/types";
import ProjectCard from "../card/project-card";
import TechCard from "../card/tech-card";
import { useEffect, useMemo, useState } from "react";
import { AlertTriangle } from "react-feather";
import Pagination from "../pagination";
import clsx from "clsx";
import { useTheme } from "../../context/themeContext";

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
        image: "fasesif.png",
        title: "FASESIF",
        role: "Développeur Web Fullstack",
        description:
          "Conception du portail officiel de la Fédération des Associations d'Etudiants et Stagiaires Ivoiriens de France. Une application web intuitive et moderne composé d'un Espace administrateur et Espace visiteur pour usager.",
        technologies: [
          "React",
          "Typescript",
          "TailwindCSS",
          "Framer Motion",
          "Laravel",
          "SQLite",
          "InertiaJS",
        ],
        url: "#",
        tools: [],
        type: "web",
        start: "2025",
        end: "2025",
      },
      {
        image: "amadoudiaby.png",
        title: "AMADOU DIABY",
        role: "Développeur Web Fullstack",
        description:
          "Collaborateur sur la conception d'un site web pour une figure publique. Monsieur Amadou DIABY - Consultant financier et immobilier.",
        technologies: [
          "Wordpress",
          "HTML",
          "CSS",
          "Bootstrap",
          "Javascript",
          "PHP",
          "Elementor",
          "Wordpress Plugins",
          "Configuration SMTP",
          "Adobe Illustrator/VectorPea",
        ],
        url: "https://amadoudiaby.com",
        tools: ["Filezilla", "LWS"],
        type: "web",
        start: "2025",
        end: "2025",
      },
      {
        image: "unes-idf.png",
        title: "UNES IDF",
        role: "Développeur Web Fullstack",
        description:
          "Conception de site web pour l'Union des Etudiants et Stagiaires Ivoiriens d'Ile de France pour la promotion et l'insertion des étudiants et Stagiaires Ivoiriens en Ile de France.",
        technologies: [
          "React",
          "TypeScript",
          "TailwindCSS",
          "PHP",
          "Vite",
          "Github",
        ],
        url: "https://unes-idf.fr",
        tools: ["Filezilla", "IONOS"],
        type: "web",
        start: "2025",
        end: "2025",
      },
      {
        image: "ameetis.png",
        title: "AMEETIS",
        role: "Développeur Web Fullstack",
        description:
          "Conception de site web pour une association étudiante Ivoirienne de Strasbourg pour la promotion et l'insertion des élèves et étudiants ivoiriens à Strasbourg.",
        technologies: [
          "React",
          "TypeScript",
          "TailwindCSS",
          "PHP",
          "Vite",
          "Github",
        ],
        url: "https://ameetis.fr",
        tools: ["Filezilla", "IONOS"],
        type: "web",
        start: "2025",
        end: "2025",
      },
      {
        image: "aesss.png",
        title: "AESSS",
        role: "Développeur Web Fullstack",
        description:
          "Conception de site web pour une association étudiante Sénégalaise de Strasbourg pour la promotion et l'insertion des étudiants et stagiaires Sénégalais à Strasbourg.",
        technologies: [
          "React",
          "TypeScript",
          "Bootstrap",
          "PHP",
          "Vite",
          "Github",
        ],
        tools: ["Filezilla", "IONOS"],
        type: "web",
        url: "https://aess-strasbourg.fr",
        start: "2024",
        end: "2025",
      },
      {
        image: "ongylla.png",
        title: "ONGYLLA",
        role: "Développeur Web Fullstack",
        description:
          "Maintenance sur le site web d'une ONG dans la lutte contre le cancer du sein.",
        technologies: [
          "Wordpress",
          "HTML",
          "CSS",
          "Bootstrap",
          "Javascript",
          "PHP",
          "Elementor",
          "Wordpress Plugins",
          "Configuration SMTP",
        ],
        tools: ["Filezilla"],
        type: "web",
        url: "https://ongylla.org",
        start: "2023",
        end: "Juin 2024",
      },
      {
        image: "radioylla.png",
        title: "Radio YLLA",
        role: "Développeur Mobile Fullstack",
        description: `Développement d'une application mobile Cross-Plateform pour la web radio: Radio Ylla. PS: L'application 
          n'est plus maintenue en production.`,
        technologies: ["Flutter", "Dart"],
        tools: ["Google Play Console"],
        type: "mobile",
        url: "https://radioylla.com",
        start: "2023",
        end: "Juin 2024",
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

  const [page, setPage] = useState(1);
  const paginationConfig = useMemo(() => {
    return {
      maxPage: () => Math.ceil(itemsFiltered.length / paginationConfig.limit),
      limit: 6,
      page: page,
      setPage: setPage,
      previous: () => setPage(paginationConfig.page - 1),
      next: () => setPage(paginationConfig.page + 1),
      start: () => {
        return (paginationConfig.page - 1) * paginationConfig.limit;
      },
      end: () => {
        return paginationConfig.page * paginationConfig.limit;
      },
    };
  }, [itemsFiltered.length, page]);

  useEffect(() => {
    if (page < 1 && itemsFiltered.length !== 0) {
      setPage(1);
    }
    if (page > paginationConfig.maxPage()) {
      setPage(paginationConfig.maxPage);
    }
  }, [
    itemsFiltered.length,
    page,
    paginationConfig,
    paginationConfig.maxPage,
    paginationConfig.page,
  ]);

  const {theme} = useTheme();

  return (
    <>
      <section className={clsx("flex flex-col", theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white dark:bg-gray-900 dark:text-white")}>
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
            {itemsFiltered.length === 0 && (
              <div className={clsx("flex py-8 items-center justify-center", theme === "light" ? "text-sky-400" : "text-red-400 dark:text-red-400")}>
                <AlertTriangle className="size-6 me-2" />
                <p className="font-bold">Les projets seront bientôt ajoutés.</p>
              </div>
            )}
            {itemsFiltered.length > 0 &&
              itemsFiltered
                .slice(
                  paginationConfig.start(),
                  paginationConfig.end()
                )
                .map((item, index) => (
                  <ProjectCard key={nanoid()} item={item} index={index} />
                ))}
          </div>
        </div>
        <section className="py-4">
          {itemsFiltered.length > 0 && (
            <Pagination
              page={paginationConfig.page}
              setPage={paginationConfig.setPage}
              maxPage={paginationConfig.maxPage()}
            />
          )}
        </section>
      </section>
    </>
  );
};

export default Projects;
