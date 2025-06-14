import { useRef } from "react";
import gsap from "gsap";
import { scale, tilt } from "../utils/animations";

const BentoTilt = ({ containerClass, children, ...rest }) => {
  const containerRef = useRef(null);

  const handleMouseLeave = () => {
    gsap.to(containerRef.current, {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.out",
    });
  };

  const handleMouseMove = (e) => {
    tilt(e, containerRef, 5);
    scale(containerRef, 0.97);
  };

  return (
    <div
      ref={containerRef}
      className={`h-full cursor-grab ${containerClass}`}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...rest}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
