import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center sticky top-2 z-50 w-full mt-2 px-2 bg-white rounded-xl bg-opacity-90 backdrop-blur-lg border-2 border-gray-100">
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
            const kurset = document.getElementById("rrethnesh");
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
