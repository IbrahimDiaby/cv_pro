import About from "../components/about/about";
import ContactMe from "../components/forms/contact";
import Projects from "../components/projects/projects";

const Home = () => {
    return (
        <>
            <section className="flex flex-col w-screen min-h-screen">
                <About />
                <Projects />
                <ContactMe />
            </section>
        </>
    )
}

export default Home;