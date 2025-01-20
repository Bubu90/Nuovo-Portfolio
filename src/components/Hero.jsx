import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Tavola_da_disegno_1.png";
import { motion } from "framer-motion";
import { useState } from "react";
import ContactUs from "./ContactUs";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = ({ setMenuOpenForm, menuOpenForm }) => {
  const cvFileName = "Laria Bruno Curriculum.pdf";

  return (
    <>
      {menuOpenForm ? (
        <ContactUs open={menuOpenForm} onClose={() => setMenuOpenForm(false)} />
      ) : null}
      <div className="border-b border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h2
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              >
                Bruno Laria
              </motion.h2>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Full-Stak Developer
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter"
              >
                {HERO_CONTENT}
                <div className="mt-4 " style={{ gap: "1rem", display: "flex" }}>
                  <button
                    className="mr-4 margin-top-10 inline-block rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100 "
                    onClick={() => setMenuOpenForm(true)}
                  >
                    Contact me
                  </button>
                  <button className="mr-4 margin-top-10 inline-block rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100 ">
                    <a href={cvFileName} download>
                      Download CV
                    </a>
                  </button>
                </div>
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={profilePic}
                alt="Bruno Laria"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
