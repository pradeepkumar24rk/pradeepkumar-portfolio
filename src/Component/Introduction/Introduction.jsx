import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import "./Introduction.css";
import Nav from "./Nav";
import Typewriter from "typewriter-effect";


const Introduction = () => {
  var typewriter = new Typewriter(Introduction, {
    loop: 0,
    delay: 1,
    cursorClassName: "cursorSize",
  });
  return (
    <>
      <ParticlesBackground />
      <div className="Introduct">
        <Nav />

        <div className="Introduction">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(
                '<span style="font-size:2rem">Welcome To My Portfolio</span><br>'
              );

              typewriter.typeString(
                "<span style='margin-left:20px;font-size:2rem'>Hi, I'm <span style='color:var(--blue);font-size:2rem;font-weight:bold'>PRADEEPKUMAR</span></span><br>"
              );

              typewriter.typeString(
                "<span style='margin-top:20px'>Full Stack web Developer with medium level of</span><br> "
              );

              typewriter.typeString("<span style=''>experience in </span>");

              typewriter.typeString(
                "<strong style='font-weight:bold'>web development</strong><br>"
              );

              typewriter.typeString("<span style=''>and</span><br>");
              typewriter.typeString(
                "<strong style=';font-weight:bold'>3D designing</strong><br><br>"
              );
              typewriter
                .typeString(
                  '<button class="learn-more"><span class="circle" aria-hidden="true"><span class="icon arrow"></span></span><span class="button-text"><a href="RESUME.pdf" download>Explore me</a></span></button>'
                )
                .start();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Introduction;
