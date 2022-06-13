import { useEffect } from "react";
import { useRouter } from "next/router";
import useShop from "../utils/StoreContext";

import Navigation from "../components/Navigation/Navigation"
import Register from "../components/Authentication/Register"
import Footer from "../components/Footer/Footer";

export default function RegisterPage() {
    const { customer } = useShop();
    const router = useRouter();

    return (
        <>
            <Navigation />
            <Register />
            <Footer />
        </>
    )
}
