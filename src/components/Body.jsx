import About from "./About";
import Hero from "./Hero";
import Facts from "./Facts";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
function Body() {
    return (
        <main id="main">
            <Hero />
            <About />
            <Facts />
            <Skills />
            <Portfolio />
            <Services />
            <Contact />
        </main>
    );
}

export default Body;