import { imagePath } from "../../utils/utilities";

const Maintenance = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center font-bold h-screen w-screen lg:px-4 lg:p-0 ">
                <div className="cursor-pointer my-8 rounded-md animate-pulse shadow-lg shadow-sky-400 dark:shadow-red-400">
                    <img
                        className="mix-blend-screen rounded-md size-40"
                        src={`${imagePath}/favicon.png`}
                        width={150}
                        height={150}
                        alt={""}
                    />
                </div>
                <div className="lg:py-2">
                    <p className="text-center text-pretty">
                        Excellente nouvelle.<br />
                        Le portofolio fait peau neuf.
                    </p>
                </div>
                <div className="py-1">
                    Contactez-moi : <a className="text-sky-400 dark:text-red-400 text-lg" href="mailto:ibrahim.diaby707@gmail.com">ibrahim.diaby707@gmail.com</a>
                </div>
            </div>
        </>
    );
}

export default Maintenance;