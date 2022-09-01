import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center fixed top-0 z-50 w-5/6 mt-10 px-2 bg-white rounded-xl bg-opacity-80 backdrop-blur-lg">
      <div id="left">
        <Link href="/">
          <button className="flex flex-row gap-2 items-center outline-none focus:outline-2 focus:outline-blue-100 rounded-xl px-2">
            <Image src={"/logo.png"} width={70} height={70} />
            <div className="font-light">HI TECH GENERATION</div>
          </button>
        </Link>
      </div>
      <div
        id="right"
        className="flex flex-row gap-10 items-center text-sm font-bold bg-blue-50 text-blue-500 p-3 rounded-xl"
      >
        <a
          className="border-2 border-transparent px-2 py-1 rounded-full hover:border-blue-400 focus:outline-blue-400 focus:bg-blue-100"
          href="#kurset"
          onClick={(e) => {
            const kurset = document.getElementById("kurset");
            e.preventDefault();
            kurset?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Kurset
        </a>
        <a
          className="border-2 border-transparent px-2 py-1 rounded-full hover:border-blue-400 focus:outline-blue-400 focus:bg-blue-100"
          href="#rrethnesh"
          onClick={(e) => {
            const kurset = document.getElementById("kurset");
            e.preventDefault();
            kurset?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Rreth Nesh
        </a>

        <Link href="/blog">
          <a className="border-2 border-transparent px-2 py-1 rounded-full hover:border-blue-400 focus:outline-blue-400 focus:bg-blue-100">
            Blog
          </a>
        </Link>
      </div>
    </div>
  );
};
