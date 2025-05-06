import { Facebook, Instagram, Linkedin, Youtube, GitHub, Inbox, Codesandbox } from "react-feather";
import { OpenLink } from "../../utils/utilities";
import { nanoid } from "nanoid";
import TikTok from "./icons/Tiktok";
import X from "./icons/X";
import { Link } from "react-router-dom";

const Header = ({ref}:{ref: React.RefObject<HTMLDivElement | null>}) => {
  const social = [
    {
      icon: <Codesandbox className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "Linktree",
      url: "https://linktr.ee/ID_GEN",
    },
    {
      icon: <GitHub className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "Github",
      url: "#",
    },
    {
      icon: <Linkedin className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "LinkedIN",
      url: "https://www.linkedin.com/in/ibrahim-d-023474144",
    },
    {
      icon: <Facebook className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "Facebook",
      url: "https://www.facebook.com/MasterDigitMasterID",
    },
    {
      icon: <Instagram className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "Instagram",
      url: "https://www.instagram.com/idgen_2k25/#",
    },
    {
      icon: <TikTok className={"size-6 hover:text-sky-400 hover:dark:text-red-400/20 hover:fill-sky-400 hover:dark:fill-red-400/20"} />,
      label: "Tiktok",
      url: "https://www.tiktok.com/@id32946",
    },
    {
      icon: <Youtube className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "Youtube",
      url: "https://www.youtube.com/@Ibrahim_D001",
    },
    {
      icon: <X className={"size-6 hover:text-sky-400 hover:dark:text-red-400/20 hover:fill-sky-400 hover:dark:fill-red-400/20"} />,
      label: "X",
      url: "https://x.com/ID7474662868808",
    },
    {
      icon: <Inbox className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "Mail",
      url: "mailto:ibrahim.diaby707@gmail.com",
    },
  ];

  return (
    <>
      <header ref={ref} className="flex w-screen shadow-md">
        <nav className="p-6 flex w-full justify-between">
          <div className="text-4xl uppercase font-bold">
            <Link role={"button"} to={"/"}><span>ID</span></Link>
          </div>
          <div className="flex flex-1 gap-x-2 items-center justify-end">
            {social.map((item) => {
              return (
                <li
                  onClick={() => OpenLink(item["url"])}
                  title={item["label"]}
                  key={nanoid()}
                  className="flex cursor-pointer items-center gap-x-2 list-none  hover:cursor-pointer hover:animate-bounce"
                >
                  {item["icon"]}
                </li>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
