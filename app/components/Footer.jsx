"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://linkedin.com/in/zeferu-hagos",
      label: "LinkedIn",
      color: "hover:text-blue-500 hover:bg-blue-50"
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/zeferu-hagos",
      label: "GitHub",
      color: "hover:text-gray-600 hover:bg-gray-50"
    },
    {
      icon: <FaTwitter size={20} />,
      href: "https://twitter.com/zeferu1521",
      label: "Twitter",
      color: "hover:text-blue-400 hover:bg-blue-50"
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://instagram.com/zeferu-hagos",
      label: "Instagram",
      color: "hover:text-pink-500 hover:bg-pink-50"
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'zeferu1521@gmail.com', href: 'mailto:zeferu1521@gmail.com' },
    { icon: <FaPhone />, text: '+251914595406', href: 'tel:+251914595406' },
    { icon: <FaMapMarkerAlt />, text: 'Mekelle, Ethiopia', href: '#' }
  ];

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const AnimatedText = ({ text, className }) => (
    <div className={`flex overflow-hidden ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.03
              }
            }
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );

  return (
    <footer className="relative bg-white">
      {/* Animated Gradient Border */}
      <motion.div 
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-[length:200%_auto]"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              className="space-y-4"
            >
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/footer/1.jpg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <AnimatedText 
                  text="Zeferu"
                  className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                />
              </motion.div>
              <motion.p 
                variants={textAnimation}
                className="text-gray-600 leading-relaxed"
              >
                Crafting digital experiences with passion and precision. Transforming ideas into 
                elegant, functional solutions.
              </motion.p>
              
              {/* Social Links with Hover Effects */}
              <div className="flex gap-3 pt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      y: -5,
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-lg text-gray-600 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links with Enhanced Animations */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              className="space-y-4"
            >
              <AnimatedText 
                text="Quick Links"
                className="text-lg font-semibold text-gray-800"
              />
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-300 
                               flex items-center space-x-2 group"
                    >
                      <motion.span 
                        className="h-1 w-1 rounded-full bg-purple-600 group-hover:w-2 transition-all duration-300"
                      />
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info with Floating Animations */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              className="space-y-4"
            >
              <AnimatedText 
                text="Contact Info"
                className="text-lg font-semibold text-gray-800"
              />
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 group"
                  >
                    <motion.span 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="text-purple-600"
                    >
                      {info.icon}
                    </motion.span>
                    <a 
                      href={info.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                    >
                      {info.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter with Enhanced Interactions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textAnimation}
              className="space-y-4"
            >
              <AnimatedText 
                text="Newsletter"
                className="text-lg font-semibold text-gray-800"
              />
              <motion.p variants={textAnimation} className="text-gray-600">
                Subscribe to receive updates and news about my latest projects.
              </motion.p>
              <motion.form 
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 
                           focus:ring-purple-600 focus:border-transparent transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 
                           transition-colors duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Subscribe</span>
                  <motion.div
                    className="absolute inset-0 bg-purple-700 transform origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          className="border-t border-gray-100 py-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              variants={letterAnimation}
              className="flex items-center space-x-2 text-gray-600"
            >
              <AnimatedText 
                text={`© ${new Date().getFullYear()} Zeferu`}
                className="inline-flex"
              />
              <span className="text-gray-400">|</span>
              <span className="flex items-center">
                Made with 
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="mx-1"
                >
                  <FaHeart className="text-red-500" />
                </motion.div>
                in Ethiopia
              </span>
            </motion.div>
            <AnimatedText 
              text="Designed & Developed by Zeferu"
              className="text-gray-500 text-sm"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
