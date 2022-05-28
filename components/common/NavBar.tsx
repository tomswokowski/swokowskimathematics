import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Lessons', href: '/lessons' },
  { name: 'Resources', href: '/resources' },
];

export const NavBar = () => {
  return (
    <>
      <Popover>
        <nav
          className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex flex-1 items-center">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="/">
                <a>
                  <span className="sr-only">Swokowski Mathematics</span>
                  <Image
                    src="/logo.png"
                    alt="Swokowski Mathematics Logo"
                    width={120}
                    height={95}
                  />
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden md:ml-20 md:block md:space-x-10">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a className="font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden text-right md:block">
            <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
              <a
                href={process.env.UDEMY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-red-600 hover:bg-gray-50"
              >
                View Course
              </a>
            </span>
          </div>
        </nav>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <Image
                    src="/logo.png"
                    alt="Swokowski Mathematics Logo"
                    width={120}
                    height={95}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="https://www.udemy.com/course/theultimateguidetounderstandingalgebra/?couponCode=ALGEBRA2022"
                target="_blank"
                rel="noreferrer"
                className="block w-full cursor-pointer bg-gray-50 px-5 py-3 text-center font-medium text-red-600 hover:bg-gray-100"
              >
                View Course
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};
