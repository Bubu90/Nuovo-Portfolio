import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import ContactUs from "./ContactUs";

const Contact = ({ setMenuOpenForm, menuOpenForm }) => {
  return (
    <>
      {menuOpenForm ? (
        <ContactUs open={menuOpenForm} onClose={() => setMenuOpenForm(false)} />
      ) : (
        <div className="border-b border-neutral-900 pb-20 text-center tracking-tighter   ">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-10 text-center text-4xl"
          >
            Per contattrmi
          </motion.h2>
          <div className="text-center tracking-tighter ">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-4"
            >
              {CONTACT.address}
            </motion.p>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="my-4"
            >
              {CONTACT.phoneNo}
            </motion.p>
            <a href="#" className="border-b">
              {CONTACT.email}
            </a>
          </div>
          <button
            className="mr-4 inline-block rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100 "
            onClick={() => setMenuOpenForm(true)}
          >
            Contact me
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
