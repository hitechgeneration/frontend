import { MdEmail } from "react-icons/md";
import { AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { useEffect, useState } from "react";
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
      <div className="relative w-fit flex flex-row gap-4 items-center ml-auto mr-4 md:mr-10 p-2 text-gray-100 bg-rose-500">
        <a
          href="mailto:hitechgen2021@gmail.com"
          className="outline-none hover:text-yellow-100 focus-visible:text-yellow-200"
        >
          <MdEmail />
        </a>
        <a
          href="tel:+355695524998"
          className="outline-none hover:text-yellow-100 focus-visible:text-yellow-200"
        >
          <AiFillPhone />
        </a>
        <a
          href="https://www.instagram.com/hitechgeneration"
          target="__blank"
          className="outline-none hover:text-yellow-100 focus-visible:text-yellow-200"
        >
          <AiFillInstagram />
        </a>
        <a
          href="https://www.facebook.com/hitechgen"
          target="__blank"
          className="outline-none hover:text-yellow-100 focus-visible:text-yellow-200"
        >
          <AiFillFacebook />
        </a>
      </div>
    </div>
  );
};
