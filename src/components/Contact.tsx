"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Entrons en contact !
        </h2>
        <p className="text-lg text-indigo-200 mb-8">
          Intéressé par une collaboration ou vous avez une question ?
          N&apos;hésitez pas à me contacter.
        </p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="mailto:rajomampiononarakotoniaina@gmail.com" // REMPLACER PAR VOTRE EMAIL
            className="text-indigo-300 hover:text-white transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope size={32} />
          </motion.a>
          <motion.a
            href="https://github.com/kasteh" // REMPLACER PAR VOTRE GITHUB
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-white transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={32} />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=100090133283592" // REMPLACER PAR VOTRE LINKEDIN
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-300 hover:text-white transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebook size={32} />
          </motion.a>
        </div>
        {/* Optionnel : Ajouter un formulaire de contact simple ici */}
      </div>
    </motion.section>
  );
};

export default Contact;
