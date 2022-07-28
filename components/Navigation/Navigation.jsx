import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

import useShop from "../../utils/StoreContext";

import Image from "next/image";
import Link from "next/link";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

import logoImage from "../../images/logo_1.png";
import Search from "../Search/Search";

export default function Navigation() {
  const { total_items, customer } = useShop();
  const [user, loading] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (loading) return;
  }, [user, loading]);

  return (
    <nav className="sticky top-0 z-10 bg-navigationBackground">
      <div className="flex justify-center lg:justify-between sm:px-52 md:px-52 lg:px-52 md:p-3 sm:p-3 lg:p-3 items-center">
        <div>
          <a className="hidden lg:flex" aria-label="Home" href="/">
            <Image src={logoImage} alt="logo" width="90" height="50" />
          </a>
        </div>
        <div className="hidden lg:flex gap-5 text-navigationColor">
          <Link href="/">
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>Home</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/products">
            <a
              href="/products"
              className="relative opacity-70 hover:opacity-100 transition-all group"
            >
              <p>All Games</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/#hottest">
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>Hottest</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/#newest">
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>Newest</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/#footer">
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>About Us</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/#footer">
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>Contact</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
        </div>
        <div className="flex gap-3">
          <Link href="/cart">
            <a className="flex">
              <AiOutlineShoppingCart color="rgb(68, 68, 68)" fontSize="1.3em" />
              <p className="text-xs">{`(${total_items})`}</p>
            </a>
          </Link>
          <Link href="/login">
            <a className="flex">
              <AiOutlineUser color="rgb(68, 68, 68)" fontSize="1.3em" />
              <p className="text-xs">
                {!customer.name ? "" : `(${customer.name})`}
              </p>
            </a>
          </Link>
          <div>
            <Search />
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  <p>Home</p>
                </a>
              </Link>
              <Link href="/products">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  <p>All Games</p>
                </a>
              </Link>

              <Link href="/#hottest">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  <p>Hottest</p>
                </a>
              </Link>
              <Link href="/#newest">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  <p>Newest</p>
                </a>
              </Link>
              <Link href="/#footer">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  <p>About Us</p>
                </a>
              </Link>
              <Link href="/#footer">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  <p>Contact</p>
                </a>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}


