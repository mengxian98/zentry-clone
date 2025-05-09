import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-x-hidden">
        <Hero />
        <About />
      </main>
    </>
  );
};

export default App;
