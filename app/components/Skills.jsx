"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiPython, SiJavascript } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" />, level: 90 },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 80 },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 95 },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 90 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
        { name: "Python", icon: <SiPython className="text-blue-500" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, level: 75 },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 90 },
        { name: "Docker", icon: <FaDocker className="text-blue-500" />, level: 75 },
        { name: "Database Design", icon: <FaDatabase className="text-purple-500" />, level: 85 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="skills" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Technical <span className="text-purple-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical expertise and the technologies I work with to create
            amazing digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="text-2xl"
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="ml-auto text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-white rounded-2xl shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["AWS", "Firebase", "Redux", "GraphQL", "REST API", "Webpack", "Jest", "CI/CD", "Agile"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium
                         hover:bg-purple-100 transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
