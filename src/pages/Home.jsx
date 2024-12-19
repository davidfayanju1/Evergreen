import React from "react";
import DefaultLayout from "../layout/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="page_container min-h-screen">
        <section className="hero min-h-[20rem] md:pt-0 pt-[2rem] md:px-[4rem] px-[1rem] flex items-center justify-between md:flex-row flex-col w-full bg-gray-100">
          <div className="text_container">
            <h1 className="serif-regular text-green-950 md:text-[3rem] text-[2rem]">
              Welcome to Evergreen
            </h1>
            <h2 className="text-gray-500">Where Stories Come To Life</h2>
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
