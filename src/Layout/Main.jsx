import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Tech from "../components/Tech/Tech";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Tech />
        </div>
    );
};

export default Main;