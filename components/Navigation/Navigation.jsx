import Image from "next/image";
import Link from "next/link";
import logoImage from "../../images/logo_1.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-10 bg-navigationBackground">
      <div className="flex md:justify-between lg:justify-between sm:px-52 md:px-52 lg:px-52 md:p-3 sm:p-3 lg:p-3 items-center">
        <div>
          <a className="hidden lg:flex" aria-label="Home" href="/">
            <Image src={logoImage} alt="logo" width="90" height="50" />
          </a>
        </div>
        <div className="flex md:flex-row sm:flex-column md:flex-wrap sm:flex-wrap gap-5 text-navigationColor">
          <Link href="/" passHref>
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>Home</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/products" passHref>
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>All Games</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="#hottest" passHref>
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>Hottest</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>Newest</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>About Us</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>Contact</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
        </div>
        <div className="flex gap-3">
          <Link href="/" passHref>
            <a>
              <AiOutlineSearch color="rgb(68, 68, 68)" fontSize="1.3em" />
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <AiOutlineShoppingCart color="rgb(68, 68, 68)" fontSize="1.3em" />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
