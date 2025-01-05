import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbPencilStar } from "react-icons/tb";
import Marquee from "react-fast-marquee";

import Slider from "react-slick";
import FadeLayout from "../layout/FadeLayout";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = [
    {
      name: "/images/typewriter.jpg",
    },
    {
      name: "/images/hand.jpg",
    },
    {
      name: "/images/newspaper.jpg",
    },
  ];

  const services = [
    "Articles",
    "Essays",
    "Journalistic pieces",
    "Love poems",
    "Wedding vows",
    "Proposals/pitches",
    "Speeches",
    "Autobiographies/biographies",
    "Novels",
    "CVs",
    "Cover letters",
    "Personal Statements",
  ];

  const testimonials = [
    {
      name: "Evergreen is worth every penny. One of the best writing brands I have collaborated with.",
      img: "/images/woman.png",
      author: "Tomi Oyebanji",
    },
    {
      name: "Evergreen is worth every penny. One of the best writing brands I have collaborated with.",
      img: "/images/woman.png",
      author: "Tomi Oyebanji",
    },
    {
      name: "Evergreen is worth every penny. One of the best writing brands I have collaborated with.",
      img: "/images/woman.png",
      author: "Tomi Oyebanji",
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
    <DefaultLayout>
      <div className="page_container min-h-screen">
        <FadeLayout delay={0.4}>
          <section
            id="Hero"
            className="hero md:h-[32rem] h-[37rem] pt-[6.5rem] !bg-green-200/50 py-[2rem] md:gap-4 gap-8 md:px-[4rem] px-[1rem] flex items-center justify-between md:flex-row flex-col w-full "
          >
            <div className="text_container md:w-[50%] w-full">
              <h1 className="serif-regular md:w-[90%] w-full text-green-950 md:text-[2.55rem] text-[1.9rem]">
                Delivering Impactful
                <span className="text-red-900"> Write Ups.</span>
              </h1>
              <h2 className="text-gray-500 md:text-[.9rem] text-[.8rem] md:w-[80%] w-full my-3">
                Delivering writeups that resonate and inspire. We craft content
                designed to leave a lasting impact and drive meaningful
                engagement.
              </h2>
              <button
                onClick={() => scrollToSection("reach-out")}
                className="bg-red-900 shadow-lg md:mt-6 mt-3 serif-regular text-white h-[2.5rem] w-[13rem] rounded-full"
              >
                Book
              </button>
            </div>

            <div className="image_container md:w-[50%] w-full block rounded-[8px] h-[29rem]">
              <Slider {...settings} className="">
                {images.map((image, index) => (
                  <div className="image-container h-[29rem]">
                    <img
                      src={image.name}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </section>
        </FadeLayout>

        <div className="partners-section mt-[2rem]">
          <h1 className="text-center font-semibold md:text-[.9rem] text-[.7rem]">
            TRUSTED BY <span className="text-red-900"> 50+ </span>
            INDIVIDUALS AND PROFESSIONALS
          </h1>
        </div>

        <section className="company-logos flex items-center justify-center h-[10rem]">
          <Marquee
            className="slider-statement cursor-default bg-carpet-green relative"
            speed={50}
            // onMouseEnter={() => setIsplaying(false)}
            // onMouseLeave={() => setIsplaying(true)}
            // play={isplaying}
            direction="right"
          >
            <img
              src="/images/logos/BlackBallad.png"
              alt=""
              className="h-[5rem] ml-5"
            />
            <img
              src="/images/logos/FSGHT.png"
              alt=""
              className="h-[5rem] ml-5"
            />
            <img
              src="/images/logos/MYOPIA.jpg"
              alt=""
              className="h-[4rem] ml-5"
            />
            <img
              src="/images/logos/peace.png"
              alt=""
              className="h-[5rem] ml-5"
            />
            <img src="/icons/eo.svg" alt="" className="h-[1.6rem] ml-5" />
          </Marquee>
        </section>
        <section
          id="About"
          className="about md:px-[4rem] px-[1rem] pb-[4rem] pt-[2rem] min-h-[30rem] w-full flex items-center justify-center md:flex-row-reverse flex-col md:gap-[3rem] gap-[4rem]"
        >
          <div className="text_section md:w-[50%] w-full">
            <span className="title block serif-regular text-green-950 font-bold md:text-[2rem] text-[1.4rem]">
              About Us
            </span>

            <small className="desc block text-gray-500 mt-[1rem] md:w-[80%] w-full">
              Evergreen is a one woman business that thrived when everything
              I've tried failed. Evergreen is my blood sweat and tears when I
              had nothing. Every poem stood for something so did every write up
              so I said to give back to the community by also giving back to
              myself LoL.
            </small>

            <div className="text-container mt-3">
              <small className="block text-green-950 text-[.7rem]">
                - Famoofo Oluwaseun
              </small>
              <small className="block text-gray-500 font-semibold text-[.7rem]">
                CEO, Evergreen
              </small>
            </div>
          </div>

          <div className="image-container md:w-[50%] w-full relative rounded-[6px] overflow-hidden bg-gray-100 h-[20rem]">
            <div className="absolute inset-0 h-full w-full bg-black/20 rounded[6px] flex items-center justify-center">
              <Link
                to={"https://www.linkedin.com/in/oluwaseun-famoofo-324151178/"}
              >
                <FaLinkedinIn
                  size={70}
                  color="#F9F9F9F9"
                  className="opacity-60"
                />
              </Link>
            </div>
            <img
              src="/images/phones.jpg"
              alt=""
              className="rounded-[6px] h-full w-full object-cover"
            />
          </div>
        </section>

        <section
          id="services"
          className="services_number min-h-[20rem] md:px-[4rem] px-[1rem] md:py-[4rem] py-[2rem]"
        >
          <h2 className="serif-regular text-center md:text-[2rem] text-[1.4rem] text-green-950">
            Services We Offer
          </h2>

          <small className="text-gray-500 text-center md:mt-5 mt-2 md:mb-[4rem] mb-[2rem] block">
            We craft words that captivates, connect, and convert
          </small>

          <div className="flex items-start justify-between gap-9 md:flex-row flex-col">
            <div className="image-container h-full bg-red-800 relative rounded-[8px] oveflow-hidden md:w-[50%] w-full">
              <div className="absolute inset-0 h-full w-full bg-[#800020B2]/30 rounded-[8px]"></div>
              <img
                src="/images/services.png"
                alt=""
                className="rounded-[8px] object-cover md:h-[35rem] h-[20rem] w-full"
              />
            </div>

            <div className="services-container md:w-[50%] w-full">
              {services.slice(0, 5).map((item) => (
                <div className="card-container mb-5 flex">
                  <div className="image-container h-[5rem] relative z-20 w-[5rem] rounded-[10px] bg-[#013220CC] flex items-center justify-center">
                    <TbPencilStar size={30} color="white" />
                  </div>

                  <div className="text-container ml-[-1rem] relative z-10 px-[2rem] rounded-tr-md rounded-br-md flex items-center py-1 md:w-[20rem] w-full bg-red-100/50 h-[5rem]">
                    <span className="">{item}</span>
                  </div>
                </div>
              ))}

              <div
                onClick={() => scrollToSection("reach-out")}
                className="view-more cursor-pointer flex items-center gap-3"
              >
                <span className="block">View More</span>
                <img src="/icons/arrow.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="testimonials min-h-[29rem] bg-white md:px-[4rem] px-[1rem] py-[2rem]"
        >
          <h2 className="serif-regular text-center md:text-[2rem] text-[1.4rem] text-green-950 mb-[1rem]">
            Feedback
          </h2>

          <small className="block text-gray-500 text-center">
            Read what our clients have said about our brand
          </small>
          <div className="card-container mt-[3rem]">
            <Marquee
              className="slider-statement cursor-default bg-carpet-green relative"
              speed={50}
              // onMouseEnter={() => setIsplaying(false)}
              // onMouseLeave={() => setIsplaying(true)}
              // play={isplaying}
            >
              {testimonials.map((item) => (
                <div className="card-container ml-4 w-[20rem] bg-[#FFA6BD26] rounded-[9px] p-4">
                  <div className="image-section flex justify-end">
                    <img
                      src={item.img}
                      alt=""
                      className="rounded-tl-[3.7rem] h-[5rem] w-[4rem] rounded-bl-[5.8rem]"
                    />
                  </div>

                  <div className="text-section mt-4">
                    <blockquote className="text-[.8rem] text-black block">
                      {item.name}
                    </blockquote>

                    <small className="font-semibold text-green-950">
                      {item.author}
                    </small>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        <section id="reach-out" className="reach-out mb-8">
          <div className="item-card w-[90%] bg-[#D9D9D9] md:px-[4rem] px-[1rem] py-[3rem] rounded-[9px] min-h-[20rem] mx-auto">
            <h2 className="serif-regular text-center md:text-[2rem] text-[1.4rem] text-green-950 mb-[.9rem]">
              We are here for you
            </h2>
            <small className="block text-gray-500 text-center mb-[3rem]">
              Reach out to us for a compelling writeup
            </small>

            <input
              type="text"
              className=" w-full px-3 py-2 h-[2.7rem] text-[16px] outline-none mb-[1rem] border-none rounded-[9px] placeholder:text-[14px] bg-[#136a4a2e]"
              placeholder="Enter Email Address"
            />

            <select
              name=""
              id=""
              className="outline-none custom-select text-[.9rem] w-full px-3 py-2 rounded-[9px] bg-green-100/30"
            >
              {services.map((item) => (
                <option value="" className="text-[1rem]">
                  {item}
                </option>
              ))}
            </select>

            <button className="bg-red-900 md:mt-6 mt-[2rem] serif-regular text-white h-[2.5rem] md:w-[13rem] w-full rounded-[9px]">
              Send
            </button>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Home;
