import {
  RocketLaunchIcon,
  GlobeAltIcon,
  ArrowPathRoundedSquareIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { nanoid } from "nanoid";
import Card from "../card/card";
import InfoCard from "../card/info-card";
import { Download, Eye, Globe, Mail, PhoneCall } from "react-feather";
import { docsPath, imagePath, scholarshipPath } from "../../utils/utilities";
import { useTheme } from "../../context/themeContext";
// import { myObserver } from "../../utils/observer.ts";
// import { useEffect } from "react";

const About = () => {
  const { theme } = useTheme();
  // const scholarshipList = document.querySelectorAll(".scholarship img");
  // myObserver.className = "scaler";
  //   useEffect(() => {
  //     scholarshipList.forEach((entry) => {
  //       myObserver.observer.observe(entry);
  //     });

  //     return () => {
  //       scholarshipList.forEach((entry) => {
  //         myObserver.observer.unobserve(entry);
  //       });
  //     };
  //   }, [scholarshipList]);

  const infos = [
    {
      icon: (
        <>
          <PhoneCall
            className={clsx(
              `size-16`,
              theme === "light"
                ? "text-sky-400"
                : "text-red-400 dark:text-red-400"
            )}
          />
        </>
      ),
      title: "Contact",
      text: "Non disponible",
    },
    {
      icon: (
        <>
          <Mail
            className={clsx(
              `size-16`,
              theme === "light"
                ? "text-sky-400"
                : "text-red-400 dark:text-red-400"
            )}
          />
        </>
      ),
      title: "Email",
      text: "ibrahim.diaby707@gmail.com",
    },
    {
      icon: (
        <>
          <Globe
            className={clsx(
              `size-16`,
              theme === "light"
                ? "text-sky-400"
                : "text-red-400 dark:text-red-400"
            )}
          />
        </>
      ),
      title: "Localisation",
      text: "France",
    },
  ];

  const aboutMe = [
    {
      icon: (
        <>
          <RocketLaunchIcon
            className={clsx(
              `size-16`,
              theme === "light"
                ? "text-sky-400"
                : "text-red-400 dark:text-red-400"
            )}
          />
        </>
      ),
      title: "Freelancer",
      text: "Flexibilité & Adaptabilité – Des prestations taillées sur mesure selon vos besoins. Engagement & Réactivité – Un travail de qualité, livré dans les délais. Créativité & Expertise – Des solutions innovantes et efficaces pour faire la différence.",
    },
    {
      icon: (
        <>
          <GlobeAltIcon
            className={clsx(
              `size-16`,
              theme === "light"
                ? "text-sky-400"
                : "text-red-400 dark:text-red-400"
            )}
          />
        </>
      ),
      title: "Développeur Web/Mobile",
      text: "Passionné, rigoureux et créatif, je conçois des applications web et mobiles performantes, adaptées à vos besoins. Mon objectif ? Transformer vos idées en solutions digitales intuitives et efficaces.",
    },
    {
      icon: (
        <>
          <ArrowPathRoundedSquareIcon
            className={clsx(
              `size-16`,
              theme === "light"
                ? "text-sky-400"
                : "text-red-400 dark:text-red-400"
            )}
          />
        </>
      ),
      title: "UI/UX Design",
      text: "Créatif, rigoureux et à l'écoute, je mets mon expertise au service de vos projets pour vous offrir des solutions sur mesure. Je vous accompagne de l'idée à la réalisation avec une approche personnalisée et un souci du détail.",
    },
    {
      icon: (
        <>
          <UserGroupIcon
            className={clsx(
              `size-16`,
              theme === "light"
                ? "text-sky-400"
                : "text-red-400 dark:text-red-400"
            )}
          />
        </>
      ),
      title: "Bénévole",
      text: "Engagement, bienveillance et détermination, trois valeurs qui guident mon action en tant que bénévole. Donner de mon temps pour aider, accompagner et soutenir est une mission qui me tient à cœur.",
    },
  ];

  return (
    <>
      <section
        className={clsx(
          "flex flex-col lg:flex-row px-10 py-4 w-full min-h-screen",
          theme === "light"
            ? "bg-white text-black"
            : "bg-gray-900 text-white dark:bg-gray-900 dark:text-white"
        )}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="flex lg:px-4 flex-col order-2 lg:order-0">
            <h1 className="font-bold text-center lg:text-start mb-2 uppercase text-4xl lg:text-8xl">
              <div className="flex items-center justify-center lg:items-start lg:justify-normal">
                <div className="typing">Ibrahim DIABY</div>
              </div>
            </h1>
            <div className="scholarship my-2 py-4 flex flex-wrap flex-col items-center justify-center lg:items-start lg:flex-row w-full gap-4 rounded-full">
              <img
                className="w-20 h-20 aspect-square"
                src={`${scholarshipPath}/nanci.png`}
                alt="NaN CI"
                title="NaN CI"
                srcSet={`${scholarshipPath}/nanci.png`}
              />
              <img
                className="w-100 h-20 aspect-square"
                src={`${scholarshipPath}/unistra.png`}
                alt="Unistra"
                title="Unistra"
                srcSet={`${scholarshipPath}/unistra.png`}
              />
              <img
                className="w-100 h-20 aspect-square"
                src={`${scholarshipPath}/uspn.png`}
                alt="USPN"
                title="USPN"
                srcSet={`${scholarshipPath}/uspn.png`}
              />
            </div>
            <h3
              className={clsx(
                "font-bold text-center lg:text-start mb-2 uppercase text-2xl lg:text-4xl",
                theme === "light"
                  ? "text-sky-400"
                  : "text-red-400 dark:text-red-400"
              )}
            >
              <span className="animate-wiggle">Développeur Full-Stack</span>
            </h3>
            <div className="flex flex-col gap-y-4">
              <p className="text-pretty">
                Passionné par le développement et les nouvelles technologies, je
                suis un développeur Full-stack avec une expertise en TypeScript,
                React, Node.js, Python et une grande familiarité avec divers API
                et frameworks. J'ai une énorme expérience en React Native et
                Flutter pour le développement mobile. Mon objectif est de
                concevoir des applications performantes, intuitives et
                évolutives, en mettant l'accent sur la qualité du code et
                l'expérience utilisateur.
              </p>
              <p className="text-pretty">
                Fort d'une expérience en Freelance, j'ai travaillé sur divers
                projets allant de sites web dynamiques, applications mobiles et
                API robustes à des solutions personnalisées pour répondre aux
                besoins spécifiques des clients. J'aime relever de nouveaux
                défis techniques et collaborer avec des équipes
                multidisciplinaires pour donner vie à des idées innovantes.
              </p>
              <p className="text-pretty">
                Toujours en quête d'amélioration, je veille à rester à jour sur
                les tendances du développement en explorant de nouvelles
                technologies et en contribuant à des projets open source.
              </p>

              <p className="text-pretty">
                📩 Envie de collaborer ? N'hésitez pas à me contacter pour
                discuter de votre projet !
              </p>
              <p className="text-pretty">
                Créatif, rigoureux et à l'écoute, je mets mon expertise au
                service de vos projets pour vous offrir des solutions sur mesure
              </p>
            </div>
            <section className="flex flex-col gap-y-4 lg:flex-row lg:gap-y-2 py-4 gap-x-4">
              <a
                download={"CV-IbrahimDIABY-STAGE2025.pdf"}
                href={`${docsPath}/CV.pdf`}
                className={clsx(
                  `gap-2 items-center w-full lg:w-fit justify-center transition delay-75 duration-1000 flex font-bold cursor-pointer capitalize px-4 py-2 border-2 rounded-md`,
                  theme === "light"
                    ? "text-sky-400 hover:bg-white/40"
                    : "bg-black/40 text-red-400 dark:text-red-400 dark:bg-black/40",
                  `hover:scale-105 ${
                    theme === "light"
                      ? "hover:bg-white/40 hover:text-sky-600"
                      : "hover:text-red-400 hover:bg-black/40 hover:dark:text-red-600 hover:dark:bg-black/40"
                  }`
                )}
              >
                Télécharger le CV <Download className="size-6 mb-1 " />
              </a>

              <a
                target="_blank"
                href={`${docsPath}CV.pdf`}
                className={clsx(
                  `gap-2 items-center w-full lg:w-fit justify-center transition delay-75 duration-1000 flex font-bold cursor-pointer capitalize px-4 py-2 border-2 rounded-md`,
                  theme === "light"
                    ? "text-sky-400 hover:bg-white/40"
                    : "bg-black/40 text-red-400 dark:text-red-400 dark:bg-black/40",
                  `hover:scale-105 ${
                    theme === "light"
                      ? "hover:bg-white/40 hover:text-sky-600"
                      : "hover:text-red-400 hover:bg-black/40 hover:dark:text-red-600 hover:dark:bg-black/40"
                  }`
                )}
              >
                Visualiser le CV <Eye className="size-6 mb-1 " />
              </a>
              <div className="flex items-center justify-center ">
                <a
                className="w-50 h-20 lg:w-40 lg:h-15"
                target="_blank"
                href={`https://www.salesforce.com/trailblazer/a0gomi43u6jfeawehh`}>
                <img
                  className="w-full h-full aspect-square cursor-pointer"
                  src={`${scholarshipPath}/salesforce.png`}
                  alt="Salesforce Profile"
                  title="Salesforce Profile"
                  srcSet={`${scholarshipPath}/salesforce.png`}
                  />
                </a>
              </div>
            </section>
            <section className="flex flex-col lg:flex-row py-4 w-full">
              <div className="flex flex-col">
                <div className="flex flex-wrap gap-y-4 lg:gap-4">
                  {infos.map((item) => (
                    <InfoCard key={nanoid()} item={item} />
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div className="flex relative min-w-1/3 order-1 lg:order-0 vh-90 lg:h-170 overflow-y-hidden">
            <div className="hidden md:flex flex-col absolute top-0 z-10 animate-scan h-full w-full">
              <div
                className={clsx(
                  "h-1 w-full",
                  theme === "light"
                    ? "bg-sky-400"
                    : "bg-red-400 dark:bg-red-400"
                )}
              ></div>
              <div className="bg-transparent h-full w-full"></div>
            </div>
            <div className="animate-slide-in flex flex-col">
              <div className="animate-profile-pic overflow-y-hidden">
                <img
                  className="rounded-md mb-4 lg:mb-0 w-full vh-90 lg:h-170 aspect-square object-cover"
                  src={`${imagePath}/me.jpg`}
                  alt="Profile picture"
                  srcSet={`${imagePath}/me.jpg`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row px-10 py-4 w-full">
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-center">
            <h1 className="font-bold mb-4 uppercase text-4xl lg:text-6xl">
              Compétences
            </h1>
          </div>
          <div className="flex flex-wrap gap-y-4 lg:gap-4">
            {aboutMe.map((item) => (
              <Card key={nanoid()} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
