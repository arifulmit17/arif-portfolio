import React from "react";
import { motion } from "framer-motion";
 import { Typewriter } from "react-simple-typewriter";
import { SiGithub, SiLinkedin } from "react-icons/si";

const fileId = "1tlgFNtwOQOoShv8RlF5T5eluEuEw3I2K";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
  link.download = "document.pdf";
  link.click();
};

const Intro = () => {
  return (
    
   <motion.section
  className="w-11/12 mx-auto shadow-sm p-5 md:p-8 rounded-2xl flex flex-col lg:flex-row items-center gap-8"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>

  {/* Image */}
  <motion.div
    className="w-full lg:w-1/2 flex justify-center lg:justify-start"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <figure>
      <motion.img
        src="https://res.cloudinary.com/dfhlm4cyw/image/upload/v1777485934/ChatGPT_Image_Apr_29_2026_11_57_32_PM_xjaj6w.png"
        alt="Md. Ariful Haque"
        className="w-32 sm:w-40 md:w-48 lg:w-52 rounded-full mx-auto"
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
    </figure>
  </motion.div>

  {/* Content */}
  <motion.div
    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    viewport={{ once: true }}
  >

    {/* Name */}
    <motion.h1
      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      Md. Ariful Haque
    </motion.h1>

    {/* Typewriter */}
    <motion.h2
      className="text-lg sm:text-xl md:text-2xl font-semibold mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Typewriter
        words={["Frontend Developer", "React Enthusiast", "Full Stack Developer"]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </motion.h2>

    {/* Social Icons */}
    <div className="flex gap-5 justify-center lg:justify-start mb-5">
      <a
        href="https://www.linkedin.com/in/md-ariful-haque-sunny-803b12b0/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-primary/10 transition"
      >
        <SiLinkedin className="w-7 h-7 md:w-8 md:h-8" />
      </a>

      <a
        href="https://github.com/arifulmit17"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:bg-primary/10 transition"
      >
        <SiGithub className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </div>

    {/* Resume Button */}
    <motion.button
      onClick={handleDownload}
      className="btn btn-primary px-6 py-2 md:px-8 md:py-3"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 250 }}
    >
      Resume
    </motion.button>

  </motion.div>
</motion.section>
    
  );
};


export default Intro;
