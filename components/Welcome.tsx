import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { KursetGrid } from "./KursetGrid";

export const Welcome = ({
  openModal,
  registered,
  setRegistered,
}: {
  openModal: any;
  registered: boolean;
  setRegistered: any;
}) => {
  useEffect(() => {
    if (registered) {
      setTimeout(() => {
        setRegistered(false);
      }, 5000);
    }
  }, [registered]);

  return (
    <div className="grid grid-cols-1 gap-10 mt-20">
      <AnimatePresence>
        {registered && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="fixed z-30 left-10 bottom-10 flex flex-row gap-4 items-center p-8 font-bold text-lg rounded-lg bg-green-500 text-white "
          >
            <AiFillCheckCircle size={24} />
            <span>Regjistrimi u krye me sukses!</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="text-center text-2xl md:text-4xl font-medium tracking-tight">
        Aftësi, Imagjinatë, Kreativitet.
      </div>
      <div className="w-2/3 md:w-fit mx-auto flex flex-row gap-10">
        <motion.div
          className="div"
          animate={{ x: [0, 100, 0, -70, 0] }}
          transition={{
            ease: "easeInOut",
            delay: 2,
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Image src="/SVG/robot1.svg" width={100} height={100} />
        </motion.div>
        <motion.div
          className="div"
          animate={{ x: [0, 20, 0, -50, 0] }}
          transition={{
            ease: "easeInOut",
            delay: 2,
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Image src="/SVG/robot2.svg" width={100} height={100} />
        </motion.div>
        <motion.div
          className="div"
          animate={{ x: [0, -40, 0, 60, 0] }}
          transition={{
            ease: "easeInOut",
            delay: 2,
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Image src="/SVG/robot3.svg" width={100} height={100} />
        </motion.div>
        <motion.div
          className="div"
          animate={{ x: [0, -100, 0, 100, 0] }}
          transition={{
            ease: "easeInOut",
            delay: 2,
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Image src="/SVG/robot4.svg" width={100} height={100} />
        </motion.div>
      </div>
      <div className="absolute -z-40 w-11/12 md:w-3/4 h-1/3 md:h-3/4 top-1/2">
        <Image src="/bg.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={openModal}
          className="w-fit mx-auto px-3 py-2 rounded-full bg-rose-500 text-white font-bold hover:shadow-xl transition duration-500 focus:outline-rose-800 focus:outline-4"
        >
          Regjistrohu
        </button>
        {/* <div className="absolute -z-20 top-80 left-0">
          <Image src="/bg.avif" width={1600} height={1000} />
        </div> */}
        <div className="bg-white w-5/6 md:w-1/2 mx-auto backdrop-blur-lg bg-opacity-50 drop-shadow-lg p-4 rounded-lg flex flex-col gap-4">
          <div className="text-lg font-medium text-neutral-800">
            <div>
              Fëmijës tuaj i pëlqen të eksplorojë dhe të krijojë? Është natyrë
              kërkuese dhe tërhiqet nga teknologjia?
            </div>
            <div>Atëherë regjistroje në një nga programet tona!</div>
          </div>
          <div className="text-sm text-neutral-800">
            Krijuar posaҫërisht për fëmijë të moshës 7-14 vjeҫ, me qëllimin për
            të nxitur kreativitetin e tyre duke i ndihmuar të ndihen komodë me
            kompjuterët dhe teknologjinë.
          </div>
        </div>
        <KursetGrid />
      </div>
      {/* <div className="bg-sky-200 text-center">Animations</div> */}
    </div>
  );
};
