import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

import { GrHtml5 } from "react-icons/gr";
import {
  FaCss3,
  FaBootstrap,
  FaNodeJs,
  FaTrello,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { motion } from "framer-motion";
import { TbFileTypeSql } from "react-icons/tb";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaAngular } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiIonic } from "react-icons/si";



const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-cyan-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-white-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-orange-800 p-4"
        >
          <GrHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-800 p-4"
        >
          <FaCss3 className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-green-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-yellow-800 p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-purple-800 p-4"
        >
          <FaBootstrap className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-800 p-4"
        >
          <FaTrello className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border--800 p-4"
        >
          <FaGithub className="text-7xl text-white-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-pink-800 p-4"
        >
          <BiLogoTailwindCss className="text-7xl text-pink-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-800 p-4"
        >
          <TbBrandVscode className="text-7xl text-blue-700" />
        </motion.div>
      <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-800 p-4"
        >
       
          <img 
    src="./../../src/assets/mysql-5-logo-png-transparent.jpg"  // Inserisci il percorso corretto dell'immagine
    alt="Descrizione dell'immagine"  // Descrizione dell'immagine per l'accessibilità
    className="w-18 h-20"  // Definisci la dimensione dell'immagine (come esempio: 64px x 64px)
  />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-orange-800 p-4"
        >
          <TbFileTypeSql style={{color: "#d47030"}}  className="text-7xl text-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-violet-800 p-4"
        >
          <TbBrandCSharp   className="text-7xl text-violet-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-red-800 p-4"
         
        >
 <svg width="0" height="0">
  <defs>
    <linearGradient id="gradientRed" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#ff4d4d" /> {/* Rosso chiaro */}
      <stop offset="100%" stopColor="#b30000" /> {/* Rosso scuro */}
    </linearGradient>
  </defs>
</svg>
<FaAngular style={{ fill: "url(#gradientRed)" }} className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-white-800 p-4"
        >
         
          <img 
    src="./../../src/assets//Windows_logo.jpg"  // Inserisci il percorso corretto dell'immagine
    alt="Descrizione dell'immagine"  // Descrizione dell'immagine per l'accessibilità
    className="w-16 h-16"  
  />
        </motion.div>
       
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-800 p-4"
        >
          <SiIonic    className="text-7xl text-blue-500" />
 
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
