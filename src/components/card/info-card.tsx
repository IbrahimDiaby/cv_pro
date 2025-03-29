import clsx from 'clsx';
import { JSX, useState } from 'react';

const InfoCard = ({item} : {item : {icon : JSX.Element; title: string; text: string;}}) => {

    const [hover, setHover] = useState(false);

    return (
        <>
            <div onMouseOver={() => { setHover(true); }} onMouseOut={() => { setHover(false); }} className="flex justify-center items-center flex-col gap-y-2 w-full lg:min-w-75 lg:max-w-1/3 flex-wrap cursor-pointer px-4 py-6 bg-gray-100 transition duration-1000 text-black dark:text-white dark:bg-black/40 rounded-lg hover:cursor-pointer hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-400 dark:hover:from-red-500 dark:hover:to-red-400 hover:text-white lg:flex-1" >
                <div className="flex">
                    <div className={clsx(`transition transform duration-1000 px-2 py-2 bg-gray-400/30 rounded-lg`, hover && "bg-white")}>
                        {item["icon"]}
                    </div>
                </div>
                <div className="text-sm font-bold uppercase">
                    <h3 className="text-center">{item["title"]}</h3>
                </div>
                <div className="text-sm text-pretty w-full text-ellipsis text-center">{item["text"]}</div>
            </div>
        </>
    )
}

export default InfoCard;