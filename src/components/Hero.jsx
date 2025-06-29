import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Button from "./shared/Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoFrameRef = useRef(null);
  const nextVideoPlayerRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [clicked, setClicked] = useState(false);

  const totalVideos = 4;
  const nextVideoIndex = (currentVideoIndex % totalVideos) + 1;

  const handleVideoPreviewClick = () => {
    setCurrentVideoIndex(nextVideoIndex);
    setClicked(true);
  };

  useGSAP(
    () => {
      if (clicked) {
        gsap.set(nextVideoPlayerRef.current, { visibility: "visible" });
        gsap.fromTo(
          nextVideoPlayerRef.current,
          {
            scale: 0.3,
            duration: 0.25,
            ease: "power1.inOut",
            zIndex: 30,
          },
          {
            scale: 1,
            duration: 1,
            ease: "power1.inOut",
            zIndex: 10,
            onComplete: () => setClicked(false),
          }
        );
      }
    },
    {
      dependencies: [currentVideoIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set(videoFrameRef.current, {
      clipPath: "polygon(15% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from(videoFrameRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: videoFrameRef.current,
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div>
      <div ref={videoFrameRef} className="relative h-screen w-full z-5">
        <video
          loop
          autoPlay
          muted
          className="size-full video-center"
          src={`./videos/hero-${currentVideoIndex}.mp4`}
        />

        <video
          loop
          autoPlay
          muted
          ref={nextVideoPlayerRef}
          className="size-full video-center absolute top-0 left-0 invisible"
          src={`./videos/hero-${currentVideoIndex}.mp4`}
        />

        <div
          className="absolute-center mask-clip-path cursor-pointer rounded-lg scale-50 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-500 ease-in overflow-hidden z-20"
          onClick={handleVideoPreviewClick}
        >
          <video
            loop
            muted
            className="video-center scale-150 size-64"
            src={`./videos/hero-${nextVideoIndex}.mp4`}
          />
        </div>

        <section className="absolute top-0 left-0 px-12 mt-28 z-50">
          <h1 className="hero-heading special-font text-blue-100">
            Redefi<b>n</b>e
          </h1>
          <p className="text-md text-blue-100 mb-5">
            Enter the Metagame. Defy the Odds.
            <br />
            Command your fleet - the war for stars begin now!
          </p>
          <Button buttonClass="bg-yellow-300" text="Watch Trailer" />
        </section>

        <div className="absolute bottom-5 right-12 z-50">
          <h2 className="hero-heading special-font text-blue-75">
            G<b>a</b>ming
          </h2>
        </div>
      </div>
      <div className="absolute bottom-5 right-12">
        <h2 className="hero-heading special-font text-black">
          G<b>a</b>ming
        </h2>
      </div>
    </div>
  );
};

export default Hero;
