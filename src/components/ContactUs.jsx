import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8" id='contactus'>Contact Us</h2>
        <p className="px-2 md:px-20 lg:px-32 items-center text-center mb-12 leading-relaxed">
          Do you have any question?
        </p>
        <form className="space-y-6">
          {/* Name and Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 px-4 py-3 border border-[#9c7e38] rounded-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 border border-[#9c7e38] rounded-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-[#9c7e38] rounded-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#9c7e38] text-white cursor-pointer rounded-sm hover:bg-transparent hover:border hover:text-black hover:border-[#9c7e38] transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
