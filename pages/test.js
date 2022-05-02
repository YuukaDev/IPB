import Image from "next/image";
import Link from "next/link";
import logoImage from "../public/logo_1.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

export default function Navigation() {
    return (
        <nav className="h-visina">
            <div className="mt-10 sticky top-0 z-0 flex justify-between px-52 p-3 items-center">
                <div>
                    <a aria-label="Home" href="/">
                        <Image src={logoImage} alt="logo" width="90" height="50" />
                    </a>
                </div>
                <div className="flex flex-wrap gap-5 text-navigationlink">
                    <Link href="/" passHref>
                        <a aria-label="Home">
                            <p className=" ">
                                Home
                            </p>
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a aria-label="Home">
                            <p className=" ">
                                Shop All
                            </p>
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a aria-label="Home">
                            <p className=" ">
                                Hottest
                            </p>
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a aria-label="Home">
                            <p className=" ">
                                Newest
                            </p>
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a aria-label="Home">
                            <p className=" ">
                                About Us
                            </p>
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a aria-label="Home">
                            <p className=" ">
                                Contact
                            </p>
                        </a>
                    </Link>
                </div>
                <div className="flex gap-3">
                    <Link href="/" passHref>
                        <a>
                            <AiOutlineSearch fontSize="1.2em" />
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a>
                            <AiOutlineShoppingCart fontSize="1.2em" />
                        </a>
                    </Link>
                </div>
            </div>
        </nav >
    )
}