import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const links = [
    {
      name: "Home",
      route: "/",
    },

    {
      name: "Contact",
      route: "/contact",
    },

    {
      name: "Testimonials",
      route: "/testimonials",
    },
  ];

  return (
    <div className="nav-container bg-white fixed top-0 w-full h-[4rem] flex items-center justify-between md:px-[2rem] px-[.9rem] shadow-md">
      <div className="page_title">
        <Link to={"/"} className="flex items-center gap-1">
          <h1 className="dm-serif-text-regular text-green-950 font-bold md:text-[1.3rem] text-[.9rem]">
            Evergreen.
          </h1>
        </Link>
      </div>
      <nav className="destop-links">
        <ul className="md:flex hidden items-center gap-3">
          {links.map((item) => (
            <Link to={item.route} className="text-[.9rem]">
              {item.name}
            </Link>
          ))}
        </ul>

        <div className="burger_container md:hidden block">
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
