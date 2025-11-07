import clsx from "clsx";
import About from "../components/about/about";
import ContactMe from "../components/forms/contact";
import Projects from "../components/projects/projects";
import { useTheme } from "../context/themeContext";

const Home = () => {
    const {theme} = useTheme()
    return (
        <section className={clsx("flex flex-col w-screen min-h-screen", theme === "light" ? "bg-white" : "bg-gray-900")}>
            <About />
            <Projects />
            <ContactMe />
        </section>
    )
}

export default Home;