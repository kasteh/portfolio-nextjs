"use client"; // Nécessaire pour utiliser Framer Motion et les hooks React

import React from "react";
import Hero from "@/components/HeroSection";
import About from "@/components/About";
import Skills from "@/components/Skiils";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

// ---- Page Principale ----

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {" "}
      {/* Conteneur principal pour gérer le thème dark/light si besoin */}
      {/* Un composant Header/Navbar irait bien ici si vous en avez un séparé */}
      <SpeedInsights />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
