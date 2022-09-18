import { AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";

export const Kontakt = () => {
  return (
    <div className="mt-10 mb-10 h-fit flex flex-col md:flex-row gap-10 items-center justify-between p-10 bg-rose-500 text-white shadow-lg shadow-yellow-400">
      <div>
        <div className="text-lg md:text-xl font-bold">Na kontaktoni.</div>
        <div>
          <ul className="text-sm md:text-md flex flex-col gap-4 mt-10">
            <li>
              <a
                href="mailto:hitechgen2021@gmail.com"
                className="flex flex-row gap-4 items-center hover:text-amber-200 outline-none"
              >
                <MdMail />
                <div>E-mail: hitechgen2021@gmail.com</div>
              </a>
            </li>
            <li>
              <a
                href="tel:+355695524998"
                className="flex flex-row gap-4 items-center hover:text-amber-200 outline-none"
              >
                <AiFillPhone />
                <div>Telefon: +355695524998</div>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hitechgeneration"
                target="__blank"
                className="flex flex-row gap-4 items-center hover:text-amber-200 outline-none"
              >
                <AiFillInstagram />
                <div>Instagram: @hitechgeneration</div>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/hitechgen"
                target="__blank"
                className="flex flex-row gap-4 items-center hover:text-amber-200 outline-none"
              >
                <AiFillFacebook />
                <div>Facebook: @hitechgen</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full">
        <div className="w-full h-full">
          <iframe
            className="rounded-lg"
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Str8RJC+3GJ,%20Rruga%20e%20Barrikadave,%20Tirana,%20Albania+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
      </div>
    </div>
  );
};
