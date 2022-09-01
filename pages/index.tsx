import { Dialog, Transition } from "@headlessui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { SiScratch, SiAdobe } from "react-icons/si";
import { FaPython, FaRobot } from "react-icons/fa";
import { GiSmart } from "react-icons/gi";

const Welcome = ({ openModal }: { openModal: any }) => {
  return (
    <div className="grid grid-cols-1 gap-10 mt-20">
      <div className="text-center text-4xl font-medium tracking-tight">
        Aftësi, Imagjinatë, Kreativitet.
      </div>
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
      <div className="absolute -z-40 w-screen md:w-3/4 h-1/3 md:h-3/4 top-1/2">
        <Image src="/bg.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={openModal}
          className="w-fit mx-auto px-3 py-2 rounded-full bg-rose-500 text-white font-bold hover:shadow-xl transition duration-500 focus:outline-rose-800 focus:outline-4"
        >
          Rregjistrohu
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
        <div className="grid grid-cols-5 gap-4 my-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-300 p-10 rounded-xl cursor-pointer"
          >
            <div className="text-amber-900 text-xl font-bold text-center mb-4">
              Kodim me Scratch
            </div>
            <div className="text-amber-700">
              <SiScratch size={50} className="w-full" />
            </div>
          </motion.div>
          <motion.div
            className="bg-green-500 p-10 rounded-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-emerald-50 text-xl font-bold text-center mb-4">
              Kodim me Python
            </div>
            <div className="text-emerald-100">
              <FaPython size={50} className="w-full" />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-rose-500 p-10 rounded-xl cursor-pointer"
          >
            <div className="text-red-50 text-xl font-bold text-center mb-4">
              Robotikë
            </div>
            <div className="text-red-100">
              <FaRobot size={50} className="w-full" />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-500 p-10 rounded-xl cursor-pointer"
          >
            <div className="text-yellow-50 text-xl font-bold text-center mb-4">
              Grafik Dizajn dhe Fotografi
            </div>
            <div className="text-yellow-100">
              <SiAdobe size={50} className="w-full" />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-fuchsia-500 p-10 rounded-xl cursor-pointer"
          >
            <div className="text-pink-50 text-xl font-bold text-center mb-4">
              Sipërmarrësit e Vegjël
            </div>
            <div className="text-pink-100">
              <GiSmart size={50} className="w-full" />
            </div>
          </motion.div>
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
      <div>
        <div className="text-4xl font-bold">Kurset</div>
        <div>
          <div>Kodimi</div>
          <div>
            Kodimi Junior - në këtë kurs mësojmë të kodojmë me programin scratch
            dhe njihemi me Python. Scratch është një program lehtësisht i
            aksesueshëm dhe i krijuar posaҫërisht për fëmijët. Përmes tij
            programimi bëhet më i kuptueshëm dhe argëtues duke qënë se mësojmë
            përmes imazheve, zhurmave e veprimeve vizuale. Gjatë muajit të
            fundit të kursit fëmijët mësojnë bazat e Python, gjuhë programimi
            përdorur gjerësisht në të gjithë botën.
          </div>
          <div>
            Kodimi i ndihmon fëmijët të zhvillojnë aftësitë problem-zgjidhëse,
            të menduarin kritik, të përmirësojnë komunikimin dhe krijimtarinë si
            dhe të aftësohen përmes punës në grup.
          </div>
          <div>Për tu regjistruar fëmija duhet:</div>
          <div>
            Të jetë 7-12 vjeҫ Të dijë të lexojë e të shkruajë Kursi organizohet
            në tre module prej 8 orësh mësimore, që zhvillohen dy herë në javë
            me seanca 60 minutëshe.
          </div>
          <div>
            Python ose HTML (T.B.D) - në këtë kurs mësojmë të programojmë me
            Python. Gjuhë e përdorur gjerësisht nga profesionistë programimi në
            të gjithë botën. Kursi zhvillohet dy herë në javë, në tre module
            prej 8 orësh secili. Programimi i ndihmon fëmijët të rrisin
            përqendrimin dhe të përmirësojnë përformancën akademike. Kodimi i
            mëson atyre që ta copëzojnë një problem në pjesë më të vogla dh të
            punojnë me secilën prej pjesëve, ai zhvillon të menduarin kritik.
          </div>
          <div>Për tu regjistruar fëmija duhet:</div>
          <div>
            Të jetë 10-14 vjeҫ Të ketë njohuri në gjuhën angleze Kursi
            organizohet në tre module prej 8 orësh mësimore, që zhvillohen dy
            herë në javë me seanca 60 minutëshe.
          </div>
          <div>Robotika</div>
          <div>
            Mund të tingëllojë si një sfidë e madhe të mësuarit të Robotikës në
            një moshë të vogël, por në të vërtetë përveҫ se është shumë
            argëtuese, ndihmon në zhvillimin e motorikës fine dhe koordinimit
            dorë-sy, në përmirësimin e aftësive problem-zgjidhësen si dhe të
            menduarin kreativ.
          </div>
          <div>
            Në kursin e robotikës fëmijët asimilojnë koncepte shkencore të
            fizikës dhe elektronikës përmes ndërtimit të projektve interesante.
            Ata përmirësojnë punën në grup dhe komunikimin gjatë realizimit të
            ҫdo projekti. Gjithashtu në modulin e trete të kursit mësojmë
            krijimin me Arduino, pjesët robotike që fëmijët realizojnë kryejnë
            veprime të cilat i programojmë përmes kodeve.
          </div>
          <div>Robotika i përgatit fëmijët për të ardhmen.</div>
          <div>
            Për tu regjistruar fëmija duhet: Të jetë 7-12 vjeҫ Kursi organizohet
            në katër module prej 8 orësh mësimore, që zhvillohen dy herë në javë
            me seanca 60 minutëshe.
          </div>
          <div>Grafik Dizajn & fotografia</div>
          <div>
            Ҫdo fëmijë ka një artist brenda vetes, dhe ҫdo prind me një fëmijë
            që pëlqen artin e di rëndësinë e stimulimit të mendjes dhe
            kreativitetit të tyre.
          </div>
          <div>
            Gjatë ketij kursi fëmijët mësojmë përdormin e dy programeve më të
            njohura në botën e dizajnit, photoshop dhe illustrator si dhe marrin
            njohuri mbi fotografinë. Kursi nxit kreativitetin tek femijët, rrit
            përqendrimin dhe ndihmon në të shprehurin e emocioneve.
          </div>
          <div>
            Për tu regjistruar fëmija duhet: Të jetë 7-12 vjeҫ Kursi organizohet
            në katër module prej 8 orësh mësimore, që zhvillohen dy herë në javë
            me seanca 60 minutëshe.
          </div>
          <div>Sipërmarrësit e vegjël</div>
          <div>
            Të mësuarit e sipërmarrjes në një moshë të vogël sjell një sërë
            benefitesh për fëmijët. Ata zhvillojnë aftësi që janq të nevojshme
            gjatë githë jetës si psh:
          </div>
          <div>
            Bashkëpinimin dhe punën në grup Të folurin në public dhe prezantimin
            Të mbledhin dhe të analizojnë të dhëna Si të përdorin median sociale
            si mjet dobi-prurës Si të zgjidhin probleme reale dhe komplekse Si
            të përdorin kuriozitetin dhe kreativitetin për t’u përballur me
            situata të vështira
          </div>
          <div>
            Kursi kultivon vendosmërinë, fokusin, inisiativën, dhe ndihmon në
            brendësimin e parimeve kryesore të biznesit. Ai ndihmon fëmijët të
            përvetësojnë aftësi të menaxhimit të parave, dhe të ndihen të aftë e
            të kenë vetëbesim. Gjithashtu fëmijët mësojnë përdorimin e paketës
            ofiҫe kaq të rëndësishme që në vitet e para të shkollimit.
          </div>
          <div>
            Për t’u regjistruar fëmija duhet: Të jetë 7-12 vjeҫ Kursi
            organizohet në katër module prej 8 orësh mësimore, që zhvillohen dy
            herë në javë me seanca 60 minutëshe.
          </div>
        </div>
      </div>
    </div>
  );
};

const RrethNesh = () => {
  return (
    <div className="relative">
      <section id="rrethnesh" className="absolute -top-36" />
      <div>
        <div className="text-4xl font-bold">Rreth Nesh</div>
        <div>Mirë se vini në Hitechgeneration!</div>
        <div>
          Ne ofrojmë një shumëllojshmëri alternativash argëtuese për fëmijë, që
          frymëzojnë kreativitetin pas shkollës e i ndihmon ata të mësojnë rreth
          teknologjisë. Duke marrë pjesë në kurset dhe aktivitetet tona, fëmijët
          dhe të rinjtë janë në gjendje të zbulojnë dhe zotërojnë teknologji të
          reja. Ne u mësojmë bazat e shkencave kompjuterike, kodimin, robotikën,
          grafik dizajn dhe fotografinë, sipërmarrjen dhe biznesin, si dhe një
          sërë lëndësh të tjera të lidhura me shkencën në një mjedis argëtues
          dhe komod.
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
          Tiranës, në godinë lehtësisht të aksesueshme. Klasat kanë një numër të
          vogël nxënësish, jo më shumë se 10 nxënës për instruktor. Cdo nxënës
          ka në dispozicion një lap top dhe/ose materialet e robotikës për
          realizimin e projekteve, gjatë orës së kursit.
        </div>
        <div>
          Kurset zhvillohen nga instruktorë ekspertë në fushën e teknologjisë
          dhe pedagogjisë, profesionistë dhe të dashur më fëmijët, duke ndihmuar
          kështu në krijimin e një atmosfere të këndshme të mësuari.
        </div>
      </div>
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
      <div className="">
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
