
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "./ui/button";
const HeroSection = () => {

  const ScrollToSection = () => {
    const section = document.getElementById("about");
    if(section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      id="hero"
      className="min-h-[500px] h-[700px] bg-cover lg:bg-center bg-right bg-no-repeat relative" 
      style={{ backgroundImage: 'url("/images/conference.jpg")' }}
    >
      <div className="w-full h-full absolute top-0 bg-radial from-slate-700 via-slate-900 to-slate-950 opacity-65"></div>
      <div className="container max-w-5xl mx-auto h-full flex flex-col items-center justify-center lg:p-20 p-10">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center font-bold text-slate-50 lg:text-7xl md:text-5xl text-4xl">
          {"Construisons les réseaux de demain"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-md font-normal text-neutral-50/80"
        >
          Le Master Réseaux et Services Mobiles vous prépare à devenir un expert des réseaux de télécommunications, de la 5G, de l’IoT, et des services mobiles. Un programme complet alliant théorie, pratique, et projets concrets pour bâtir l’infrastructure numérique du futur.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button className="w-60 transform rounded-lg bg-blue-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 dark:bg-white dark:text-black dark:hover:bg-gray-200" asChild>
            <Link href={"/apply"}>Postuler</Link>
          </Button>
          <button onClick={ScrollToSection} className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Découvrez plus
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
