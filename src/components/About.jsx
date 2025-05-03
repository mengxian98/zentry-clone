import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./shared/AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageFrameRef = useRef(null);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: imageFrameRef.current,
        start: "center center",
        end: "+=1000 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      borderRadius: 0,
      width: "100%",
      height: "100%",
      top: 0,
    });
  });

  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col items-center justify-between text-center pt-56">
        <AnimatedTitle
          caption="Welcome to Zentry"
          title="Disc<b>o</b>ver the world's<br />largest shared <b>a</b>dventure"
        />
        <div ref={imageFrameRef} className="relative h-screen w-full">
          <div className="about-image mask-clip-path z-20">
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
