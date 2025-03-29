import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "react-feather";

const ScrollButton = ({refHeader, refFooter}:{refHeader: React.RefObject<HTMLDivElement | null>, refFooter: React.RefObject<HTMLDivElement | null>}) => {

    const [isDown, setIsDown] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsDown(window.scrollY > window.screenY);
        });
    }, []);

    return (
        <>
            <div onClick={(isDown) ?
            () => {refHeader.current?.scrollIntoView({
                behavior: "smooth"
            }) }
            :
                () => {refFooter.current?.scrollIntoView({
                    behavior: "smooth"
                }) }
            } className="flex z-100 p-2 cursor-pointer fixed bottom-8 right-6 rounded-full border-2">
                {!isDown && <ArrowDown />}
                {isDown && <ArrowUp /> }
            </div>
        </>
    )
}

export default ScrollButton;