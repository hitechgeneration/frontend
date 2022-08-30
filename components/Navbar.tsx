import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-2">
      <div id="left">
        <Image src={"/logo.png"} width={80} height={80} />
      </div>
      <div id="right" className="flex flex-row gap-10 items-center text-sm">
        <a href="">Kurset</a>
        <a href="">Rreth Nesh</a>
        <a href="">Blog</a>
      </div>
    </div>
  );
};
