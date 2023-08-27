import React from "react";
import "./Project.css";
import Projects from "./Projects";
import { project } from "../../data";
import { Carousel } from "@mantine/carousel";


const Project = () => {
  
  return (
    <div className="project" id="Project">
      <div className="head">
        <h1 style={{ textTransform: "uppercase" }}>Projects</h1>
      </div>
      <Carousel
        slideSize="10%"
        height={500}
        slideGap="xl"
        dragFree
        withControls={false}
        className="carousel"
      >
        {project.map((data) => {
          return (
            <Carousel.Slide>
              <Projects
                img={data.img}
                name={data.name}
                describe={data.describe}
                link={data.slink}
                demo={data.demo}
              />
            </Carousel.Slide>
            // console.log(data);
          );
        })}
      </Carousel>
    </div>
  );
};

export default Project;
