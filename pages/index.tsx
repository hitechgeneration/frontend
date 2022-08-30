import type { NextPage } from "next";

const Welcome = () => {
  return (
    <div className="grid grid-cols-2 gap-10 mt-20">
      <div className="flex flex-col gap-4">
        <div className="w-52 text-5xl font-bold">
          Aftësi, Imagjinatë, Kreativitet.
        </div>
        <div className="text-lg font-medium text-neutral-800">
          <div>
            Fëmijës tuaj i pëlqen të eksplorojë dhe të krijojë? Është natyrë
            kërkuese dhe tërhiqet nga teknologjia?
          </div>
          <div>Atëherë regjistroje në një nga programet tona!</div>
        </div>
        <button className="w-fit px-3 py-2 rounded-full bg-rose-500 text-white font-bold hover:shadow-xl transition duration-500 focus:outline-rose-800 focus:outline-4">
          Rregjistrohu
        </button>
        <div className="text-sm text-neutral-800">
          Krijuar posaҫërisht për fëmijë të moshës 7-14 vjeҫ, me qëllimin për të
          nxitur kreativitetin e tyre duke i ndihmuar të ndihen komodë me
          kompjuterët dhe teknologjinë.
        </div>
      </div>
      <div className="bg-sky-200 text-center">Animations</div>
    </div>
  );
};
const Home: NextPage = () => {
  return (
    <div>
      <Welcome />
    </div>
  );
};

export default Home;
