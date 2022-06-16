import React from "react";

export default function ContactForm() {
  return (
    <div>
      <h1 className="text-2xl text-center mb-10 tracking-widest">Contact Us</h1>
      <form action="https://formsubmit.co/your@email.com" method="POST">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              required
              className="w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="name"
              type="text"
              placeholder="John"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              required
              className="w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="lastName"
              type="text"
              placeholder="Doe"
            />
          </div>
          <div className="w-full mt-5 px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-semibold mb-3"
              htmlFor="email"
            >
              Email adress
            </label>
            <input
              required
              className="w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              id="email"
              type="text"
              placeholder="you@domain.com"
            />
            <button
              type="submit"
              className="w-full mt-5 font-normal tracking-widest bg-productButton uppercase hover:bg-transparent hover:border-solid border border-productButton text-white hover:text-black py-3 px-5 transition-all"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
