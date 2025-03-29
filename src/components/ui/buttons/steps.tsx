
const Step = (item : {step: string, title: string, text:string}) =>{
    return (
        <>
            <div className="relative flex w-75 transition transform gap-x-2 p-4 cursor-pointer hover:scale-105 hover:bg-gradient-to-br hover:from-green-500 hover:to-green-400 lg:min-w-[48%] lg:max-w-100 rounded-md bg-gray-100 dark:bg-black/40 ">
                <div className="absolute -top-5 -left-5 flex items-center max-h-9 lg:max-h-10 text-xl lg:text-2xl font-bold min-w-10 justify-center bg-gradient-to-r from-green-500 to-green-400 uppercase px-2 py-4 rounded-md">{item["step"]}</div>
                <div className="flex flex-col">
                    <div className="flex text-2xl lg:text-4xl font-bold mb-2 uppercase">{item["title"]}</div>
                    <div className="flex">{item["text"]}</div>
                </div>
            </div>
        </>
    )
}

export default Step;