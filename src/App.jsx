import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-x-hidden">
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
