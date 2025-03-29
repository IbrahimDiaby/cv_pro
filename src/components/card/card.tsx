import clsx from 'clsx';
import { JSX, useState } from 'react';

const Card = ({item} : {item : {icon : JSX.Element; title: string; text: string;}}) => {

    const [hover, setHover] = useState(false);

    return (
        <>
            <div onMouseOver={() => { setHover(true); }} onMouseOut={() => { setHover(false); }} className="flex hover:scale-105 flex-col w-full lg:min-w-80 flex-wrap cursor-pointer px-4 py-6 bg-gray-100 transition duration-1000 text-black dark:text-white dark:bg-black/40 rounded-lg hover:cursor-pointer hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-400 dark:hover:from-red-500 dark:hover:to-red-400 hover:text-white lg:flex-1" >
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