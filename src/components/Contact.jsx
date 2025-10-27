import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="pb-12 bg-white">
        <h3 className="text-3xl md:text-6xl font-bold text-center text-blue-600 mb-12">
          Contact Us
        </h3>
        <form className="max-w-lg mx-auto space-y-4 px-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-gray-300  bg-white text-black "
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-lg border border-gray-300 bg-white text-black"
          ></textarea>
          <button
            type="submit"
            className="w-full hover:scale-110 transition duration-200 ease-in-out bg-linear-to-r from-blue-500 to-blue-700 cursor-pointer shadow-md/30 text-shadow-lg/30 hidden md:block text-white px-5 py-2 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </section>
  )
}

export default Contact