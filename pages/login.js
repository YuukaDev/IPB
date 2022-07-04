import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

import Navigation from "../components/Navigation/Navigation"
import Login from "../components/Authentication/Login"
import Footer from "../components/Footer/Footer";

export default function LoginPage() {
    const [user] = useAuthState(auth);
    const router = useRouter();

    if (user) {
        router.push("/account");
    }

    return (
        <>
            <Navigation />
            <Login />
            <Footer />
        </>
    )
}
