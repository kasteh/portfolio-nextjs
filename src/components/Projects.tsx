"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  // REMPLACER PAR VOS VRAIS PROJETS
  const projectsData = [
    { id: 1, title: "Projet Alpha", description: "Une application web innovante utilisant PHP (Laravel) et React.", imageUrl: "/placeholder-project.jpg", tags: ["PHP", "Laravel", "React", "MySQL"], githubUrl: "#", liveUrl: "#" },
    { id: 2, title: "Projet Beta", description: "API RESTful performante développée avec Python (Django) et consommée par un frontend Next.js.", imageUrl: "/placeholder-project.jpg", tags: ["Python", "Django", "Next.js", "PostgreSQL"], githubUrl: "#", liveUrl: "#" },
    { id: 3, title: "Outil Gamma", description: "Un outil en ligne de commande et une interface web simple avec Flask et JavaScript vanilla.", imageUrl: "/placeholder-project.jpg", tags: ["Python", "Flask", "JavaScript"], githubUrl: "#", liveUrl: "#" },
    // Ajoutez d'autres projets ici
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-800"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.1 }}
       transition={{ staggerChildren: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Projets Récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"}}
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-600">
                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300">
                     <FaGithub size={24} />
                   </a>
                   {project.liveUrl !== "#" && (
                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                       Voir Live
                     </a>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;