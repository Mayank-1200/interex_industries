import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Products />
        <About />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default App;