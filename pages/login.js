import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

import Navigation from "../components/Navigation/Navigation"
import Login from "../components/Authentication/Login"
import Footer from "../components/Footer/Footer";
import Profile from "../components/Authentication/Profile";
import Head from "next/head";

export default function LoginPage() {
    const [user] = useAuthState(auth);

    if (user) {
        return (
            <div>
                <Head>
                    <title>Profile</title>
                </Head>
                <Profile />
            </div>
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
