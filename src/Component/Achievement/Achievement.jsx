import React from "react";
import "./Achievement.css";
// import { motion } from "framer-motion";
import Slider from "./Slider";

const Achievement = () => {
  return (
    <div className="Achievement" id="Achievement">
      <div className="achieve-head">
        <h1>Achievement</h1>
      </div>

      <div className="slider">
        <Slider />
      </div>
    </div>
  );
};

export default Achievement;
