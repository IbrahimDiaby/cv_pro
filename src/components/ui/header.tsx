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
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header = ({ ref }: { ref: React.RefObject<HTMLDivElement | null> }) => {
  const social = [
    {
      icon: (
        <Linktree className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />
      ),
      label: "Linktree",
      url: "https://linktr.ee/ID_GEN",
    },
    {
      icon: (
        <GitHub className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />
      ),
      label: "Github",
      url: "https://github.com/IbrahimDiaby",
    },
    {
      icon: (
        <Linkedin className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />
      ),
      label: "LinkedIN",
      url: "https://www.linkedin.com/in/ibrahim-d-023474144",
    },
    {
      icon: (
        <Facebook className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />
      ),
      label: "Facebook",
      url: "https://www.facebook.com/MasterDigitMasterID",
    },
    {
      icon: (
        <Instagram className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />
      ),
      label: "Instagram",
      url: "https://www.instagram.com/idgen_2k25/#",
    },
    {
      icon: (
        <TikTok
          className={
            "size-6 hover:text-sky-400 hover:dark:text-red-400/20 hover:fill-sky-400 hover:dark:fill-red-400/20"
          }
        />
      ),
      label: "Tiktok",
      url: "https://www.tiktok.com/@id32946",
    },
    {
      icon: (
        <Youtube className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />
      ),
      label: "Youtube",
      url: "https://www.youtube.com/@Ibrahim_D001",
    },
    {
      icon: (
        <X
          className={
            "size-6 hover:text-sky-400 hover:dark:text-red-400/20 hover:fill-sky-400 hover:dark:fill-red-400/20"
          }
        />
      ),
      label: "X",
      url: "https://x.com/ID7474662868808",
    },
    {
      icon: (
        <Inbox className="size-6 hover:text-sky-400 hover:dark:text-red-400/20" />
      ),
      label: "Mail",
      url: "mailto:ibrahim.diaby707@gmail.com",
    },
  ];

  const [show, setShow] = useState(false);
  return (
    <>
      <header ref={ref} className="flex h-24 w-screen shadow-md">
        <nav className="p-6 flex w-full justify-between">
          <div className="text-4xl uppercase font-bold">
            <Link role={"button"} to={"/"}>
              <span className="">ID</span>
            </Link>
          </div>
          <div className="flex flex-1 gap-x-2 items-center justify-end">
            <div className="flex lg:hidden items-end">
              <li
                onClick={() => setShow(!show)}
                title={"menu"}
                key={nanoid()}
                className="flex cursor-pointer items-center gap-x-2 list-none hover:animate-bounce"
              >
                {!show && <Menu className="size-10 hover:text-sky-400 hover:dark:text-red-400/20" />}
                {show && <XMarkIcon className="size-10 hover:text-sky-400 hover:dark:text-red-400/20" />}
              </li>
            </div>
            <div className={clsx("px-8 dark:bg-neutral-800 lg:dark:bg-transparent items-end justify-end absolute py-2 left-0 top-24 w-screen h-auto gap-y-4 flex flex-col lg:w-full lg:relative lg:items-end lg:justify-end lg:top-0 lg:flex-row lg:gap-x-1", show ? "animate_showMenu lg:animate-none" : "animate_hiddenMenu lg:animate-none")}>
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
};

export default Header;
