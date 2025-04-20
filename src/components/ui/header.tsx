import { Facebook, Instagram, Linkedin, Youtube, GitHub, Inbox } from "react-feather";
import { OpenLink } from "../../utils/utilities";
import { nanoid } from "nanoid";
// import WhatsApp from "./icons/WhatsApp";
import TikTok from "./icons/Tiktok";
import X from "./icons/X";
import { Link } from "react-router-dom";

const Header = ({ref}:{ref: React.RefObject<HTMLDivElement | null>}) => {
  const social = [
    {
      icon: <GitHub className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "Github",
      url: "#",
    },
    {
      icon: <Linkedin className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "LinkedIN",
      url: "#",
    },
    {
      icon: <Facebook className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "Facebook",
      url: "#",
    },
    // {
    //     icon: <WhatsApp className='size-6 hover:text-sky-400 hover:dark:text-red-400/20' />,
    //     label: "WhatsApp",
    //     url: "#"
    // },
    {
      icon: <Instagram className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "Instagram",
      url: "#",
    },
    {
      icon: <TikTok className={"size-6 hover:text-sky-400 hover:dark:text-red-400/20 hover:fill-sky-400 hover:dark:fill-red-400/20"} />,
      label: "Tiktok",
      url: "#",
    },
    {
      icon: <Youtube className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "Youtube",
      url: "#",
    },
    {
      icon: <X className={"size-6 hover:text-sky-400 hover:dark:text-red-400/20 hover:fill-sky-400 hover:dark:fill-red-400/20"} />,
      label: "X",
      url: "#",
    },
    {
      icon: <Inbox className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />,
      label: "Mail",
      url: "#",
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
