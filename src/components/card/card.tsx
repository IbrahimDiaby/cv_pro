import clsx from 'clsx';
import { JSX, useState } from 'react';
import { useTheme } from '../../context/themeContext';

interface ItemProps {item : {icon : JSX.Element; title: string; text: string;}}

const Card = ({item} : ItemProps ) => {

    const [hover, setHover] = useState(false);
      const { theme } = useTheme();

    return (
        <>
            <div onMouseOver={() => { setHover(true); }} onMouseOut={() => { setHover(false); }} className={clsx(`flex hover:scale-105 flex-col w-full 
            lg:min-w-80 flex-wrap cursor-pointer px-4 py-6 transition duration-1000 rounded-lg lg:flex-1`,
            theme === "light" ? "bg-gray-100 text-black hover:text-white hover:from-sky-500 hover:to-sky-400 hover:bg-linear-to-br hover:cursor-pointer"
            : `hover:bg-linear-to-br hover:cursor-pointer dark:text-white dark:bg-black/40 dark:hover:from-red-500 dark:hover:to-red-400
            text-white bg-black/40 hover:from-red-500 hover:to-red-400` )} >
                <div className="flex">
                    <div className={clsx(`transition transform duration-1000 px-2 py-2 bg-gray-400/30 rounded-lg mb-6`, hover && "bg-white")}>
                        {item["icon"]}
                    </div>
                </div>
                <div className="font-bold uppercase mb-2">
                    <h3>{item["title"]}</h3>
                </div>
                <div className="text-pretty w-full text-ellipsis">{item["text"]}</div>
            </div>
        </>
    )
}

export default Card;