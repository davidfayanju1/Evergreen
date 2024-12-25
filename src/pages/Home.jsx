import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

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
      name: "/images/letter.jpg",
    },
    {
      name: "/images/newspaper.jpg",
    },
  ];

  return (
    <DefaultLayout>
      <div className="page_container min-h-screen">
        <section className="hero md:h-[29rem] h-[35rem] pt-[5.5rem] !bg-green-50 py-[2rem] gap-4 md:px-[4rem] px-[1rem] flex items-center justify-between md:flex-row flex-col w-full ">
          <div className="text_container md:w-[50%] w-full">
            <h1 className="serif-regular md:w-[90%] w-full text-green-primary md:text-[2.55rem] text-[2rem]">
              Delivering Impactful Write Ups
            </h1>
            <h2 className="text-gray-500 text-[.9rem] md:w-[80%] w-full">
              Delivering writeups that resonate and inspire. We craft content
              designed to leave a lasting impact and drive meaningful
              engagement.
            </h2>
            <button className="bg-red-900 shadow-lg mt-6 serif-regular text-white h-[2.5rem] w-[13rem] rounded-full">
              Book
            </button>
          </div>

          <div className="image_container md:w-[50%] w-full block rounded-[8px] h-[29rem]">
            <Slider {...settings} className="h-[29rem]">
              {images.map((image, index) => (
                <img
                  src={image.name}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              ))}
            </Slider>
          </div>
        </section>

        <div className="partners-section mt-[2rem]">
          <h1 className="text-center font-semibold md:text-[.9rem] text-[.7rem]">
            TRUSTED BY <span className="text-red-900"> 50+ </span>
            INDIVIDUALS AND PROFESSIONALS
          </h1>
        </div>
        <section className="about bg-white px-[1rem] py-[4rem] min-h-[30rem] w-full ">
          <div className="text_section">
            <span className="title block serif-regular text-green-950 font-bold text-center md:text-[2rem] text-[1.4rem]">
              About Us
            </span>

            <small className="desc block text-gray-500 mt-[1rem]">
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
        </section>
        <section className="projects_number min-h-[20rem] bg-green-900"></section>
        <section className="testimonials min-h-[35rem] bg-green-300"></section>
      </div>
    </DefaultLayout>
  );
};

export default Home;
