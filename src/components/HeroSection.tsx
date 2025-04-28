'use client'; // Nécessaire pour utiliser Framer Motion et les hooks React

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Effet subtil en arrière-plan (optionnel) */}
      <div className="absolute inset-0 opacity-10">
        {/* Vous pourriez mettre une animation de particules ou un motif SVG ici */}
      </div>

      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4 z-10"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
      >
        Rakotoniaina Rajo Mampionona
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-indigo-300 mb-8 z-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Développeur Full-Stack | PHP, Python, JavaScript
      </motion.p>
      <motion.div
        className="flex space-x-4 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Voir mes projets
        </a>
        <a href="#contact" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Me contacter
        </a>
      </motion.div>
      {/* Indicateur pour scroller vers le bas */}
      <motion.div
         className="absolute bottom-10 animate-bounce z-10"
         initial={{ y: -10, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 1, duration: 0.5 }}
      >
         <svg className="w-8 h-8 text-indigo-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
         </svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;