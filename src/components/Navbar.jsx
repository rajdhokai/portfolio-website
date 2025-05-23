import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { logo, menu, close, github } from "../assets";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer ">
            Codebuster
          </p>
        </Link>

        {/* Social Media Icons */}
        <div className="flex gap-4 ml-4">
          <a
            href="https://github.com/rajdhokai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/raj-d-9982b8217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/raj__dhokai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>

        <ul className="list-none hidden sm:flex lex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1  justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu-toggle"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium text-[16px] cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle((prev) => !prev);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
