import { Combobox, Dialog, Transition } from "@headlessui/react";
import type { NextPage } from "next";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { SiScratch, SiAdobe } from "react-icons/si";
import { FaPython, FaRobot } from "react-icons/fa";
import { GiSmart } from "react-icons/gi";
import { useForm } from "react-hook-form";
import {
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiFillPhone,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { MdMail } from "react-icons/md";

const KursetGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-10">
      <a href="#scratch">
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
      </a>
      <a href="#python">
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
      </a>
      <a href="#robotike">
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
      </a>
      <a href="#design">
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
      </a>
      <a href="#sipermarresit">
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
      </a>
    </div>
  );
};

const Welcome = ({ openModal }: { openModal: any }) => {
  return (
    <div className="grid grid-cols-1 gap-10 mt-20">
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

const kurset = [
  "Kodim me Scratch",
  "Kodim me Python",
  "Robotike",
  "Grafik Dizajn dhe Fotografi",
  "Sipërmarrësit e Vegjël",
];

const PopUp = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [selected, setSelected] = useState(kurset[0]);
  const [query, setQuery] = useState("");
  const filteredKurse =
    query === ""
      ? kurset
      : kurset.filter((kurs) =>
          kurs
            .toLocaleLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Transition show={isOpen}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                  className="text-lg md:text-xl font-medium leading-6 text-gray-900"
                >
                  Forma e rregjistrimit
                </Dialog.Title>
                <div className="text-sm text-gray-600 mt-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3 items-center w-full max-h-96 overflow-x-hidden overflow-y-auto">
                      <label htmlFor="emrifemijes" className="w-full ml-4">
                        Emri i fëmijës
                      </label>
                      <input
                        type="text"
                        className={`w-full outline-none foucs:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500`}
                        {...register("emri_femijes")}
                        placeholder="Emri i fëmijës"
                      />
                      <label htmlFor="mbieemrifemijes" className="w-full ml-4">
                        Mbiemri i fëmijës
                      </label>
                      <input
                        type="text"
                        className={`w-full outline-none foucs:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500`}
                        {...register("mbiemri_femijes")}
                        placeholder="Mbiemri i fëmijës"
                      />
                      <label htmlFor="moshafemijes" className="w-full ml-4">
                        Mosha e fëmijës
                      </label>
                      <input
                        type="text"
                        className={`w-full outline-none foucs:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500`}
                        {...register("mosha_femijes")}
                        placeholder="Mosha e fëmijës"
                      />
                      <label htmlFor="kursi" className="w-full ml-4">
                        Kursi
                      </label>
                      <Combobox value={selected} onChange={setSelected}>
                        <div className="ring-2 ring-blue-200 rounded-full w-2/3 flex flex-row">
                          <Combobox.Input
                            id="kursi"
                            {...register("kursi")}
                            className="outline-none focus:text-blue-500 rounded-full w-full px-4 py-1 text-gray-700"
                            displayValue={(kurs: string) => kurs}
                            onChange={(e) => setQuery(e.target.value)}
                          />
                          <Combobox.Button className="px-2 text-blue-500 bg-opacity-0">
                            <AiOutlineArrowDown />
                          </Combobox.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          afterLeave={() => setQuery("")}
                        >
                          <div className="relative">
                            <Combobox.Options className="absolute w-60 -left-28 top-0 bg-blue-50 border-2 border-blue-100 p-4 rounded-lg backdrop-blur-lg bg-opacity-50">
                              {filteredKurse.length === 0 && query !== "" ? (
                                <div className="text-sm text-rose-500 font-medium">
                                  Nuk u gjend një kurs i tillë.
                                </div>
                              ) : (
                                filteredKurse.map((kurs, index) => (
                                  <Combobox.Option key={index} value={kurs}>
                                    {({ selected, active }) => (
                                      <div
                                        className={`
                                    ${
                                      active && "bg-blue-400 text-white"
                                    } py-2 px-2 text-center rounded-lg
                                    ${selected && "bg-gray-400 text-gray-800"}
                                  `}
                                      >
                                        {kurs}
                                      </div>
                                    )}
                                  </Combobox.Option>
                                ))
                              )}
                            </Combobox.Options>
                          </div>
                        </Transition>
                      </Combobox>
                      <label htmlFor="emriprindit" className="w-full ml-4">
                        Emri i prindit
                      </label>
                      <input
                        type="text"
                        className={`w-full outline-none foucs:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500`}
                        {...register("emri_prindit")}
                        placeholder="Emri i prindit"
                      />
                      <label htmlFor="mbiemriprindit" className="w-full ml-4">
                        Mbiemri i prindit
                      </label>
                      <input
                        type="text"
                        className={`w-full outline-none foucs:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500`}
                        {...register("mbiemri_prindit")}
                        placeholder="Mbiemri i prindit"
                      />
                      <label htmlFor="cel" className="w-full ml-4">
                        Numri i telefonit
                      </label>
                      <input
                        type="text"
                        {...register("telefoni")}
                        className={`w-full outline-none foucs:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500`}
                      />
                      <label htmlFor="email" className="w-full ml-4">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`w-full outline-none foucs:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500`}
                        {...register("email")}
                        placeholder="E-mail"
                      />
                      <button
                        type="submit"
                        className="bg-red-500 text-white w-full py-1 rounded-full font-medium my-2 hover:bg-red-600"
                      >
                        Regjistrohu
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mt-2">
                  <button
                    type="button"
                    className="inline-flex gap-2 items-center text-gray-500 bg-gray-100 rounded-xl py-1 px-2 hover:shadow-md"
                    onClick={closeModal}
                  >
                    <AiFillCloseCircle />
                    <span>Mbyll</span>
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
      <section id="kurset" className="absolute -top-24" />
      <div className="text-md md:text-lg text-gray-700 ">
        <div className="text-2xl md:text-4xl text-center font-bold mt-4 text-gray-800">
          Kurset
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10  gap-4">
          <div className="relative bg-white rounded-xl p-4 shadow-lg border-2 border-gray-100">
            <section id="scratch" className="absolute -top-24" />
            <div className="flex flex-col gap-4">
              <div className="text-lg md:text-xl font-medium text-gray-800">
                Kodimi
              </div>
              <div className="flex flex-col gap-2 items-start">
                <div className="w-1/2">Kodimi Junior</div>
                <div className="">
                  Në këtë kurs mësojmë të kodojmë me programin scratch dhe
                  njihemi me Python. Scratch është një program lehtësisht i
                  aksesueshëm dhe i krijuar posaҫërisht për fëmijët. Përmes tij
                  programimi bëhet më i kuptueshëm dhe argëtues duke qënë se
                  mësojmë përmes imazheve, zhurmave e veprimeve vizuale. Gjatë
                  muajit të fundit të kursit fëmijët mësojnë bazat e Python,
                  gjuhë programimi përdorur gjerësisht në të gjithë botën.
                </div>
              </div>
              <div className="">
                Kodimi i ndihmon fëmijët të zhvillojnë aftësitë
                problem-zgjidhëse, të menduarin kritik, të përmirësojnë
                komunikimin dhe krijimtarinë si dhe të aftësohen përmes punës në
                grup.
              </div>
              <div className="font-medium text-gray-800">
                Për tu regjistruar fëmija duhet:
              </div>
              <div>
                <ul>
                  <li className="flex flex-row items-center gap-2">
                    <AiFillCheckCircle className="text-green-500 " />
                    <span>Të jetë 7-12 vjeҫ</span>
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <AiFillCheckCircle className="text-green-500 " />
                    <span>Të dijë të lexojë e të shkruajë</span>
                  </li>
                </ul>
                <div className="mt-2">
                  Kursi organizohet në tre module prej 8 orësh mësimore, që
                  zhvillohen dy herë në javë me seanca 60 minutëshe.
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-xl p-4 shadow-lg border-2 border-gray-100">
            <section id="python" className="absolute -top-24" />
            <div className="flex flex-col gap-4">
              <div className="text-lg md:text-xl font-medium text-gray-800">
                Kodimi
              </div>
              <div>
                <div>Python ose HTML (T.B.D)</div>
                <div className="mt-2">
                  Në këtë kurs mësojmë të programojmë me Python. Gjuhë e
                  përdorur gjerësisht nga profesionistë programimi në të gjithë
                  botën. Kursi zhvillohet dy herë në javë, në tre module prej 8
                  orësh secili. Programimi i ndihmon fëmijët të rrisin
                  përqendrimin dhe të përmirësojnë përformancën akademike.
                  Kodimi i mëson atyre që ta copëzojnë një problem në pjesë më
                  të vogla dh të punojnë me secilën prej pjesëve, ai zhvillon të
                  menduarin kritik.
                </div>
              </div>
              <div className="font-medium text-gray-800">
                Për tu regjistruar fëmija duhet:
              </div>
              <div>
                <ul>
                  <li className="flex flex-row items-center gap-2">
                    <AiFillCheckCircle className="text-green-500 " />
                    <span>Të jetë 10-14 vjeҫ</span>
                  </li>
                  <li className="flex flex-row items-center gap-2">
                    <AiFillCheckCircle className="text-green-500 " />
                    <span>Të ketë njohuri në gjuhën angleze </span>
                  </li>
                </ul>
                <div className="mt-2">
                  Kursi organizohet në tre module prej 8 orësh mësimore, që
                  zhvillohen dy herë në javë me seanca 60 minutëshe.
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-xl p-4 shadow-lg border-2 border-gray-100">
            <section id="robotike" className="absolute -top-24" />
            <div className="flex flex-col gap-4">
              <div className="text-lg md:text-xl font-medium text-gray-800">
                Robotika
              </div>
              <div>
                Mund të tingëllojë si një sfidë e madhe të mësuarit të Robotikës
                në një moshë të vogël, por në të vërtetë përveҫ se është shumë
                argëtuese, ndihmon në zhvillimin e motorikës fine dhe
                koordinimit dorë-sy, në përmirësimin e aftësive
                problem-zgjidhësen si dhe të menduarin kreativ.
              </div>
              <div>
                Në kursin e robotikës fëmijët asimilojnë koncepte shkencore të
                fizikës dhe elektronikës përmes ndërtimit të projektve
                interesante. Ata përmirësojnë punën në grup dhe komunikimin
                gjatë realizimit të ҫdo projekti. Gjithashtu në modulin e trete
                të kursit mësojmë krijimin me Arduino, pjesët robotike që
                fëmijët realizojnë kryejnë veprime të cilat i programojmë përmes
                kodeve.
              </div>
              <div>Robotika i përgatit fëmijët për të ardhmen.</div>
              <div className="font-medium text-gray-800">
                Për tu regjistruar fëmija duhet:
              </div>
              <div>
                <ul>
                  <li className="flex flex-row items-center gap-2">
                    <AiFillCheckCircle className="text-green-500" />
                    <span>Të jetë 7-12 vjeҫ</span>
                  </li>
                </ul>
                <div className="mt-2">
                  Kursi organizohet në katër module prej 8 orësh mësimore, që
                  zhvillohen dy herë në javë me seanca 60 minutëshe.
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-xl p-4 shadow-lg border-2 border-gray-100">
            <section id="design" className="absolute -top-24" />
            <div className="flex flex-col gap-4">
              <div className="text-lg md:text-xl font-medium text-gray-800">
                Grafik Dizajn & fotografia
              </div>
              <div>
                Ҫdo fëmijë ka një artist brenda vetes, dhe ҫdo prind me një
                fëmijë që pëlqen artin e di rëndësinë e stimulimit të mendjes
                dhe kreativitetit të tyre.
              </div>
              <div>
                Gjatë ketij kursi fëmijët mësojmë përdormin e dy programeve më
                të njohura në botën e dizajnit, photoshop dhe illustrator si dhe
                marrin njohuri mbi fotografinë. Kursi nxit kreativitetin tek
                femijët, rrit përqendrimin dhe ndihmon në të shprehurin e
                emocioneve.
              </div>
              <div className="font-medium text-gray-800">
                Për tu regjistruar fëmija duhet:
              </div>
              <div>
                <ul>
                  <li className="flex flex-row items-center gap-2">
                    <AiFillCheckCircle className="text-green-500" />
                    <span>Të jetë 7-12 vjeҫ</span>
                  </li>
                </ul>
                <div className="mt-2">
                  Kursi organizohet në katër module prej 8 orësh mësimore, që
                  zhvillohen dy herë në javë me seanca 60 minutëshe.
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-white rounded-xl p-4 shadow-lg border-2 border-gray-100">
            <section id="sipermarresit" className="absolute -top-24" />
            <div className="flex flex-col gap-4">
              <div className="text-lg md:text-xl font-medium text-gray-800">
                Sipërmarrësit e vegjël
              </div>
              <div>
                Të mësuarit e sipërmarrjes në një moshë të vogël sjell një sërë
                benefitesh për fëmijët. Ata zhvillojnë aftësi që janq të
                nevojshme gjatë githë jetës si psh:
              </div>
              <div>
                Bashkëpinimin dhe punën në grup Të folurin në public dhe
                prezantimin Të mbledhin dhe të analizojnë të dhëna Si të
                përdorin median sociale si mjet dobi-prurës Si të zgjidhin
                probleme reale dhe komplekse Si të përdorin kuriozitetin dhe
                kreativitetin për tu përballur me situata të vështira
              </div>
              <div>
                Kursi kultivon vendosmërinë, fokusin, inisiativën, dhe ndihmon
                në brendësimin e parimeve kryesore të biznesit. Ai ndihmon
                fëmijët të përvetësojnë aftësi të menaxhimit të parave, dhe të
                ndihen të aftë e të kenë vetëbesim. Gjithashtu fëmijët mësojnë
                përdorimin e paketës ofiҫe kaq të rëndësishme që në vitet e para
                të shkollimit.
              </div>
              <div className="font-medium text-gray-800">
                Për tu regjistruar fëmija duhet:
              </div>
              <div>
                <ul>
                  <li className="flex flex-row items-center gap-2">
                    <AiFillCheckCircle className="text-green-500" />
                    <span>Të jetë 7-12 vjeҫ</span>
                  </li>
                </ul>
                <div className="mt-2">
                  Kursi organizohet në katër module prej 8 orësh mësimore, që
                  zhvillohen dy herë në javë me seanca 60 minutëshe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RrethNesh = () => {
  return (
    <div className="relative">
      <section id="rrethnesh" className="absolute -top-24" />
      <div className="text-md md:text-lg text-gray-700">
        <div className="text-2xl md:text-4xl text-center font-bold mt-4 text-gray-800">
          Rreth Nesh
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl md:text-2xl bg-gradient-to-r from-fuchsia-500 to-emerald-500 w-fit bg-clip-text font-bold text-transparent mt-8">
            Mirëse vini në Hitechgeneration!
          </div>
          <div>
            Ne ofrojmë një shumëllojshmëri alternativash argëtuese për fëmijë,
            që frymëzojnë kreativitetin pas shkollës e i ndihmon ata të mësojnë
            rreth teknologjisë. Duke marrë pjesë në kurset dhe aktivitetet tona,
            fëmijët dhe të rinjtë janë në gjendje të zbulojnë dhe zotërojnë
            teknologji të reja. Ne u mësojmë bazat e shkencave kompjuterike,
            kodimin, robotikën, grafik dizajn dhe fotografinë, sipërmarrjen dhe
            biznesin, si dhe një sërë lëndësh të tjera të lidhura me shkencën në
            një mjedis argëtues dhe komod.
          </div>
          <div>
            Përveç mësimit për teknologjinë, studentët tanë përfundojnë duke
            krijuar miqësi të qëndrueshme dhe duke ndërtuar vetëvlerësim. Ata
            bashkëpunojnë në projekte të mrekullueshme, të cilat i ndajnë me
            shokët e klasës, miqtë dhe komunitetin.
          </div>
          <div>
            Pra, lërini fëmijët tuaj të krijojnë dhe të shprehen, lërini të
            mësojnë të kodojnë dhe lërini të kodojnë për të mësuar. Regjistroni
            ato në një nga kurset tona.
          </div>
          <div>
            Informacionet për kurset i gjeni ne seksionin “Kurset” si dhe ju
            ftojmë të na ndiqni ne Instagram për ҫdo lajm dhe komunikim të
            menjehërshëm me ne. (click link direct te faqja e insta)
          </div>
          <div>
            Kurset zhvillohen në ambiente shumë komode të ndodhura në qendër të
            Tiranës, në godinë lehtësisht të aksesueshme. Klasat kanë një numër
            të vogël nxënësish, jo më shumë se 10 nxënës për instruktor. Cdo
            nxënës ka në dispozicion një lap top dhe/ose materialet e robotikës
            për realizimin e projekteve, gjatë orës së kursit.
          </div>
          <div>
            Kurset zhvillohen nga instruktorë ekspertë në fushën e teknologjisë
            dhe pedagogjisë, profesionistë dhe të dashur më fëmijët, duke
            ndihmuar kështu në krijimin e një atmosfere të këndshme të mësuari.
          </div>
        </div>
      </div>
    </div>
  );
};

export const Kontakt = () => {
  return (
    <div className="mt-10 h-fit flex flex-col md:flex-row gap-10 items-center justify-between p-10 bg-rose-500 text-white">
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
const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <div className="">
        <Welcome openModal={openModal} />
      </div>
      <PopUp isOpen={isOpen} closeModal={closeModal} />
      <div className="grid grid-cols-1 gap-10 top-10">
        <Kurset />
        <RrethNesh />
      </div>
      <Kontakt />
    </div>
  );
};

export default Home;
