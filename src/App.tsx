import Header from "./components/Header";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
// import Gallery from "./components/Gallery";
import About from "./components/About";
// import Team from "./components/Team";
import Footer from "./components/Footer";
// import Video from "./components/Video";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GalleryPage from "./GalleryPage";
import Contact from "./components/Contact";
import Ticket from "./components/Ticket";
// Removed: import { Analytics } from "@vercel/analytics/react";
// Removed: import { SpeedInsights } from "@vercel/speed-insights/next";

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
                <section id="tickets">
                  <Ticket />
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
        {/* Removed: <Analytics /> */}
        {/* Removed: <SpeedInsights /> */}
      </div>
    </Router>
  );
};

export default App;
