import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Pagination = () => {
    return (
        <>
            <div className="flex items-center justify-center gap-x-4 transition delay-75 duration-1000">
                <div className="previous size-12 hover:cursor-pointer hover:text-orange-400"><ArrowLeftCircleIcon /></div>
                <div className="next size-12 hover:cursor-pointer hover:text-orange-400"><ArrowRightCircleIcon /></div>
            </div>
        </>
    )
}

export default Pagination;