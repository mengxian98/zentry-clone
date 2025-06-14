import gsap from "gsap";

export const scale = (elementRef, scale, ...rest) => {
  if (!elementRef) return;
  gsap.to(elementRef.current, {
    scale,
    transformPerspective: 500,
    duration: 0.3,
    ease: "power1.out",
    ...rest,
  });
};

export const tilt = (mouseEvent, elementRef, tilt, ...rest) => {
  if (!elementRef) return;
  const { left, top, height, width } =
    elementRef.current.getBoundingClientRect();
  const relativeX = (mouseEvent.clientX - left) / width;
  const relativeY = (mouseEvent.clientY - top) / height;

  const rotateX = (relativeX - 0.5) * tilt;
  const rotateY = (relativeY - 0.5) * -tilt;

  gsap.to(elementRef.current, {
    rotateX,
    rotateY,
    transformPerspective: 500,
    duration: 0.3,
    ease: "power1.out",
    ...rest,
  });
};
