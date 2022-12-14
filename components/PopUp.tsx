import { Combobox, Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle, AiOutlineArrowDown } from "react-icons/ai";
const kurset = [
  "Kodim me Scratch",
  "Kodim me Python",
  "Robotike",
  "Grafik Dizajn dhe Fotografi",
  "Sipërmarrësit e Vegjël",
];

export const PopUp = ({
  isOpen,
  closeModal,
  setRegistered,
}: {
  isOpen: boolean;
  closeModal: any;
  setRegistered: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const res = await fetch("/api/sendmail", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      reset();
      closeModal();
      setRegistered(true);
    }
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
                  Forma e regjistrimit
                </Dialog.Title>
                <div className="text-sm text-gray-600 mt-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-3 items-center w-full max-h-96 overflow-x-hidden overflow-y-auto">
                      <div className="w-full">
                        <label htmlFor="emrifemijes" className="ml-2">
                          Emri i fëmijës
                        </label>
                        <input
                          type="text"
                          className={`mt-1 w-full outline-none focus:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500 ${
                            errors.emri_femijes &&
                            "border-red-500 focus:border-red-400"
                          }`}
                          {...register("emri_femijes", { required: true })}
                          placeholder="Emri i fëmijës"
                        />
                        {errors.emri_femijes && (
                          <div className="text-red-500 text-xs ml-4 mt-1">
                            Emri i fëmijës është i domosdoshëm.
                          </div>
                        )}
                      </div>
                      <div className="w-full">
                        <label htmlFor="mbieemrifemijes" className="ml-2">
                          Mbiemri i fëmijës
                        </label>
                        <input
                          type="text"
                          className={`w-full outline-none focus:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500 ${
                            errors.mbiemri_femijes &&
                            "border-red-500 focus:border-red-400"
                          }`}
                          {...register("mbiemri_femijes", { required: true })}
                          placeholder="Mbiemri i fëmijës"
                        />
                        {errors.mbiemri_femijes && (
                          <div className="text-red-500 text-xs ml-4 mt-1">
                            Mbiemri i fëmijës është i domosdoshëm.
                          </div>
                        )}
                      </div>
                      <div className="w-full">
                        <label htmlFor="moshafemijes" className="ml-2">
                          Mosha e fëmijës
                        </label>
                        <input
                          type="number"
                          className={`mt-1 w-full outline-none focus:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500 ${
                            errors.mosha_femijes &&
                            "border-red-500 focus:border-red-400"
                          }`}
                          {...register("mosha_femijes", {
                            required: true,
                            min: 7,
                            max: 14,
                          })}
                          placeholder="Mosha e fëmijës"
                        />
                        {errors.mosha_femijes && (
                          <div className="text-red-500 text-xs w-2/3 ml-4 mt-1">
                            Mosha e fëmijës është e domosdoshme dhe duhet të
                            jetë midis 7 dhe 14 vjeç.
                          </div>
                        )}
                      </div>
                      <div className="w-full">
                        <label htmlFor="kursi" className="ml-2">
                          Kursi
                        </label>
                        <Combobox value={selected} onChange={setSelected}>
                          <div className="ml-2 mt-1 ring-2 ring-blue-200 rounded-full w-11/12 flex flex-row">
                            <Combobox.Input
                              id="kursi"
                              {...register("kursi", { required: true })}
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
                              <Combobox.Options className="absolute w-60 left-1/2 -translate-x-1/2 top-2 bg-blue-50 border-2 border-blue-100 p-4 rounded-lg backdrop-blur-lg bg-opacity-50">
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
                                      } py-2 px-2 text-center rounded-lg cursor-pointer
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
                      </div>
                      <div className="w-full">
                        <label htmlFor="emriprindit" className="ml-2">
                          Emri i prindit
                        </label>
                        <input
                          type="text"
                          className={`mt-1 w-full outline-none focus:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500 ${
                            errors.emri_prindit &&
                            "border-red-500 focus:border-red-400"
                          }`}
                          {...register("emri_prindit", { required: true })}
                          placeholder="Emri i prindit"
                        />
                        {errors.emri_prindit && (
                          <div className="text-red-500 text-xs w-2/3 ml-4 mt-1">
                            Emri i prindit është i domosdoshëm.
                          </div>
                        )}
                      </div>
                      <div className="w-full">
                        <label htmlFor="mbiemriprindit" className="ml-2">
                          Mbiemri i prindit
                        </label>
                        <input
                          type="text"
                          className={`mt-1 w-full outline-none focus:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500 ${
                            errors.mbiemri_prindit &&
                            "border-red-500 focus:border-red-400"
                          }`}
                          {...register("mbiemri_prindit", { required: true })}
                          placeholder="Mbiemri i prindit"
                        />
                        {errors.mbiemri_prindit && (
                          <div className="text-red-500 text-xs w-2/3 ml-4 mt-1">
                            Mbiemri i prindit është i domosdoshëm.
                          </div>
                        )}
                      </div>
                      <div className="w-full">
                        <label htmlFor="cel" className="ml-2">
                          Numri i telefonit
                        </label>
                        <input
                          type="tel"
                          {...register("telefoni", {
                            required: true,
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message:
                                "Numri i telefonit duhet të jetë 10 shifror.",
                            },
                            minLength: 10,
                            maxLength: 10,
                          })}
                          className={`mt-1 w-full outline-none focus:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500 ${
                            errors.telefoni &&
                            "border-red-500 focus:border-red-400"
                          }`}
                        />
                        {errors.telefoni && (
                          <div className="text-red-500 text-xs w-2/3 ml-4 mt-1">
                            Shembull: 0612345678.
                          </div>
                        )}
                      </div>
                      <div className="w-full">
                        <label htmlFor="email" className="ml-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className={`mt-2 w-full outline-none focus:outline-none rounded-full px-2 py-1 border-2 border-blue-100 focus:border-gray-500 ${
                            errors.email &&
                            "border-red-500 focus:border-red-400"
                          }`}
                          {...register("email", { required: true })}
                          placeholder="E-mail"
                        />
                        {errors.email && (
                          <div className="text-red-500 text-xs w-2/3 ml-4 mt-1">
                            Emaili është i domosdoshëm.
                          </div>
                        )}
                      </div>
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
