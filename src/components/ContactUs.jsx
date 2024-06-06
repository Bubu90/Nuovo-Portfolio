import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const ContactUs = ({ open, onClose }) => {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !form.current.user_name.value.trim() ||
      !form.current.user_email.value.trim() ||
      !form.current.message.value.trim()
    ) {
      console.log("empty");
      return;
    }

    emailjs
      .sendForm("service_56q2iiu", "template_vxd26o1", form.current, {
        publicKey: "mn5naZFHg8DUVnO6U",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          onClose();
        },
        (error) => {
          console.log("FAILED...", error.text);
          form.current.reset();
        }
      );
  };

  return createPortal(
    <>
      {open && <div className="fixed inset-0 z-10 bg-black bg-opacity-50" />}
      <dialog
        ref={dialog}
        className="fixed inset-0 z-20 flex justify-center items-center"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-lg shadow-md w-96"
        >
          <p className="mb-4">
            <label htmlFor="user_name" className="block mb-2 text-gray-800">
              Name*
            </label>
            <input
              required
              type="text"
              id="user_name"
              name="user_name"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </p>
          <p className="mb-4">
            <label htmlFor="user_email" className="block mb-2 text-gray-800">
              Email*
            </label>
            <input
              required
              type="email"
              id="user_email"
              name="user_email"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </p>
          <p className="mb-4">
            <label htmlFor="message" className="block mb-2 text-gray-800">
              Message*
            </label>
            <textarea
              required
              id="message"
              name="message"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
            ></textarea>
          </p>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
            >
              Send
            </button>
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>,
    document.getElementById("modal")
  );
};

export default ContactUs;
