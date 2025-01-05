import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { PiLinkedinLogo } from "react-icons/pi";
import { Link } from "react-router-dom";
import { GiFeather } from "react-icons/gi";
import { FaLink } from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      name: "About",
      url: "About",
    },

    {
      name: "Services",
      url: "services",
    },

    {
      name: "Testimonials",
      url: "testimonials",
    },
  ];

  const secondLinks = [
    {
      name: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      url: "/terms_conditions",
    },
    {
      name: "Contact",
      url: "/contact",
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

  return (
    <footer className="page-container min-h-[20rem] md:px-[4rem] px-[1rem] py-[3rem] w-full bg-[#0F5132]">
      <section className="flex items-start justify-between flex-wrap md:gap-3 gap-[3rem]">
        <div className="title relative">
          <img
            src="/icons/evergreen.svg"
            alt=""
            className="w-[10rem] h-[10rem]"
          />
        </div>

        <div className="links-container flex items-start gap-[3rem]">
          <div className="first-container">
            <h2 className="font-semibold text-[1rem] mb-2 text-white">
              What To Know
            </h2>

            {links.map((item) => (
              <button
                onClick={() => scrollToSection(item.url)}
                className="outline-none block mb-2 text-white text-[.8rem] border-none"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="first-container">
            <h2 className="font-semibold text-[1rem] text-white mb-2">
              Legal Issues
            </h2>

            {secondLinks.map((item) => (
              <button className="outline-none mb-2 block text-[.8rem] border-none text-white">
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="input-container">
          <span className="block text-[.8rem] text-white mb-2">
            Stay Connected
          </span>

          <div className="form-container bg-white flex rounded-[9px] md:w-[20rem] w-full h-[3rem] items-center justify-start gap-3">
            <input
              type="text"
              className="bg-transparent outline-none border-none px-[1rem] w-[85%]"
              placeholder="Enter your email"
            />
            <MdOutlineMailOutline />
          </div>
        </div>
      </section>

      <section className="line-through block w-full bg-green-950 h-[.01rem] my-[2rem]"></section>
      <section className="flex-container flex items-center justify-between md:flex-row flex-col gap-5">
        <span className="block text-white text-[.9rem]">
          &copy; Copyright 2024
        </span>
        <div className="icons-container flex items-center justify-center gap-5">
          <Link to={"https://www.instagram.com/mysteriebellax/"}>
            <FaInstagram color="white" size={22} />
          </Link>
          <Link to={"https://twitter.com/harleythequin/ "}>
            <BsTwitterX color="white" size={22} />
          </Link>
          <Link to={"https://linktr.ee/oluwaseunfamoofo"}>
            <FaLink color="white" size={22} />
          </Link>

          <Link to={"https://www.linkedin.com/in/oluwaseun-famoofo-324151178/"}>
            <PiLinkedinLogo color="white" size={22} />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
