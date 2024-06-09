import React from "react";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import linkedin_icon from "../../assets/linkedIn.svg";
import github_icon from "../../assets/github.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3c100108-367c-413f-8931-47886c384594");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("Form Submitted Successfully");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col justify-center gap-8 m-4 sm:m-8 md:m-16 lg:m-24"
      
    >
      <h1 className="text-5xl text-center font-semibold">Get in touch</h1>
      <div className="flex flex-col lg:flex-row gap-40 mt-16 lg:mt-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl mb-5 font-semibold text-violet-600">
            Let's Talk !!
          </h1>
          <p>
            Feel free to drop your message using the form. Thank you for reaching out in advance
          </p>
          <div className="flex gap-4 items-center">
            <img src={mail_icon} alt="Email Icon" className="w-6 h-6" />
            <a
              href="mailto:ratnalasaiganesh@gmail.com"
              className="text-lg cursor-pointer"
            >
              ratnalasaiganesh@gmail.com
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <img src={call_icon} alt="Call Icon" className="w-6 h-6" />
            <a href="tel:+916305279018" className="text-lg cursor-pointer">
              +91 6305279018
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <img src={location_icon} alt="Location Icon" className="w-6 h-6" />
            <a
              href="https://www.google.com/maps?q=Hyderabad,+India"
              target="_blank"
              className="text-lg cursor-pointer"
            >
              Hyderabad, India
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <img src={linkedin_icon} alt="Location Icon" className="w-6 h-6" />
            <a
              href="https://www.linkedin.com/in/ratnala-saiganesh/"
              target="_blank"
              className="text-lg cursor-pointer"
            >
              Sai Ganesh Ratnala
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <img src={github_icon} alt="Location Icon" className="w-6 h-6" />
            <a
              href="https://github.com/saiganesh1976"
              target="_blank"
              className="text-lg cursor-pointer"
            >
              saiganesh1976
            </a>
          </div>
        </div>

        <div className="w-full lg:w-3/4 xl:w-1/2">
          <form onSubmit={onSubmit} className="flex flex-col gap-3">
            <div>
              <label htmlFor="name" className="block text-lg mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                className=" w-full lg:w-96 p-2 border bg-slate-700 outline-none border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full lg:w-96 p-2 border bg-slate-700 outline-none border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg mb-2">
                Write your message here
              </label>
              <textarea
                name="message"
                id="message"
                rows={8}
                placeholder="Enter your message"
                className="w-full lg:w-96 p-2 border bg-slate-700 outline-none border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="p-2 bg-violet-800 text-white rounded-md mt-3 lg:w-96"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
