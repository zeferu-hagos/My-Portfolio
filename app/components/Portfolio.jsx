"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Modern E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time updates and payment integration.',
      image: '/portfolio/ethiopedia.jpg',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      liveLink: 'https://project1.com',
      githubLink: 'https://github.com/yourusername/project1',
      techIcons: [
        <FaReact key="react" className="text-blue-400" />,
        <FaNodeJs key="node" className="text-green-500" />,
        <SiTailwindcss key="tailwind" className="text-cyan-400" />
      ]
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Interactive dashboard for tracking investments and portfolio performance.',
      image: '/portfolio/ethiopedia.jpg',
      category: 'frontend',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      liveLink: 'https://project2.com',
      githubLink: 'https://github.com/yourusername/project2',
      techIcons: [
        <SiNextdotjs key="next" className="text-black" />,
        <SiTypescript key="ts" className="text-blue-600" />,
        <SiTailwindcss key="tailwind" className="text-cyan-400" />
      ]
    },
    // Add more projects as needed
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Mobile', value: 'mobile' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Recent <span className="text-purple-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and experience in
            building modern web applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === filter.value
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white text-gray-600 hover:bg-purple-50'}`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                       transition-shadow duration-300 border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-200 transition-colors duration-300"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-200 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={22} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex items-center gap-3">
                  {project.techIcons.map((icon, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -2 }}
                      className="text-xl"
                    >
                      {icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
