import type { NextPage } from "next";
import { useState } from "react";
import { Kontakt } from "../components/Kontakt";
import { RrethNesh } from "../components/RrethNesh";
import { Kurset } from "../components/Kurset";
import { Welcome } from "../components/Welcome";
import { PopUp } from "../components/PopUp";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [registered, setRegistered] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div className="overflow-x-hidden">
      <div className="">
        <Welcome
          openModal={openModal}
          registered={registered}
          setRegistered={setRegistered}
        />
      </div>
      <PopUp
        isOpen={isOpen}
        closeModal={closeModal}
        setRegistered={setRegistered}
      />
      <div className="grid grid-cols-1 gap-10 top-10">
        <RrethNesh />
        <Kurset />
      </div>
      <Kontakt />
    </div>
  );
};

export default Home;
