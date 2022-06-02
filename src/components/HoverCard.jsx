import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";

export const DestinationHoverCard = ({ title, description, link }) => {
  const [height, setHeight] = useState();
  const ref = useRef();

  const onMouseEnter = () => {
    setHeight(ref.current.scrollHeight);
  };

  const onMouseLeave = (e) => {
    setHeight(0);
  };

  useEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);

  return (
    <Link to={link}>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="h-full w-full text-white group flex flex-col items-center justify-center transition-all duration-500 lg:hover:bg-opacity-30 bg-landing-card"
      >
        <h2 className="lg:text-48 text-36 mb-30 lg:mb-60 transition-all duration-500">
          {title}
        </h2>
        <p
          ref={ref}
          style={height ? { height } : {}}
          className="text-16 lg:h-0 font-light leading-24 w-8/12 lg:w-7/12 lg:text-24-32 text-center opacity-100 lg:opacity-0 lg:invisible group-hover:lg:visible group-hover:lg:opacity-100 transition-all duration-500"
        >
          {description}
        </p>
      </div>
    </Link>
  );
};
