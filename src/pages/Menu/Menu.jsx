/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useContext, useEffect, useState, useRef } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { StateContext } from "../../states";
import { NavLink } from "react-router-dom";
const iconClassname = 'hover:fill-neutral-400 transition-colors duration-300'
import Revealer from "../Preload/revealer";

const menuItems = [
  { name: "Instagram", url: "https://www.instagram.com/gthnmp/", icon: <FaInstagram />},
  { name: "Twitter", url: "https://twitter.com/viograce_/", icon: <FaTwitter />},
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gathan", icon: <FaLinkedin />},
  { name: "GitHub", url: "https://github.com/gthnmp", icon: <FaGithub />}
];


export default function Menu({...props}) {
  const { isDesktop, pathLocation } = useContext(StateContext);
  const [ buttonClicked, setButtonState ] = useState(false);

  const menuButtonClassname = "fixed z-10 top-10 left-1/2 -translate-x-1/2 lg:left-24 lg:-translate-x-0 font-semibold z-30";
  const menuListClassname = "fixed z-10 top-10 right-1/2 -translate-x-1/2 lg:right-24 lg:-translate-x-0 flex gap-4 p-2";

  return (
    <>
      <nav>
        <div id="menu-button" className={menuButtonClassname}>
          <NavLink to={pathLocation === "/" ?  "" : "/"}><i>{pathLocation === "/" ? "Table Of Content" : "Back"}</i></NavLink>
        </div>
        
        {isDesktop && (
          <ul className={menuListClassname}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" aria-label={`Checkout Gathan's ${item.name}`}>
                  {React.cloneElement(item.icon, { className: iconClassname })}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
