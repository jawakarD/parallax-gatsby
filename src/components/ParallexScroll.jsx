import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";

export const ParallaxDestinationCard = ({ image, children }) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [height, setHeight] = useState(0);
  const childrenContainer = useRef(null);

  const initial = elementTop - clientHeight;
  const final = elementTop + height;
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [initial, final], [0, height]);

  useLayoutEffect(() => {
    const element = childrenContainer.current;

    setElementTop(element.getBoundingClientRect().top + window.scrollY);
    setClientHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    setHeight(childrenContainer.current.offsetWidth);
  }, []);

  return (
    <div className="w-full m-auto relative overflow-hidden pt-[100%]">
      <motion.div
        className="absolute -top-full w-full h-[200%]"
        style={{
          y,
        }}
      >
        <img src={image} className="h-full" />
      </motion.div>
      <div
        ref={childrenContainer}
        className="absolute top-0 h-full w-full text-white"
      >
        {children}
      </div>
    </div>
  );
};
