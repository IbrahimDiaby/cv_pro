import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  GitHub,
  Inbox,
  Menu,
} from "react-feather";
import { OpenLink } from "../../utils/utilities";
import { nanoid } from "nanoid";
import TikTok from "./icons/Tiktok";
import Linktree from "./icons/Linktree";
import X from "./icons/X";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { forwardRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useTheme } from "../../context/themeContext";

// const Header = ({ ref }: { ref: React.RefObject<HTMLDivElement | null> }) => {
  const Header = forwardRef<HTMLDivElement>((_props, ref) => {
    
    const {theme } = useTheme();
    
    const social = [
      {
        icon: (
        <Linktree className={clsx("size-6", theme === "light" ? "hover:text-sky-400 hover:fill-sky-400" : "hover:text-red-400/20 hover:dark:text-red-400/20 hover:fill-red-400/20 hover:dark:fill-red-400/20")} />
      ),
      label: "Linktree",
      url: "https://linktr.ee/ID_GEN",
    },
    {
      icon: (
        <GitHub className={clsx("size-6", theme === "light" ? "hover:text-sky-400 hover:fill-sky-400" : "hover:text-red-400/20 hover:dark:text-red-400/20 hover:fill-red-400/20 hover:dark:fill-red-400/20")} />
      ),
      label: "Github",
      url: "https://github.com/IbrahimDiaby",
    },
    {
      icon: (
        <Linkedin className={clsx("size-6", theme === "light" ? "hover:text-sky-400 hover:fill-sky-400" : "hover:text-red-400/20 hover:dark:text-red-400/20 hover:fill-red-400/20 hover:dark:fill-red-400/20")} />
      ),
      label: "LinkedIN",
      url: "https://www.linkedin.com/in/ibrahim-d-023474144",
    },
    {
      icon: (
        <Facebook className={clsx("size-6", theme === "light" ? "hover:text-sky-400 hover:fill-sky-400" : "hover:text-red-400/20 hover:dark:text-red-400/20 hover:fill-red-400/20 hover:dark:fill-red-400/20")} />
      ),
      label: "Facebook",
      url: "https://www.facebook.com/MasterDigitMasterID",
    },
    {
      icon: (
        <Instagram className={clsx("size-6", theme === "light" ? "hover:text-sky-400 hover:fill-sky-400" : "hover:text-red-400/20 hover:dark:text-red-400/20 hover:fill-red-400/20 hover:dark:fill-red-400/20")} />
      ),
      label: "Instagram",
      url: "https://www.instagram.com/idgen_2k25/#",
    },
    {
      icon: (
        <TikTok
          className={clsx("size-6", theme === "light" ? "hover:text-sky-400 hover:fill-sky-400" : "hover:text-red-400/20 hover:dark:text-red-400/20 hover:fill-red-400/20 hover:dark:fill-red-400/20")}
        />
      ),
      label: "Tiktok",
      url: "https://www.tiktok.com/@id32946",
    },
    {
      icon: (
        <Youtube className={clsx("size-6", theme === "light" ? "hover:text-sky-400 hover:fill-sky-400" : "hover:text-red-400/20 hover:dark:text-red-400/20 hover:fill-red-400/20 hover:dark:fill-red-400/20")} />
      ),
      label: "Youtube",
      url: "https://www.youtube.com/@Ibrahim_D001",
    },
    {
      icon: (
        <X
          className={clsx("size-6", theme === "light" ? "hover:text-sky-400 hover:fill-sky-400" : "hover:text-red-400/20 hover:dark:text-red-400/20 hover:fill-red-400/20 hover:dark:fill-red-400/20")}
        />
      ),
      label: "X",
      url: "https://x.com/ID7474662868808",
    },
    {
      icon: (
        <Inbox className={clsx("size-6", theme === "light" ? "hover:text-sky-400 hover:fill-sky-400" : "hover:text-red-400/20 hover:dark:text-red-400/20 hover:fill-red-400/20 hover:dark:fill-red-400/20")} />
      ),
      label: "Mail",
      url: "mailto:ibrahim.diaby707@gmail.com",
    },
  ];

  const [visibility, setVisibility] = useState("init"); // init, show, hide
  
  return (
    <>
      <header ref={ref} className={clsx("flex h-24 w-screen shadow-md", theme === "light" ? "bg-white shadow-gray-300 text-black" : "dark:bg-gray-900 dark:shadow-gray-300 dark:text-white bg-gray-900 shadow-gray-300 text-white")}>
        <nav className="p-6 flex w-full justify-between">
          <div className="hover:scale-105 transition delay-75 duration-300 text-4xl uppercase font-bold">
            <Link className={"flex flex-col"} role={"button"} to={"/"}>
              <span className="text-sm lg:text-3xl">ALCHIMID - AID</span>
              <span className="text-sm">Let's receipt your unique <span className={theme === "light" ? "text-sky-400" : "text-red-400 dark:text-red-400"}>&infin;</span> elixir</span>
            </Link>
          </div>
          <div className="flex flex-1 gap-x-2 items-center justify-end">
            <div className="flex lg:hidden items-end">
              <li
                onClick={() => setVisibility((visibility === "init") ? "show" : (visibility === "show") ? "hide" : "show")}
                title={"menu"}
                key={nanoid()}
                className="flex cursor-pointer items-center gap-x-2 list-none hover:animate-bounce"
              >
                {((visibility === "hide") || (visibility === "init")) && <Menu className="flex lg:hidden size-10 hover:text-sky-400 hover:dark:text-red-400/20" />}
                {visibility === "show" && <XMarkIcon className="flex lg:hidden size-10 hover:text-sky-400 hover:dark:text-red-400/20" />}
              </li>
            </div>
            <div className={clsx(`z-100 px-8 items-end justify-end absolute py-2 left-0 top-24 w-screen h-auto gap-y-4 flex flex-col lg:w-full lg:relative lg:items-end lg:justify-end lg:top-0 lg:flex-row lg:gap-x-1`, theme === "light" ? "bg-white lg:bg-transparent" : "bg-gray-900 lg:bg-transparent dark:bg-gray-900 dark:lg:bg-transparent", visibility === "show" ? "animate-expand lg:animate-none" : (visibility === "hide") ? "animate-shrink lg:animate-none" : "")}>
              {social.map((item) => {
                return (
                  <li
                    onClick={() => OpenLink(item["url"])}
                    title={item["label"]}
                    key={nanoid()}
                    className={clsx("flex cursor-pointer items-center gap-x-2 list-none hover:animate-bounce")}
                  >
                    <span className="flex font-bold lg:hidden">{item["label"]}</span> {item["icon"]}
                  </li>
                );
              })}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
});

export default Header;
