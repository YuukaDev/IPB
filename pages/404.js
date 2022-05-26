import Image from "next/image";
import sonicImage from "../images/sonic.png";

export default function Custom404() {
    return (
        <div className="h-landingHero flex flex-col justify-center items-center">
            <Image width={500} height={500} src={sonicImage} />
            <h1 className="text-3xl text-navigationColor tracking-widest">404 - Page Not Found</h1>
        </div>
    )
}