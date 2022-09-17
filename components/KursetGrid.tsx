import Link from "next/link";
import { motion } from "framer-motion";
import { SiAdobe, SiScratch } from "react-icons/si";
import { FaPython, FaRobot } from "react-icons/fa";
import { GiSmart } from "react-icons/gi";

export const KursetGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-10 z-20">
      <Link href="/#scratch">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative bg-yellow-300 p-10 h-48 rounded-xl cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-amber-900 text-lg md:text-xl font-bold text-center mb-4">
              Kodim me Scratch
            </div>
            <div className="text-amber-700">
              <SiScratch size={50} className="w-full" />
            </div>
          </div>
        </motion.div>
      </Link>
      <Link href="/#python">
        <motion.div
          className="relative bg-green-500 p-10 h-48 rounded-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-emerald-50 text-lg md:text-xl font-bold text-center mb-4">
              Kodim me Python
            </div>
            <div className="text-emerald-100">
              <FaPython size={50} className="w-full" />
            </div>
          </div>
        </motion.div>
      </Link>
      <Link href="/#robotike">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative bg-rose-500 p-10 rounded-xl h-48 cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-red-50 text-lg md:text-xl font-bold text-center mb-4">
              Robotikë
            </div>
            <div className="text-red-100">
              <FaRobot size={50} className="w-full" />
            </div>
          </div>
        </motion.div>
      </Link>
      <Link href="/#design">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative bg-blue-500 p-10 rounded-xl h-48 cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-yellow-50 text-lg md:text-xl font-bold text-center mb-4">
              Grafik Dizajn dhe Fotografi
            </div>
            <div className="text-yellow-100">
              <SiAdobe size={50} className="w-full" />
            </div>
          </div>
        </motion.div>
      </Link>
      <Link href="/#sipermarresit">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative bg-fuchsia-500 p-10 rounded-xl h-48 cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-pink-50 text-lg md:text-xl font-bold text-center mb-4">
              Sipërmarrësit e Vegjël
            </div>
            <div className="text-pink-100">
              <GiSmart size={50} className="w-full" />
            </div>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};
