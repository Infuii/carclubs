import Header from "./components/Header";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Team from "./components/Team";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Sponsors />
      <Gallery />
      <About />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
