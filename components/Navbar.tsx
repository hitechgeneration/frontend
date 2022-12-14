import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { TiThMenu } from "react-icons/ti";
export const Navbar = () => {
  return (
    <div
      style={{ position: "sticky" }}
      className="flex flex-row justify-between items-center top-2 z-50 w-full mt-2 px-2 bg-white rounded-xl bg-opacity-90 backdrop-blur-lg border-2 border-gray-100"
    >
      <div id="left">
        <Link href="/">
          <button className="flex flex-row gap-2 items-center outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-100 rounded-xl px-2">
            <Image src={"/logo.png"} width={70} height={70} />
            <div className="font-light">HiTech Generation</div>
          </button>
        </Link>
      </div>
      <div id="mobile" className="block md:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-blue-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <TiThMenu />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="flex flex-col gap-4 items-start p-2 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-blue-50 shadow-lg ring-1 text-blue-500 font-medium ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/#rrethnesh">
                      <button
                        className={`${
                          active && "bg-blue-100"
                        } w-full text-center  px-2 py-1 rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:bg-blue-100`}
                      >
                        Rreth Nesh
                      </button>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/#kurset">
                      <button
                        className={`${
                          active && "bg-blue-100"
                        } w-full text-center  px-2 py-1 rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:bg-blue-100`}
                      >
                        Kurset
                      </button>
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link href="/blog">
                      <a
                        className={`${
                          active && "bg-blue-100"
                        } w-full text-center  px-2 py-1 rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:bg-blue-100`}
                      >
                        Blog
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </div>
        </Menu>
      </div>
      <div
        id="right"
        className="hidden md:flex flex-row gap-10 items-center text-sm font-bold bg-blue-50 text-blue-500 p-3 rounded-xl"
      >
        <Link href="/#rrethnesh">
          <a className="border-2 border-transparent px-2 py-1 rounded-full hover:border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:bg-blue-100">
            Rreth Nesh
          </a>
        </Link>
        <Link href="/#kurset">
          <a className="border-2 border-transparent px-2 py-1 rounded-full hover:border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:bg-blue-100">
            Kurset
          </a>
        </Link>
        <Link href="/blog">
          <a className="border-2 border-transparent px-2 py-1 rounded-full hover:border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:bg-blue-100">
            Blog
          </a>
        </Link>
      </div>
    </div>
  );
};
