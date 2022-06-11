import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import sonicImage from "../../images/sonic.png";

import { auth } from "../../lib/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export default function Login() {
  const router = useRouter();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(loginEmail, loginPassword);
  };

  if (user) {
    return router.push("/");
  }

  if (error) {
    console.log(error.message);
  }

  const logOut = () => {
    signOut(auth);
  };

  return (
    <div className="mb-20 h-loginH flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Image width={300} height={300} src={sonicImage} />
      <div className="max-w-md w-full">
        <div>
          <h1 className="mt-6 uppercase tracking-login text-center text-login">
            Login In Your Account
          </h1>
          <p className="text-center text-sm mt-7 mb-7">
            Please enter your e-mail and password
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="flex flex-col gap-5">
            <div>
              <input
                required
                onChange={(e) => setLoginEmail(e.target.value)}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                required
                onChange={(e) => setLoginPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                className="w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full mt-5 font-normal tracking-widest bg-productButton uppercase hover:bg-transparent hover:border-solid border border-productButton text-white hover:text-black py-3 px-5 transition-all"
            >
              Sign In
            </button>
          </div>
          <div>
            <p className="text-center text-gray-500 mt-5 text-sm">
              Don't have an account?{" "}
              <Link href="/register">
                <a className="hover:text-gray-600 transition-all">Create one</a>
              </Link>
            </p>
          </div>
        </form>
        <button onClick={logOut}>Sign Out</button>
      </div>
    </div>
  );
}
