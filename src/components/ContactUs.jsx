import emailjs from "@emailjs/browser";
import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

const ContactUs = ({ open, onClose }) => {
  const dialog = useRef();
  const form = useRef();

  // const handleOutsideClick = useCallback(
  //   (event) => {
  //     if (dialog.current && !dialog.current.contains(event.target)) {
  //       onClose();
  //     }
  //   },
  //   [onClose]
  // );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
      // document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      dialog.current.close();
    }

    return () => {
      // document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

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
        className="fixed inset-0 z-20 flex justify-center items-center bg-transparent"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" bg-transparent bg-opacity-100 p-8 rounded-lg shadow-md w-96"
          onClick={(e) => e.stopPropagation()} // Prevent click events from closing the dialog
        >
          <p className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-white mb-2 text-gray-800"
            >
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
            <label
              htmlFor="user_email"
              className="block mb-2  text-white text-gray-800"
            >
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
            <label
              htmlFor="message"
              className="block mb-2 text-white text-gray-800"
            >
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
