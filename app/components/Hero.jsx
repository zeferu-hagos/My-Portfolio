"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/zeferu-hagos",
      label: "GitHub",
      color: "hover:text-gray-600"
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://linkedin.com/in/zeferu-hagos",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    }
  ];

  const textVariants = {
    hidden: { x: 1000, opacity: 0 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 1.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full">
        <div className="grid md:grid-cols-2 items-center">
          {/* Text Content - Left Side */}
          <div className="h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-20">
            {/* Container for animated content */}
            <div className="space-y-8">
              {/* Hello Text */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="overflow-hidden"
              >
                <p className="text-purple-600 font-medium text-xl">
                  👋 I AM ZEFERU HAGOS
                </p>
              </motion.div>

              {/* Name */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="overflow-hidden"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800"
                    style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                >
                  Zeferu Hagos
                </h1>
              </motion.div>

              {/* Title */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="overflow-hidden"
              >
                <span className="text-5xl md:text-7xl font-bold block"
                      style={{
                        background: 'linear-gradient(to right, #7c3aed, #3b82f6, #7c3aed)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundSize: '200% auto',
                      }}
                >
                  Full Stack Developer
                </span>
              </motion.div>

              {/* Description */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="overflow-hidden"
              >
                <p className="text-gray-600 text-xl font-light">
                  Crafting innovative web solutions • Building scalable applications • Transforming ideas into reality
                </p>
              </motion.div>

              {/* Static Elements */}
              <div className="space-y-8 pt-12">
                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex flex-wrap gap-6"
                >
                  <motion.a
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px -10px rgba(124, 58, 237, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 
                             transition-colors duration-300 shadow-lg hover:shadow-purple-500/30
                             relative overflow-hidden group"
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <motion.div
                      className="absolute inset-0 bg-purple-700"
                      initial={{ scale: 0, borderRadius: "100%" }}
                      whileHover={{ scale: 1.5, borderRadius: "0%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#portfolio"
                    className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full 
                             hover:bg-purple-50 transition-colors duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10">View Portfolio</span>
                    <motion.div
                      className="absolute inset-0 bg-purple-50"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="flex gap-6"
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        y: -5,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.4 }
                      }}
                      className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Image Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-screen relative px-4 sm:px-6 lg:px-20 flex items-center"
          >
            <div className="relative w-full h-[80vh] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/Hero/hero.gif"
                alt="Hero Image"
                fill
                className="object-cover"
                priority
              />
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent" />
              
              {/* Enhanced decorative elements */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30"
              />

              {/* Additional decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <motion.div
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-10 right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute bottom-10 left-10 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"
                />
              </div>
            </div>

            {/* Frame decoration */}
            <div className="absolute -inset-4 border-2 border-purple-200/20 rounded-3xl -z-10 transform rotate-3" />
            <div className="absolute -inset-4 border-2 border-blue-200/20 rounded-3xl -z-10 transform -rotate-3" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
            <FaArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
