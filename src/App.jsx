import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-x-hidden">
        <Hero />
        <About />
        <Features />
      </main>
    </>
  );
};

export default App;
