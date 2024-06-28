import Header from "./components/Header";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Video from "./components/Video";
const App = () => {
  return (
    <div className="bg-white w-[99.2415vw]">
      <Header />
      <Hero />
      <Video />
      <Gallery />
      <Sponsors />
      <About />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
