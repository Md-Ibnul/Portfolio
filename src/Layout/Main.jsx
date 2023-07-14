import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Tech from "../components/Tech/Tech";

const Main = () => {
    return (
        <div className="bg-white dark:bg-black">
            <Navbar />
            <Banner />
            <About />
            <Tech />
            <Projects />
            <Footer />
        </div>
    );
};

export default Main;