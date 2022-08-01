import Link from "next/link";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Empty() {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col gap-7 justify-center items-center h-loginH">
        <h1 className="uppercase text-navigationColor font-semibold tracking-widest">
          YOUR CART IS EMPTY
        </h1>
        <p className="text-sm font-thin tracking-widest">
          Go Shop Our Latest Products!
        </p>
        <Link href="/products">
          <button className="font-normal tracking-widest bg-black uppercase hover:bg-transparent hover:border-solid border border-black text-white hover:text-black py-3 px-5 transition-all">
            Shop Now
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}