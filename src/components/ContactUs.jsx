import React from 'react';

const ContactUs = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-[#fdfbf8]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="space-y-6">
          {/* Name and Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-yellow-400 text-white font-semibold rounded-full hover:bg-yellow-500 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
