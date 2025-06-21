import { useRef } from "react";
import Button from "./shared/Button";
import { tilt } from "./utils/animations";

const Contact = () => {
  const fireImageRef = useRef(null);
  const stoneImageRef = useRef(null);
  const swordsmanImageRef = useRef(null);

  const handleMouseMove = (e) => {
    tilt(e, fireImageRef, 3);
    tilt(e, stoneImageRef, 5);
    tilt(e, swordsmanImageRef, 2);
  };

  return (
    <div className="w-full bg-blue-75 px-5 sm:px-10 pt-50 pb-10">
      <div
        className="relative bg-black text-white rounded-lg py-36 md:py-24 xl:py-28"
        onMouseMove={handleMouseMove}
      >
        <div className="relative flex flex-col gap-6 xl:gap-8 items-center text-blue-75 max-w-[90%] mx-auto z-20">
          <p className="font-general text-[10px] uppercase tracking-wider">
            Join Zentry
          </p>
          <h3 className="special-font font-zentry text-center text-5xl md:text-6xl lg:text-7xl xl:text-[100px] leading-[0.85]">
            Let's b<b>u</b>ild the
            <br />
            new era of g<b>a</b>ming
            <br />t<b>o</b>gether.
          </h3>
          <Button text="Contact Us" />
        </div>
        <div className="absolute h-full w-3/5 sm:w-1/4 xl:w-1/5 top-0 left-[20%] sm:left-[10%] xl:left-[13%] flex flex-col justify-end sm:justify-between overflow-hidden">
          <div
            ref={fireImageRef}
            className="hidden sm:block contact-image-fire h-1/3 translate-y-[-10%]"
          >
            <img className="scale-150" src="./img/contact-1.webp"></img>
          </div>
          <div
            ref={stoneImageRef}
            className="contact-image-stone h-1/3 translate-y-[30%] md:translate-y-0"
          >
            <img
              className="scale-150 sm:translate-y-[10%]"
              src="./img/contact-2.webp"
            ></img>
          </div>
        </div>
        <div
          ref={swordsmanImageRef}
          className="contact-image-swordsman absolute h-7/10 w-4/5 sm:h-4/5 sm:w-1/4 top-[-32%] sm:top-[10%] xl:top-[-5%] right-[10%] sm:right-[2%]"
        >
          <img
            className="translate-y-[5%] sm:scale-180 sm:translate-y-[10%] lg:scale-150 lg:translate-y-[5%]"
            src="./img/swordman.webp"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
