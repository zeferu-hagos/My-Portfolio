"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    image: '/testimonials/sarah.jpg',
    text: 'Working with Zeferu was an absolute pleasure. Their technical expertise and attention to detail transformed our vision into reality. The end result exceeded our expectations!',
    rating: 5,
    company: 'TechStart Solutions'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    image: '/testimonials/michael.jpg',
    text: 'Exceptional developer with outstanding problem-solving skills. Delivered our project on time and with excellent quality. Would definitely work with them again!',
    rating: 5,
    company: 'InnovateTech'
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Creative Director',
    image: '/testimonials/emma.jpg',
    text: 'Zeferu brings both technical excellence and creative insight to every project. Their work has significantly improved our user engagement metrics.',
    rating: 5,
    company: 'Creative Minds Agency'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrevious = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Client <span className="text-purple-600">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what my clients have to say about their experiences working with me.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative h-[400px] md:h-[300px] overflow-hidden">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full">
                  <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                    {/* Image and Info */}
                    <div className="flex-shrink-0">
                      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex justify-center mt-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <FaQuoteLeft className="text-purple-200 text-4xl mb-4" />
                      <p className="text-gray-600 italic mb-4">
                        {testimonials[currentIndex].text}
                      </p>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-purple-600 font-medium">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="bg-white p-3 rounded-full shadow-lg text-purple-600 hover:text-purple-700
                       transition-colors duration-300"
            >
              <FaChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="bg-white p-3 rounded-full shadow-lg text-purple-600 hover:text-purple-700
                       transition-colors duration-300"
            >
              <FaChevronRight size={20} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                          ${index === currentIndex 
                            ? 'bg-purple-600 w-6' 
                            : 'bg-purple-200 hover:bg-purple-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
