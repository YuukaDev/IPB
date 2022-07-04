import Image from "next/image";

import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

import useShop from "../../utils/StoreContext";
import pikachuImage from "../../images/pikachu.png";

export default function Profile() {
  const { customer } = useShop();

  return (
    <div className="flex justify-center items-center">
      <div className="flex gap-5 flex-col h-landingHero justify-center">
        <Image width={300} height={300} src={pikachuImage} />
        <a className="text-footer cursor-pointer" onClick={() => signOut(auth)}>
          <h1 className="uppercase text-sm tracking-widest">Logout</h1>
        </a>
        <h1 className="uppercase text-lg tracking-widest">My Account</h1>
        <p className="text-sm tracking-widest">
          Welcome back, {customer?.name}!
        </p>
        <div>
          <h2 className="uppercase mt-10 text-footer text-sm">My Orders</h2>
          <hr className="m-0 mt-3" />
        </div>
      </div>
    </div>
  );
}
