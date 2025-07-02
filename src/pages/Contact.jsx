import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import mail_icon from "../assets/mail_icon.svg";
import location_icon from "../assets/location_icon.svg";
import call_icon from "../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6aeef2bb-83df-4aad-a743-d3a83be3a697");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div
      id="contact"
      className="contact flex flex-col items-center justify-center gap-16 my-10 mx-4 sm:mx-8 lg:mx-16"
    >
      <div className="contact-title relative text-center mb-4">
        <h1 className="py-0 px-4 text-3xl sm:text-4xl lg:text-5xl font-medium">
          Get in touch
        </h1>
        <img
          src={theme_pattern}
          alt="pattern"
          className="absolute bottom-0 right-0 z-[-1] w-12 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
        />
      </div>

      <div className="contact-section flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="contact-left flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium herotext">
            Let's talk
          </h1>
          <p className="max-w-xl text-gray-400 text-base sm:text-lg lg:text-xl leading-6 lg:leading-7">
            I'm currently open to internship opportunities and data-focused roles where I can apply my analytical skills to real-world problems. Feel free to reach out if you have a project, role, or collaboration in mind—I'm always excited to contribute and grow.
          </p>
          <div className="contact-details flex flex-col gap-4 text-gray-400 text-base sm:text-lg lg:text-xl">
            <div className="contact-detail flex items-center justify-center lg:justify-start gap-3">
              <img
                src={mail_icon}
                alt="Mail"
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
              />
              <p>Lsuja502@gmail.com</p>
            </div>
            <div className="contact-detail flex items-center justify-center lg:justify-start gap-3">
              <img
                src={call_icon}
                alt="Call"
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
              />
              <p>+977 9809212574</p>
            </div>
            <div className="contact-detail flex items-center justify-center lg:justify-start gap-3">
              <img
                src={location_icon}
                alt="Location"
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
              />
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right flex flex-col gap-4 sm:gap-5 lg:gap-6">
          <label
            htmlFor="name"
            className="text-gray-400 font-medium text-base sm:text-lg lg:text-xl"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            className="border-none outline-none w-full lg:w-96 h-10 sm:h-12 lg:h-14 rounded-md bg-gray-600 text-gray-200 text-base sm:text-lg lg:text-xl p-2"
          />
          <label
            htmlFor="email"
            className="text-gray-400 font-medium text-base sm:text-lg lg:text-xl"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="border-none outline-none w-full lg:w-96 h-10 sm:h-12 lg:h-14 rounded-md bg-gray-600 text-gray-200 text-base sm:text-lg lg:text-xl p-2"
          />
          <label
            htmlFor="message"
            className="text-gray-400 font-medium text-base sm:text-lg lg:text-xl"
          >
            Write your message here
          </label>
          <textarea
            id="message"
            className="w-full lg:w-96 border-none outline-none  p-2 bg-gray-700 text-gray-200 text-base sm:text-lg lg:text-xl rounded-md"
            name="message"
            rows="5"
            placeholder="Enter your message here"
          ></textarea>
          <button
            type="submit"
            className="submit-button border-none text-white bg-gradient-to-r from-[#df8908] to-[#b415ff] rounded-xl px-4 py-2 text-base sm:text-lg lg:text-xl font-medium transition-transform duration-300 transform hover:scale-105"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
