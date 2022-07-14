import { useRouter } from 'next/router';
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import Navigation from '../components/Navigation/Navigation'
import Profile from '../components/Authentication/Profile'
import Footer from '../components/Footer/Footer'
import { useEffect } from 'react';

export default function Account() {
    const [user] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user])

    return (
        <div>
            <Navigation />
            <Profile />
            <Footer />
        </div>
    )
}