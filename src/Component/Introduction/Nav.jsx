import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
const Nav = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className="Nav" id="Home">
      <div className="nav-left">
        <div className="nav-name">
          PRA<span>DEEP</span>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <Link spy={true} to="Home" smooth={true}>
              <li>Home</li>
            </Link>
            <Link spy={true} to="About" smooth={true}>
              <li>About</li>
            </Link>
            <Link spy={true} to="Skills" smooth={true}>
              <li>Skill</li>
            </Link>
            <Link spy={true} to="Project" smooth={true}>
              <li>Project</li>
            </Link>
            <Link spy={true} to="Achievement" smooth={true}>
              <li>Achievement</li>
            </Link>
            <Link spy={true} to="Contact" smooth={true}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="icon">
          {nav ? (
            <GrClose size={40} onClick={() => setnav(false)} />
          ) : (
            <AiOutlineMenu size={40} onClick={() => setnav(true)} />
          )}
        </div>
      </div>
      <div className="Res-Nav">
        {nav && (
          <div className="Menu">
            <ul>
              <Link spy={true} to="Home" smooth={true}>
                <li>Home</li>
              </Link>
              <Link spy={true} to="About" smooth={true}>
                <li>About</li>
              </Link>
              <Link spy={true} to="Skills" smooth={true}>
                <li>Skill</li>
              </Link>
              <Link spy={true} to="Achievement" smooth={true}>
                <li>Achievement</li>
              </Link>
              <Link spy={true} to="Project" smooth={true}>
                <li>Project</li>
              </Link>
              <Link spy={true} to="Contact" smooth={true}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
