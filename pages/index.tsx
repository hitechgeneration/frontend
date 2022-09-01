import { Dialog, Transition } from "@headlessui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Welcome = ({ openModal }: { openModal: any }) => {
  return (
    <div className="grid grid-cols-1 gap-10 mt-40">
      <div className="w-fit mx-auto  flex flex-row gap-10">
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
      <div className="absolute -z-40 w-3/4 h-3/4 top-1/2">
        <Image src="/bg.jpg" layout="fill" objectFit="contain" />
      </div>
      <div className="flex flex-col gap-4">
        {/* <div className="absolute left-1/4  top-20">
            <Image src={"/logo.png"} width={200} height={200} />
          </div> */}
        <div className="text-center text-4xl font-bold">
          Aftësi, Imagjinatë, Kreativitet.
        </div>
        <button
          onClick={openModal}
          className="w-fit mx-auto px-3 py-2 rounded-full bg-rose-500 text-white font-bold hover:shadow-xl transition duration-500 focus:outline-rose-800 focus:outline-4"
        >
          Rregjistrohu
        </button>
        {/* <div className="absolute -z-20 top-80 left-0">
          <Image src="/bg.avif" width={1600} height={1000} />
        </div> */}
        <div className="bg-white w-1/2 mx-auto backdrop-blur-lg bg-opacity-30 drop-shadow-lg p-4 rounded-lg flex flex-col gap-4">
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
      </div>
      {/* <div className="bg-sky-200 text-center">Animations</div> */}
    </div>
  );
};

const PopUp = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: any;
}) => {
  return (
    <Transition show={isOpen}>
      <Dialog as="div" className="relative z-20" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Forma e rregjistrimit
                </Dialog.Title>
                <div className="text-sm text-gray-600">
                  <form
                    action=""
                    className="flex flex-col gap-4 items-center w-full"
                  >
                    <input
                      type="text"
                      className="w-full"
                      placeholder="Emri i fëmijës"
                    />
                    <input
                      type="text"
                      className="w-full"
                      placeholder="Mbiemri i fëmijës"
                    />
                    <input
                      type="text"
                      className="w-full"
                      placeholder="Mosha e fëmijës"
                    />
                    <input type="text" className="w-full" placeholder="Kursi" />
                    <input
                      type="text"
                      className="w-full"
                      placeholder="Emri i prindit"
                    />
                    <input
                      type="text"
                      className="w-full"
                      placeholder="Mbiemri i prindit"
                    />
                    <input type="text" className="w-full" placeholder="Cel" />
                    <input
                      type="text"
                      className="w-full"
                      placeholder="E-mail"
                    />
                  </form>
                </div>
                <div>
                  <button type="button" onClick={closeModal}>
                    Mbarova
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const Kurset = () => {
  return (
    <div className="relative">
      <section id="kurset" className="absolute -top-36" />
      <div className="text-4xl font-bold">Kurset</div>
    </div>
  );
};

const RrethNesh = () => {
  return (
    <div className="relative">
      <section id="rrethnesh" className="absolute -top-36" />
      <div className="text-4xl font-bold">Rreth Nesh</div>
    </div>
  );
};

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const router = useRouter();

  useEffect(() => {}, [router]);

  return (
    <div>
      <div className="h-screen">
        <Welcome openModal={openModal} />
      </div>
      <PopUp isOpen={isOpen} closeModal={closeModal} />
      <div className="grid grid-cols-1 gap-10 top-10">
        <Kurset />
        <RrethNesh />
      </div>
    </div>
  );
};

export default Home;
