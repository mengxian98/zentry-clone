import { useRef } from "react";
import AnimatedTitle from "./shared/AnimatedTitle";
import Button from "./shared/Button";
import { tilt } from "./utils/animations";

const Story = () => {
  const imageRef = useRef(null);

  return (
    <div className="relative size-full bg-black pt-72">
      <div className="absolute w-full text-white">
        <AnimatedTitle
          caption="Echoes of Eternity"
          title="The st<b>o</b>ry of<br />a hidden real<b>m</b>"
        />
      </div>
      <div className="story-image relative w-full h-[175vw] md:h-dvh mix-blend-difference overflow-hidden">
        <img
          ref={imageRef}
          className="h-full object-cover"
          src="./img/entrance.webp"
          onMouseMove={(e) => tilt(e, imageRef, 15)}
        ></img>
      </div>
      <div className="absolute right-[15%] bottom-23 md:right-20 md:bottom-30 xl:right-36 xl:bottom-15 w-[70%] md:w-1/3 xl:w-1/4 flex flex-col gap-6 items-center text-center md:items-start md:text-left">
        <p className="text-blue-50 text-xs leading-4.5 md:text-sm md:leading-5.5 xl:text-base">
          Whispers echo through the ruins of a forgotten world. Enter the shadow
          to awaken a realm — lost to history, yet alive with secrets.
        </p>
        <div>
          <Button text="Discover Prologue"></Button>
        </div>
      </div>
    </div>
  );
};

export default Story;
