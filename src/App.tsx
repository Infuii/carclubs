import Header from "./components/Header";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GalleryPage from "./GalleryPage";
import Contact from "./components/Contact";
import NewsArticles from "./components/NewsArticles";
// import RegistrationForm from "./components/RegistrationForm"; 

const App = () => {
  return (
    <Router>
      <div className="bg-white w-screen">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                {/* <RegistrationForm /> */}
                <section id="tickets">
                  <NewsArticles />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="contact">
                  <Sponsors />
                  <Contact />
                  <Footer />
                </section>
              </>
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;