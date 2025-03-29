import clsx from "clsx";

const TechCard = ({text, active} : {text:string, active? : boolean}) => {
    return (
        <>
        <div className={clsx("transition delay-75 duration-1000 flex font-bold cursor-pointer capitalize px-4 py-2 border-2 rounded-md hover:scale-105 hover:text-sky-400 hover:bg-white/40 dark:hover:bg-black/40 dark:hover:text-red-400", active && "scale-105 text-sky-400 bg-white/40 dark:bg-black/40 dark:text-red-400")}>
            {text}
        </div>
        </>
    );
}

export default TechCard;