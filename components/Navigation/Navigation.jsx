import Image from "next/image";
import Link from "next/link";
import logoImage from "../../images/logo_1.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

export default function Navigation() {
  return (
    <nav>
      <div className="flex justify-between px-52 p-3 items-center">
        <div className="relative">
          <a aria-label="Home" href="/">
            <Image src={logoImage} alt="logo" width="90" height="50" />
          </a>
        </div>
        <div className="flex flex-wrap gap-5 text-navigationColor">
          <Link href="/" passHref>
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>Home</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="relative opacity-70 hover:opacity-100 transition-all group">
              <p>Shop All</p>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </Link>
          <Link href="/" passHref>
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
