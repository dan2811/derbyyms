import React from "react";
import { useInView } from "react-intersection-observer";

const FadeInView = (props: React.PropsWithChildren) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3, // Percentage of the element visible to trigger the effect
  });

  const fadeClass = inView
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-5";

  return (
    <div
      ref={ref}
      className={`transform transition-opacity duration-700 ${fadeClass}`}
    >
      {props.children}
    </div>
  );
};

export default FadeInView;
