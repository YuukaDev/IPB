import Link from "next/link";

import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className="flex text-navigationColor p-footer justify-center items-center lg:gap-64"
      >
        <div>
          <h1 className="uppercase tracking-widest text-sm">About Us</h1>
          <div className="flex opacity-70 tracking-wide text-footerFont w-footer flex-col mt-2 gap-footer">
            <p>
              We have been a company that has been selling cheap accounts for
              many years. We have a bunch of satisfied customers behind us. The
              orders we sell are exclusively full access and are made by our
              team. If you have a problem with your purchase, please contact our
              24/7 support.
            </p>
          </div>
        </div>
        <div>
          <Link href="/products" passHref>
            <a>
              <h1 className="cursor-pointer uppercase text-sm">Buy</h1>
            </a>
          </Link>
          <div className="flex tracking-wide text-footerFont flex-col mt-2 gap-footer">
            <Link href="/" passHref>
              <a className="opacity-70 hover:opacity-100 transition-all group">
                How to buy
              </a>
            </Link>
            <Link href="/products" passHref>
              <a className="opacity-70 hover:opacity-100 transition-all group">
                Games List
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="opacity-70 hover:opacity-100 transition-all group">
                Collections
              </a>
            </Link>
          </div>
        </div>
        <div>
          <Link href="/help" passHref>
            <a>
              <h1 className="uppercase text-sm">Help</h1>
            </a>
          </Link>
          <div className="flex tracking-wide text-footerFont flex-col mt-2 gap-footer">
            <Link href="/" passHref>
              <a className="opacity-70 hover:opacity-100 transition-all group">
                FAQ
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="opacity-70 hover:opacity-100 transition-all group">
                How to activate game
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="opacity-70 hover:opacity-100 transition-all group">
                Create a ticket
              </a>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="uppercase text-sm">Follow Us</h1>
          <div className="flex justify-center items-center text-footerFont mt-2 gap-footer text-2xl">
            <Link href="/" passHref>
              <a className="opacity-70 hover:opacity-100 transition-all group">
                <FiFacebook />
              </a>
            </Link>
            <Link href="https://www.instagram.com/ip_balkan/" passHref>
              <a className="opacity-70 hover:opacity-100 transition-all group">
                <FiInstagram />
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="opacity-70 hover:opacity-100 transition-all group">
                <FiTwitter />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <h1 className="text-center opacity-70 mt-5 mb-5">
          Copyright © 2022 IPB - All rights reserved
        </h1>
      </div>
    </>
  );
}
