import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";
import useShop from "../../utils/StoreContext";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

export default function Profile() {
  const { customer } = useShop();
  const [user] = useAuthState(auth);

  return (
    <>
      <Navigation />
      <div className="h-screen flex justify-center items-center">
        <h1 className="uppercase text-lg tracking-widest">Welcome</h1>
        <p>{customer?.name}</p>
      </div>
      <button onClick={() => signOut(auth)}>Sign Out</button>
      <Footer />
    </>
  );
}
