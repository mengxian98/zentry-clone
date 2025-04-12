import { useState } from "react";
import Button from "./shared/Button";

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);

  const totalVideos = 4;
  const nextVideoIndex = (currentVideoIndex % totalVideos) + 1;

  const handleVideoPreviewClick = () => {
    setCurrentVideoIndex(nextVideoIndex);
  };

  return (
    <section>
      <div className="relative h-screen w-full">
        <video
          loop
          autoPlay
          className="size-full video-center"
          src={`/videos/hero-${currentVideoIndex}.mp4`}
        />

        <div
          className="absolute-center mask-clip-path cursor-pointer rounded-lg scale-50 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-500 ease-in overflow-hidden z-50"
          onClick={handleVideoPreviewClick}
        >
          <video
            loop
            muted
            className="video-center scale-150 size-64"
            src={`/videos/hero-${nextVideoIndex}.mp4`}
          />
        </div>

        <div className="absolute top-0 left-0 px-12 mt-28">
          <h1 className="hero-heading special-font text-blue-100">
            Redefi<b>n</b>e
          </h1>
          <p className="text-md text-blue-100 mb-5">
            Enter the Metagame. Defy the Odds.
            <br />
            Command your fleet - the war for stars begin now!
          </p>
          <Button buttonClass="bg-yellow-300" text="Watch Trailer" />
        </div>

        <div className="absolute bottom-5 right-12">
          <h2 className="hero-heading special-font text-blue-75">
            G<b>a</b>ming
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
