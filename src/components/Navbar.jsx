import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/bruno-laria-a610471a7/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Bubu90">
          <FaGithub />
        </a>

        <a href="https://www.instagram.com/bubu_br1_90/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
