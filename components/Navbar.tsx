import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-2">
      <div id="left">
        <Image src={"/logo.png"} width={100} height={100} />
      </div>
      <div
        id="right"
        className="flex flex-row gap-10 items-center text-sm font-bold bg-blue-50 text-blue-500 p-3 rounded-xl"
      >
        <a href="">Kurset</a>
        <a href="">Rreth Nesh</a>
        <a href="">Blog</a>
      </div>
    </div>
  );
};
