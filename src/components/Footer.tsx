"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-500 py-6 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Rakotoniaina Rajo Mampionona. Tous droits réservés.</p>
      {/* Vous pouvez ajouter de petits liens discrets ici si nécessaire */}
    </footer>
  );
};

export default Footer;