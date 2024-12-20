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
      name: "/images/book1.jpg",
    },
    {
      name: "/images/book2.png",
    },
    {
      name: "/images/book3.png",
    },
  ];

  return (
    <DefaultLayout>
      <div className="page_container min-h-screen mt-9">
        <section className="hero h-[29rem] !bg-green-900 py-[2rem] gap-4 md:px-[4rem] px-[1rem] flex items-center justify-between md:flex-row flex-col w-full ">
          <div className="text_container md:w-[50%] w-full">
            <h1 className="serif-regular text-green-950 md:text-[2.5rem] text-[2rem]">
              Delivering Impactful Write Ups
            </h1>
            <h2 className="text-gray-500">Where Stories Come To Life</h2>
            <button className="bg-green-900 shadow-lg mt-4 serif-regular text-white h-[2.5rem] w-[10rem] rounded-full">
              Book
            </button>
          </div>

          <div className="image_container bg-black/70 md:w-[50%] w-full block rounded-[8px] h-full">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="bg-red-800 h-full">
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
        <section className="about min-h-[30rem] w-full bg-gray-200"></section>
        <section className="projects_number min-h-[20rem] bg-green-900"></section>
        <section className="testimonials min-h-[35rem] bg-green-300"></section>
      </div>
    </DefaultLayout>
  );
};

export default Home;
