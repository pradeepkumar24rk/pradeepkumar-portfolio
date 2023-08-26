import React, { useRef } from "react";
import { achievementImg } from "../../data";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

const Slider = () => {
const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      withIndicators
      slideGap="md"
      loop
      align="start"
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      ]}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset} 
    >
      {achievementImg.map((data) => {
        return (
          <Carousel.Slide>
            <div
              style={{
                color: "red",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img alt="" width={800} src={data.img} />
            </div>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};

export default Slider;
