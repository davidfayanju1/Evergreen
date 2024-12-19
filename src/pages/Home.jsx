import React from "react";
import DefaultLayout from "../layout/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="page_container min-h-screen">
        <section className="hero min-h-[20rem] w-full bg-gray-100"></section>
        <section className="about min-h-[30rem] w-full bg-gray-200"></section>
        <section className="projects_number min-h-[20rem] bg-green-900"></section>
        <section className="testimonials min-h-[35rem] bg-green-300"></section>
      </div>
    </DefaultLayout>
  );
};

export default Home;
