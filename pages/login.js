import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

import Navigation from "../components/Navigation/Navigation"
import Login from "../components/Authentication/Login"
import Footer from "../components/Footer/Footer";
import Profile from "../components/Authentication/Profile";

export default function LoginPage() {
    const [user] = useAuthState(auth);

    if (user) {
        return (
            <Profile />
        )
    }

    return (
        <>
            <Navigation />
            <Login />
            <Footer />
        </>
    )
}
