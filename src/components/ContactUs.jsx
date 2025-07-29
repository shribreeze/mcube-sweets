'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const ContactUs = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-transparent">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl text-center mb-8"
          id="contactus"
          variants={fadeInUp}
          custom={1}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="px-2 md:px-20 lg:px-32 items-center text-center mb-12 leading-relaxed"
          variants={fadeInUp}
          custom={2}
        >
          Do you have any question?
        </motion.p>

        <motion.form
          className="space-y-6"
          variants={fadeInUp}
          custom={3}
        >
          
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

          
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-[#9c7e38] rounded-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

         
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#9c7e38] text-white border cursor-pointer rounded-sm hover:bg-transparent hover:border hover:text-[#9c7e38] hover:border-[#9c7e38] transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactUs;
