"use client";

import React from "react";
import {motion} from 'framer-motion';
import { FaPhp, FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaGithub} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiLaravel, SiSymfony, SiDjango, SiFlask, SiMongodb, SiDocker } from "react-icons/si";

const Skills = () => {
    const skillCategories = [
      {
        title: "Backend",
        icon: <FaServer className="w-8 h-8 mb-2 text-indigo-500" />,
        skills: [
          { name: "PHP", icon: <FaPhp size={24} className="text-purple-500" /> },
          { name: "Laravel", icon: <SiLaravel size={24} className="text-red-500" /> },
          { name: "Symfony", icon: <SiSymfony size={24} className="text-black dark:text-white" /> },
          { name: "Python", icon: <FaPython size={24} className="text-blue-500" /> },
          { name: "Django", icon: <SiDjango size={24} className="text-green-700" /> },
          { name: "Flask", icon: <SiFlask size={24} className="text-gray-600 dark:text-gray-300" /> },
          { name: "Node.js", icon: <FaNodeJs size={24} className="text-green-500" /> },
        ]
      },
      {
        title: "Frontend",
        icon: <FaCode className="w-8 h-8 mb-2 text-indigo-500" />,
        skills: [
          { name: "JavaScript", icon: <FaJs size={24} className="text-yellow-500" /> },
          { name: "React", icon: <FaReact size={24} className="text-cyan-500" /> },
          { name: "Next.js", icon: <SiNextdotjs size={24} className="text-black dark:text-white" /> },
          { name: "Tailwind CSS", icon: <SiTailwindcss size={24} className="text-teal-500" /> },
          { name: "HTML5 & CSS3", icon: <FaCode size={24} className="text-orange-500" /> }, // Placeholder icon
        ]
      },
      {
        title: "Bases de Données & Outils",
        icon: <FaDatabase className="w-8 h-8 mb-2 text-indigo-500" />,
        skills: [
          { name: "SQL (MySQL, PostgreSQL)", icon: <FaDatabase size={24} className="text-blue-700" /> },
          { name: "MongoDB", icon: <SiMongodb size={24} className="text-green-600" /> }, // Assurez-vous d'importer SiMongodb
          { name: "Docker", icon: <SiDocker size={24} className="text-blue-600" /> }, // Assurez-vous d'importer FaDocker
          { name: "Git", icon: <FaGithub size={24} className="text-gray-700 dark:text-gray-300" /> },
        ]
      },
    ];
  
    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    };
  
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
      },
    };
  
    return (
      <motion.section
        id="skills"
        className="py-20 px-6 bg-white dark:bg-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Compétences Techniques</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={containerVariants} // Appliquer le stagger aux enfants directs (les cartes de catégorie)
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                variants={itemVariants} // Animation pour chaque carte
              >
                {category.icon}
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
                <motion.ul
                  className="space-y-2"
                  variants={containerVariants} // Appliquer le stagger aux éléments de la liste
                >
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill.name}
                      className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300"
                      variants={itemVariants} // Animation pour chaque skill
                      whileHover={{ scale: 1.05, color: '#6366f1' }} // Accentuation au survol
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  };

  export default Skills;