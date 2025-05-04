import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoCaretDown } from "react-icons/io5";
import IconProvider from "./shared/IconProvider";
import Button from "./shared/Button";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const audioRef = useRef(null);
  const [audioPlay, setAudioPlay] = useState(false);

  useEffect(() => {
    audioPlay ? audioRef.current.play() : audioRef.current.pause();
  }, [audioPlay]);

  useGSAP(
    () => {
      if (audioPlay) {
        gsap.to(".audio-indicator", {
          keyframes: {
            "0%": {
              y: "1",
              height: "3px",
            },
            "75%": {
              y: "0",
              height: "10px",
              ease: "power3.inOut",
            },
            "100%": {
              y: "1",
              height: "3px",
            },
          },
          duration: 0.45,
          repeat: -1,
          stagger: 0.1,
        });
      }
    },
    { dependencies: [audioPlay], revertOnUpdate: true }
  );

  return (
    <div className="sticky top-0 left-0 w-full z-80">
      <header className="absolute top-3 left-[1%] w-[98%] rounded-sm bg-black">
        <nav className="h-8 lg:h-12 xl:h-16  px-4 lg:px-8 flex items-center justify-between">
          <div className="h-full flex items-center gap-4">
            <img src="./img/logo.png" alt="logo" className="h-3/4 mr-4" />
            <Button
              text="Products"
              size="small"
              trailingIcon={
                <IconProvider value={{ size: "0.8rem" }}>
                  <IoCaretDown />
                </IconProvider>
              }
            />
            <Button text="Whitepaper" size="small" />
          </div>
          <div className="flex items-center gap-10 text-blue-75">
            <ul className="flex items-center gap-10 xl:gap-12 font-general text-[8px] lg:text-xs uppercase">
              {navItems.map((item) => (
                <li key={item.toLowerCase()}>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
            <div>
              <audio
                ref={audioRef}
                className="hidden"
                src="./audio/loop.mp3"
                loop
              ></audio>
              <div
                className="flex items-center gap-1 h-3 cursor-pointer"
                onClick={() => setAudioPlay((prev) => !prev)}
              >
                {[1, 2, 3, 4].map((bar) => (
                  <div key={bar} className="audio-indicator" />
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
