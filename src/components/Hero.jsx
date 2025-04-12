import { useState } from "react";

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);

  const totalVideos = 4;
  const nextVideoIndex = (currentVideoIndex % totalVideos) + 1;

  const handleVideoPreviewClick = () => {
    setCurrentVideoIndex(nextVideoIndex);
  };

  return (
    <section>
      <div className="relative h-screen w-full cursor-pointer">
        <video
          loop
          autoPlay
          className="size-full video-center"
          src={`/videos/hero-${currentVideoIndex}.mp4`}
        />

        <div
          className="absolute-center mask-clip-path rounded-lg scale-50 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-500 ease-in overflow-hidden z-50"
          onClick={handleVideoPreviewClick}
        >
          <video
            loop
            muted
            className="video-center scale-150 size-64"
            src={`/videos/hero-${nextVideoIndex}.mp4`}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
