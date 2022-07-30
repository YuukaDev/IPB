import Navigation from "../components/Navigation/Navigation"
import Register from "../components/Authentication/Register"
import Footer from "../components/Footer/Footer";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/router";

export default function RegisterPage() {
    const [user] = useAuthState(auth);
    const router = useRouter();
    
    if (user) {
        router.push("/account");
    }

    return (
        <>
            <Navigation />
            <Register />
            <Footer />
        </>
    )
}
