import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Nav = () => {
  const links = [
    {
      name: "Home",
      route: "Hero",
    },

    {
      name: "Contact",
      route: "reach-out",
    },

    {
      name: "Testimonials",
      route: "testimonials",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Adjust this value based on your nav bar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <div
      id="first"
      className="nav-container z-50 bg-transparent backdrop-blur-sm fixed top-0 w-full h-[5rem] flex items-center justify-between md:px-[4rem] px-[1rem]"
    >
      <div
        onClick={() => scrollToSection("Hero")}
        className="cursor-pointer md:ml-0 ml-[-2rem]"
      >
        <img
          src="/images/evergreen1.png"
          alt="company Logo"
          className="h-[9rem]"
        />
      </div>
      <nav className="destop-links">
        <ul className="md:flex hidden items-center gap-5">
          {links.map((item) => (
            <div
              onClick={() => scrollToSection(item.route)}
              className="text-[.9rem] cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="burger_container md:hidden block"
        >
          <GiHamburgerMenu />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden fixed h-[10rem] p-[1rem] mobile-nav bg-white w-full top-[5rem] left-0">
          {links.map((item) => (
            <div
              onClick={() => {
                scrollToSection(item.route);
                setOpen(false);
              }}
              className="text-[.9rem] mb-2 cursor-pointer"
            >
              {item.name}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
