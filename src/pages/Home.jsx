import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbPencilStar } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import FadeLayout from "../layout/FadeLayout";
import { useEffect } from "react";
import { MdOutlineFormatQuote } from "react-icons/md";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import DotLoader from "react-spinners/DotLoader";
import { IoAlertCircleOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

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
      name: "What a thoughtful message! We have definitely enjoyed showcasing your work.",
      img: "/images/woman.png",
      author: "The Adventures Editorial Team",
    },
    {
      name: "Thank you! This is great. I made copyedits but they don't change any meanings so I'll assume they are fine. Thanks again and we'd be happy to work with you again ",
      img: "/images/woman.png",
      author: "Sarah Prager",
    },
    {
      name: "It was such a pleasure working with you and publishing your hard work and thoughtful essay.",
      img: "/images/woman.png",
      author: "Brittany",
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

  const [selectedService, setSelectedService] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOrder = (e) => {
    e.preventDefault();
    setSelectedService("");
    setInputEmail("");

    if (selectedService === "" || inputEmail === "") {
      toast.error("Input is Required");
    } else {
      setIsLoading(true);

      const templateParams = { service: selectedService, sender: inputEmail };
      emailjs
        .send(
          "service_v5c3l1m",
          "template_e9e07xc",
          templateParams,
          "SRFgBDq1ChpVRPbKy"
        )
        .then(
          (response) => {
            toast.success("Order placed and email sent!");
            setSelectedService("");
            setInputEmail("");
            setIsLoading(false);
          },
          (error) => {
            toast.error("Error placing order");
            setIsLoading(false);
            setSelectedService("");
            setInputEmail("");
          }
        );
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState({
    error: false,
    errorDetails: "",
  });
  const handleInputChange = (value) => {
    setInputEmail(value);

    if (!emailRegex.test(value)) {
      setError({
        error: true,
        errorDetails: "Invalid Email",
      });
    } else {
      setError({
        error: false,
        errorDetails: "",
      });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const serviceSecond = [
    {
      name: "Authentic & Reliable",
    },

    {
      name: "Innovative & Persuasive",
    },
    {
      name: "Quality Services",
    },

    {
      name: "Professional",
    },
  ];

  return (
    <DefaultLayout>
      <div className="page_container md:pt-0 pt-[9rem] min-h-screen">
        <section
          data-aos="fade-down"
          id="Hero"
          className="hero md:h-[32rem] h-[37rem] md:gap-4 gap-8 flex items-center justify-between md:flex-row flex-col w-full bg-white"
        >
          <div className="text_container md:px-[5rem] px-[1.5rem] md:w-[50%] w-full">
            <h1 className="serif-regular md:w-[90%] w-full text-green-950 md:text-[2.55rem] text-[1.9rem]">
              Delivering Impactful{" "}
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
              Order
            </button>
          </div>
          <div
            className="image_container md:w-[50%] w-full block h-[29rem] relative"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #fff 50%, transparent 50%)",
              backgroundSize: "100% 100%",
              backgroundBlendMode: "multiply",
              maskImage: "linear-gradient(to left, #fff, transparent)",
              maskSize: "100% 100%",
              maskPosition: "0 0",
              maskRepeat: "no-repeat",
            }}
          >
            <img
              src="/images/letter.png"
              alt="hero-image"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <div data-aos="fade-down" className="partners-section mt-[2rem]">
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
              className="h-[5rem] lg:ml-[15rem] md:ml-[9rem] ml-[5rem]"
            />
            <img
              src="/images/logos/FSGHT.png"
              alt=""
              className="h-[5rem] lg:ml-[15rem] md:ml-[9rem] ml-[5rem]"
            />
            <img
              src="/images/logos/MYOPIA.jpg"
              alt=""
              className="h-[4rem] lg:ml-[15rem] md:ml-[9rem] ml-[5rem]"
            />
            <img
              src="/images/logos/peace.png"
              alt=""
              className="h-[5rem] lg:ml-[15rem] md:ml-[9rem] ml-[5rem]"
            />
            <img
              src="/icons/eo.svg"
              alt=""
              className="h-[1.6rem] lg:ml-[15rem] md:ml-[9rem] ml-[5rem]"
            />
          </Marquee>
        </section>
        <section
          id="About"
          className="about md:px-[4rem] px-[1rem] pb-[4rem] pt-[2rem] min-h-[30rem] w-full flex items-center justify-center md:flex-row-reverse flex-col md:gap-[3rem] gap-[4rem]"
        >
          <div data-aos="fade-in" className="text_section md:w-[50%] w-full">
            <span className="title block serif-regular text-green-950 font-bold md:text-[2rem] text-[1.4rem]">
              About Us
            </span>

            <small className="desc block text-justify text-gray-500 md:text-[1rem] text-[.8rem] mt-[1rem] md:w-[85%] w-full">
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

          <div
            data-aos="fade-right"
            className="image-container md:w-[50%] w-full relative rounded-[6px] overflow-hidden bg-gray-100 h-[20rem]"
          >
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
              src="/images/handling.png"
              alt=""
              className="rounded-[6px] h-full w-full object-cover"
            />
          </div>
        </section>

        <section
          data-aos="fade-in"
          className="clients-us py-[5rem] bg-[#F4FFFB] md:px-[4rem] px-[1rem] flex md:items-start justify-center md:gap-[5rem] gap-[2rem] md:flex-row flex-col"
        >
          <div className="left-text md:w-[30%] ">
            <small className="block text-[#797979]">WHY CHOOSE US</small>
            <span className="block serif-regular md:w-[66%] w-full text-green-950 md:text-[1.8rem] text-[1.2rem]">
              <span className="text-red-900"> Our clients love our </span>
              Writeups
            </span>
          </div>
          <div className="right-section md:w-[70%]">
            <span className="block md:text-[1.1rem] text-[.9rem]">
              Choosing the right brand matters, that is why we focus on deliver
              exceptional writeup that amplify your voice and tell stories that
              sticks.
            </span>

            <div className="icon-container flex items-center gap-2 flex-wrap md:w-[70%] mt-[2rem]">
              {serviceSecond.map((item, index) => (
                <div
                  key={index}
                  className="card-container flex items-center gap-2"
                >
                  <img src="/icons/redpen.svg" alt="" />
                  <span className="block text-[.9rem] font-semibold text-[#800020]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          data-aos="fade-in"
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
          data-aos="fade-out"
          id="testimonials"
          className="testimonials min-h-[29rem] bg-white md:px-[4rem] px-[1rem] py-[2rem]"
        >
          <h2 className="serif-regular text-center md:text-[2rem] text-[1.4rem] text-green-950 mb-[1rem]">
            Testimonials
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
                <div className="card-container ml-4 w-[20rem] bg-[#FFA6BD26] rounded-[9px] min-h-[13rem] p-4">
                  <div className="image-section flex justify-end">
                    <MdOutlineFormatQuote size={37} color="#14532D" />
                    {/* <img
                      src={item.img}
                      alt=""
                      className="rounded-tl-[3.7rem] h-[5rem] w-[4rem] rounded-bl-[5.8rem]"
                    /> */}
                  </div>

                  <div className="text-section mt-4">
                    <blockquote className="text-[.7rem] mb-3 font-light text-black block">
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

        <section data-aos="fade-down" id="reach-out" className="reach-out">
          <div className="image-container relative">
            <div className="overlay absolute inset-0 bg-black/50"></div>
            <img
              src="/images/hero2.jpg"
              alt=""
              className="h-[30rem] w-full object-cover"
            />
            <div className="item-card absolute top-[15%] left-0 flex items-center justify-center w-full">
              <div className="item-card bg-[#D9D9D9]/50 backdrop-blur-xl md:w-[70%] w-[85%] md:px-[4rem] px-[1rem] py-[2rem] rounded-[9px] min-h-[15rem]">
                <h2 className="serif-regular text-center md:text-[2rem] text-[1.4rem] text-green-950 mb-[.9rem]">
                  We are here for you
                </h2>
                <small className="block text-gray-300 text-center mb-[3rem]">
                  Reach out to us for a compelling writeup
                </small>

                <div className="input-container mb-[1rem]">
                  <input
                    type="email"
                    className={`w-full px-3 py-2 h-[2.7rem] text-[16px] text-white outline-none ${
                      error.error
                        ? "border-solid border-[1px] border-red-900"
                        : "border-none"
                    } rounded-[9px] placeholder:text-[14px] placeholder:text-gray-400 bg-[#136a4a2e]`}
                    placeholder="Enter Email Address"
                    onChange={(e) => handleInputChange(e.target.value)}
                  />
                  {error.error && (
                    <div className="flex items-start gap-1 mt-1">
                      <IoAlertCircleOutline size={13} color="red" />
                      <small className="block text-[.6rem] text-red-500">
                        {error.errorDetails}
                      </small>
                    </div>
                  )}
                </div>

                <select
                  name=""
                  id=""
                  className="outline-none text-white custom-select text-[.9rem] w-full px-3 py-2 rounded-[9px] bg-green-100/30"
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option
                    value=""
                    disabled
                    selected
                    hidden
                    style={{ color: "gray" }}
                  >
                    Select Order
                  </option>
                  {services.map((item) => (
                    <option key={item} value={item} className="text-[1rem]">
                      {item}
                    </option>
                  ))}
                </select>

                <button
                  disabled={isLoading}
                  onClick={handleOrder}
                  className="bg-red-900 md:mt-6 mt-[2rem] serif-regular text-white h-[2.5rem] md:w-[13rem] w-full rounded-[9px]"
                >
                  {isLoading && (
                    <DotLoader
                      color={"white"}
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                      className="mx-auto"
                    />
                  )}

                  {!isLoading && "Send"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Home;
