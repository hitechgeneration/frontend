import { MdEmail } from "react-icons/md";
import { AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export const Header = () => {
  const [emailCopy, setEmailCopy] = useState(false);
  const [phoneCopy, setPhoneCopy] = useState(false);

  useEffect(() => {
    setPhoneCopy(false);
    if (emailCopy) {
      navigator.clipboard.writeText("hitechgen2021@gmail.com");
      setTimeout(() => {
        setEmailCopy(false);
      }, 2500);
    }
  }, [emailCopy]);

  useEffect(() => {
    setEmailCopy(false);
    if (phoneCopy) {
      navigator.clipboard.writeText("+355695524998");
      setTimeout(() => {
        setPhoneCopy(false);
      }, 2500);
    }
  }, [phoneCopy]);

  return (
    <div className="bg-rose-500">
      <div className="relative w-fit flex flex-row gap-4 items-center ml-auto mr-10 p-2 text-gray-100 bg-rose-500">
        <button onClick={() => setEmailCopy(true)}>
          <MdEmail />
        </button>
        <button onClick={() => setPhoneCopy(true)}>
          <AiFillPhone />
        </button>
        <a href="https://www.instagram.com/hitechgeneration" target="__blank">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/hitechgen" target="__blank">
          <AiFillFacebook />
        </a>
        <AnimatePresence>
          {emailCopy && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -left-32 text-white font-medium"
            >
              Email u kopjua!
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {phoneCopy && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -left-36 text-white font-medium"
            >
              Telefoni u kopjua!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
