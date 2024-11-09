import Header from "./components/Header";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
// import Gallery from "./components/Gallery";
import About from "./components/About";
// import Team from "./components/Team";
import Footer from "./components/Footer";
import Video from "./components/Video";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GalleryPage from "./GalleryPage";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
                <Video />
                <Sponsors />
                <section id="about">
                  <About />
                </section>
                <section id="contact">
                  <Contact />
                  <Footer />
                </section>
              </>
            }
          />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
};
export default App;
