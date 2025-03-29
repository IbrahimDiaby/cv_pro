import { JSX } from "react";

const Button = (item : {icon?: JSX.Element, text:string}) =>{
    return (
        <>
            <div className="transition transform delay-75 duration-700 flex font-bold my-4 max-w-fit gap-x-2 cursor-pointer bg-gradient-to-r from-white/40 via-sky-400 to-white/60 dark:from-black/40 dark:via-red-400/50 dark:to-black/60 uppercase px-3 py-4 rounded-md shadow-lg dark:shadow-black shadow-black-500 hover:dark:shadow-red-400/50 hover:shadow-sky-500/50">{item["icon"]} {item["text"]}</div>
        </>
    )
}

export default Button;