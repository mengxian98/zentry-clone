import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AnimatedTitle = ({ caption, title }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const wordAnimation = gsap.to(".word", {
        opacity: 1,
        ease: "power2.inOut",
        stagger: 0.1,
      });
      const titleAnimation = gsap.to(".animated-title", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0)",
        ease: "power2.inOut",
        duration: 0.8,
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "120 bottom",
            end: "center bottom",
            toggleActions: "play none none reverse",
          },
        })
        .add(wordAnimation)
        .add(titleAnimation, "<+=0.3");
    },
    { revertOnUpdate: true }
  );

  return (
    <div ref={containerRef} className="flex flex-col gap-8 uppercase">
      <div className="flex justify-center gap-1 font-general text-[8px] tracking-wider">
        {caption.split(" ").map((captionWord, index) => (
          <span key={index} className="word opacity-0">
            {captionWord}
          </span>
        ))}
      </div>
      <div className="animated-title special-font font-zentry text-4xl md:text-7xl xl:text-8xl">
        {title.split("<br />").map((titleLine, index) => (
          <div key={index} className="flex justify-center gap-1 md:gap-3">
            {titleLine.split(" ").map((titleWord, index) => (
              <span
                key={index}
                className="word opacity-0"
                dangerouslySetInnerHTML={{ __html: titleWord }}
              ></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTitle;
