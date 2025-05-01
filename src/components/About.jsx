import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col items-center justify-between text-center pt-56">
        <div className="uppercase">
          <p className="font-general text-[8px] tracking-wider mb-8">
            Welcome to Zentry
          </p>
          <h3 className="font-zentry text-5xl md:text-8xl">
            Discover the world's
            <br />
            largest shared adventure
          </h3>
        </div>
        <div className="relative h-screen w-full">
          <div className="about-image mask-clip-path">
            <img
              src="./img/about.webp"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
          <div className="about-subtext">
            <p className="mb-1 text-black">Your life - now an epic MMORPG</p>
            <p className="text-neutral-400">
              Whether you seek glory in battle or fame as a crafter - Zentry
              offers an endless adventure in a fantasy realm forged by your
              actions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
