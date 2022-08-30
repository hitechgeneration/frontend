import { MdEmail } from "react-icons/md";
import { AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
export const Header = () => {
  return (
    <div className="bg-neutral-900">
      <div className="w-fit flex flex-row gap-4 items-center ml-auto mr-10 p-2 text-gray-100 bg-neutral-900">
        <button>
          <MdEmail />
        </button>
        <button>
          <AiFillPhone />
        </button>
        <button>
          <AiFillInstagram />
        </button>
        <button>
          <AiFillFacebook />
        </button>
      </div>
    </div>
  );
};
