import React from "react";
import img from "../../img/about.jpg";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className="about" id="About">
      <motion.div
        initial={{ left: "-50%" }}
        whileInView={{ left: "15%" }}
        transition={{ duration: 5, type: "spring" }}
        className="a-left"
      >
        <img src={img} alt="" srcset="" />
      </motion.div>
      <div className="a-right">
        <motion.div
          initial={{ right: "-10%" }}
          whileInView={{ right: "0%" }}
          transition={transition}
          className="a-r"
        >
          <span>About Me</span>
          <span>
            Developer
          </span>
          <span>
            Hello! I'm Pradeepkumar, a final year student at M. Kumarasamy
            College of Engineering, graduating this year. Eager to start my
            career, I seek opportunities to grow as a Full Stack Developer. I've
            worked on various projects involving
            <b>
              {" "}
              Swift, MongoDB, ExpressJS, ReactJS, and NodeJS{" "}
            </b>
            gaining valuable experience through internships at{" "}
            <b>Mkcsdigital and InterDeccaan Solutions</b>. In my free time, I
            enjoy playing cricket and staying up-to-date with the latest
            developments in Full Stack Development.
          </span>
        </motion.div>
        <div
          className="blur a-blurl"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default About;
