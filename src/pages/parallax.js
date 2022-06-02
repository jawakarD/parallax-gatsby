import React from "react";
import { motion } from "framer-motion";
import { ParallaxDestinationCard } from "../components/ParallexScroll";
import { DestinationHoverCard } from "../components/HoverCard";

import "../index.css";

const images = [
  "http://picsum.photos/720/1440",
  "http://picsum.photos/720/1441",
  "http://picsum.photos/720/1442",
  "http://picsum.photos/720/1443",
];

export default () => {
  return (
    <motion.div
      className="grid grid-cols-6 lg:grid-cols-12 pt-[100vh]"
      key={"content"}
    >
      {images.map((image) => (
        <div className="col-span-6 snap-start snap-normal lg:snap-none lg:snap-align-none">
          <ParallaxDestinationCard image={image}>
            <DestinationHoverCard
              title={"Card"}
              description={"description"}
              link={"cta_link"}
            />
          </ParallaxDestinationCard>
        </div>
      ))}
    </motion.div>
  );
};
