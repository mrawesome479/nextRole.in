import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] bg-white bg-linear-to-t from-blue-400 to-white lg:bg-none"
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 p-6 md:p-10 md:pl-20 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h2 className="text-2xl md:text-6xl font-bold text-[#172554] mb-4">
          <span className="font-mono text-[#1d4ed8] text-3xl md:text-6xl">
            NxtRole.AI
          </span>{" "}
          – Career Guidance & Roadmap Generator
        </h2>

        <p className="max-w-2xl text-[#1e1b4b] mb-8">
          AI-powered platform that helps students and professionals find the
          right career path, discover job roles, and learn skills to grow.
        </p>

        <button className="w-40 sm:w-44 md:w-48 hover:scale-110 transition duration-200 ease-in-out bg-linear-to-r from-blue-500 to-blue-700 cursor-pointer shadow-md/30 text-shadow-lg/30 text-white px-5 py-2 rounded-lg">
          Explore Now
        </button>
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex w-1/2 items-center justify-center">
        <img
          src="/herosection1.svg"
          alt="Career guidance"
          className="w-4/5 h-auto max-h-[500px]"
        />
      </div>
    </section>
  );
};

export default Hero;
