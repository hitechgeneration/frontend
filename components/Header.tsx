import { MdEmail } from "react-icons/md";
import { AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export const Header = () => {
  const [phoneCopy, setPhoneCopy] = useState(false);

  useEffect(() => {
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
        <a href="mailto:hitechgen2021@gmail.com">
          <MdEmail />
        </a>
        <a href="tel:+355695524998">
          <AiFillPhone />
        </a>
        <a href="https://www.instagram.com/hitechgeneration" target="__blank">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/hitechgen" target="__blank">
          <AiFillFacebook />
        </a>
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
