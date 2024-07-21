import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextParallaxContentExample from "./components/TextParallaxContent";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutTheBusiness from "./components/AboutTheBusiness";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VisionAndValues from "./components/VisionAndValues";
import GalleryPage from "./components/Gallerypage";
import Shopping from './components/Shopping';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-[90px]"> {/* Adjust the top padding to prevent content from being covered */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <VisionAndValues />
              <AboutTheBusiness />
              <div style={{ paddingTop: '80px' }}>
                <TextParallaxContentExample />
              </div>
              <Contact />
            </>
          } />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
