"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          À propos de moi
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Développeur Full-Stack passionné avec une expertise solide en PHP,
          Python et JavaScript. Je transforme des idées complexes en
          applications web performantes, intuitives et élégantes.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          J&apos;aime explorer de nouvelles technologies et relever des défis
          techniques, en mettant toujours l&apos;accent sur la qualité du code,
          l&apos;expérience utilisateur et la performance.
        </p>
        {/* Ajoutez ici une photo si vous le souhaitez */}
      </div>
    </motion.section>
  );
};

export default About;
