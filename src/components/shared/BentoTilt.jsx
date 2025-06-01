import { useRef, useState } from "react";

const BentoTilt = ({ containerClass, children, ...rest }) => {
  const containerRef = useRef(null);
  const [containerStyle, setContainerStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, height, width } =
      containerRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeX - 0.5) * 5;
    const tiltY = (relativeY - 0.5) * -5;

    setContainerStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(0.97)`,
      transition: "transform 80ms ease-in-out",
    });
  };

  return (
    <div
      ref={containerRef}
      style={containerStyle}
      className={`h-full cursor-grab ${containerClass}`}
      onMouseLeave={() => setContainerStyle({})}
      onMouseMove={handleMouseMove}
      {...rest}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
