const Footer = ({ref}:{ref: React.RefObject<HTMLDivElement | null>}) => {
    return (
        <>
        <footer ref={ref} className="flex mt-2 py-4 font-bold min-h-20 justify-center items-center shadow-lg shadow-black dark:shadow-white">
            <p className="text-center">Copyright 2025 &copy; Ibrahim DIABY - Tous droits reservés</p>
        </footer>
        </>
    );
}

export default Footer;