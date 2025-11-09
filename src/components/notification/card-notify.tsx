import clsx from "clsx";

const NoticationCard = (props: {type : string; message : string;}) => {

    return (
        <>
            <div className={clsx(`fixed font-bold uppercase rounded-md top-25 lg:top-50 right-0 flex items-center 
                px-4 py-4 max-w-80 bg-gradient-to-right shadow-lg` ,
                props["type"] == "success" && "from-green-500 via-green-200 to-green-500 shadow-green-600",
                props["type"] == "failure" && "from-red-500 via-red-200 to-red-500 shadow-red-600")}>
                {props["message"]}
            </div>
        </>
    );
}

export default NoticationCard;