import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className="bg-white mt-8"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-700">
        Our Features & Services
      </h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {[
          {
            img: "/career.svg",
            title: "Career Recommendations",
            desc: "AI-driven insights to guide your growth and improve your career choices effectively.",
          },
          {
            img: "/course.svg",
            title: "Course Recommendations",
            desc: "Find the most relevant courses tailored to your skills and career goals.",
          },
          {
            img: "/analysis.svg",
            title: "Skill Gap Analysis",
            desc: "Identify missing skills and get personalized suggestions to bridge the gap.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white p-8 flex flex-col justify-center items-center rounded-2xl shadow-md hover:shadow-2xl border border-transparent hover:border-blue-200 hover:scale-105 transition-transform duration-300"
          >
            <img
              src={f.img}
              alt={f.title}
              className="h-32 w-32 mb-6 p-4 bg-blue-50 rounded-full"
            />
            <h4 className="text-xl font-semibold text-blue-600 mb-2">
              {f.title}
            </h4>
            <p className="text-slate-600 text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
