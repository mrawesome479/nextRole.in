import React from "react";

const About = () => {
  return (
    <section
  id="about"
  className=" bg-white py-16 px-6"
>
  {/* Section Title */}
  <h3 className="text-4xl md:text-6xl font-bold text-center text-blue-600">
    About us
  </h3>

  {/* Content Wrapper */}
  <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
    
    {/* Text Content */}
    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        At <span className="text-blue-600 font-semibold">NxtRole.AI</span>, we believe that choosing the right career path
        shouldn’t be a guessing game. Our AI-powered platform helps students
        and professionals discover suitable job roles, identify skill gaps,
        and receive personalized learning roadmaps tailored to their goals.
        By combining data-driven insights with real-world career trends, we
        make your growth journey smarter and faster.
      </p>

      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        Our mission is to simplify career decisions through innovation and
        intelligence. We aim to empower individuals to make confident choices,
        learn the right skills, and stay future-ready in a rapidly evolving job
        market. Whether you’re just starting out or planning your next big move,
        <span className="text-blue-600 font-semibold"> NxtRole.AI</span> guides you every step of the way.
      </p>
    </div>

    {/* Illustration */}
    <div className="hidden w-full lg:w-1/2 lg:flex justify-center">
      <img
        src="/aboutus.svg"
        alt="About Us illustration"
        className="w-4/5 max-w-md h-auto"
      />
    </div>
  </div>
</section>

  );
};

export default About;
