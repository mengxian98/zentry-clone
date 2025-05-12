import { useEffect, useRef, useState } from "react";
import { SiStagetimer } from "react-icons/si";
import { PiRocketLaunchFill } from "react-icons/pi";
import IconProvider from "./IconProvider";
import Button from "./Button";

const Bento = ({
  title,
  description,
  backgroundSrc,
  autoPlayBackground,
  isComingSoon,
  isSiteLaunched,
  containerClass,
}) => {
  const backgroundVideoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (autoPlayBackground) return;
    isHovering
      ? backgroundVideoRef.current.play()
      : backgroundVideoRef.current.pause();
  }, [autoPlayBackground, isHovering]);

  return (
    <div
      className={`h-full relative border rounded-lg ${containerClass}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute top-0 left-0 size-full">
        <video
          ref={backgroundVideoRef}
          src={backgroundSrc}
          className="size-full object-cover rounded-lg"
          autoPlay={autoPlayBackground}
          muted
          loop
        />
      </div>
      {(title || description) && (
        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-1/4 flex flex-col gap-2 text-blue-50">
          <h3 className="font-zentry text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h3>
          <p className="font-circular-web text-[8px] md:text-[10px] lg:text-sm opacity-[0.85]">
            {description}
          </p>
        </div>
      )}
      {(isComingSoon || isSiteLaunched) && (
        <div className="absolute bottom-5 left-5 md:bottom-8 md:left-10 flex flex-col md:flex-row gap-2">
          {isComingSoon && (
            <Button
              size="small"
              text="Coming Soon"
              buttonClass="bg-black text-zinc-700 border border-zinc-800 cursor-grab"
              leadingIcon={
                <IconProvider value={{ size: "0.8rem" }}>
                  <SiStagetimer />
                </IconProvider>
              }
            />
          )}
          {isSiteLaunched && (
            <Button
              size="small"
              text="Launch Site"
              buttonClass="bg-black text-yellow-300 border border-yellow-300"
              trailingIcon={
                <IconProvider value={{ size: "0.8rem" }}>
                  <PiRocketLaunchFill />
                </IconProvider>
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Bento;
