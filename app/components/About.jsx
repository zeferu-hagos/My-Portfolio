"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLightbulb, FaRocket } from 'react-icons/fa';
import Image from 'next/image';

const About = () => {
  const cards = [
    {
      icon: <FaBrain className="text-4xl text-purple-500" />,
      title: "Creative Problem Solver",
      description: "Turning complex challenges into elegant solutions through innovative thinking."
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "Lifelong Learner",
      description: "Constantly expanding my knowledge and staying current with latest technologies."
    },
    {
      icon: <FaRocket className="text-4xl text-blue-500" />,
      title: "Tech Enthusiast",
      description: "Passionate about leveraging cutting-edge technology to build amazing experiences."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About <span className="text-purple-600">Me</span>
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-8" />
          </motion.div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/my-image/1.jpg" // Add your image path here
                  alt="Profile"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                Passionate Web Developer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                As a dedicated web developer, I blend creativity with technical expertise to craft 
                exceptional digital experiences. My journey in web development is driven by a 
                passion for creating intuitive, performant, and visually stunning applications 
                that make a real impact.
              </p>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 
                           transition-colors duration-300 shadow-lg hover:shadow-purple-500/30"
                >
                  Download CV
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full 
                           hover:bg-purple-50 transition-colors duration-300"
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Cards Section */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow 
                         duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center 
                            mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
