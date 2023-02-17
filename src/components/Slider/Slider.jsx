import React from "react";
import "./Slider.css";
import { motion as m } from "framer-motion";
function Slider({ images, width: containerWidth }) {
  const [width, setWidth] = React.useState(0);
  const slider = React.useRef(null);
  React.useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);
  return (
    <m.div ref={slider} className="slider" style={{ containerWidth }}>
      <m.div
        dragConstraints={{ right: 0, left: -width }}
        drag="x"
        className="inner-slider"
        whileTap={{ cursor: "grabbing" }}
      >
        {images.map(({ imageUrl, id }) => (
          <m.div
            className="content"
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.78 }}
            viewport={{ once: true }}
            key={id}
          >
            <img src={imageUrl} alt={id} />
          </m.div>
        ))}
      </m.div>
    </m.div>
  );
}

export default Slider;
