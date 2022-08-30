import { Dialog, Transition } from "@headlessui/react";
import type { NextPage } from "next";
import { Fragment, useState } from "react";

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

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
        <button
          onClick={openModal}
          className="w-fit px-3 py-2 rounded-full bg-rose-500 text-white font-bold hover:shadow-xl transition duration-500 focus:outline-rose-800 focus:outline-4"
        >
          Rregjistrohu
        </button>
        <div className="text-sm text-neutral-800">
          Krijuar posaҫërisht për fëmijë të moshës 7-14 vjeҫ, me qëllimin për të
          nxitur kreativitetin e tyre duke i ndihmuar të ndihen komodë me
          kompjuterët dhe teknologjinë.
        </div>
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
                        <input
                          type="text"
                          className="w-full"
                          placeholder="Kursi"
                        />
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
                        <input
                          type="text"
                          className="w-full"
                          placeholder="Cel"
                        />
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
