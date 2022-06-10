import { useState } from "react";
import useShop from "../../utils/StoreContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import sonicImage from "../../images/sonic.png";

export default function Register() {
  const router = useRouter();
  const { customer } = useShop();
  const [displayName, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        displayName,
        registerEmail,
        registerPassword
      );
      setLoading(false);
      router.push("/");
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  };

  console.log(customer);

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(registerEmail, registerPassword);
  };

  return (
    <div className="mb-20 h-loginH flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Image width={300} height={300} src={sonicImage} />
      <div className="max-w-md w-full">
        <div>
          <h1 className="mt-6 uppercase tracking-login text-center text-login">
            REGISTER
          </h1>
          <p className="text-center text-sm mt-7 mb-7">
            Please fill in the information below:
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <div>
              <input
                required
                onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                required
                onChange={(e) => setRegisterEmail(e.target.value)}
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
                onChange={(e) => setRegisterPassword(e.target.value)}
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
              Create My Account
            </button>
          </div>
          <div>
            <p className="text-center text-gray-500 mt-5 text-sm">
              Already have an account?{" "}
              <Link href="/login">
                <a className="hover:text-gray-600 transition-all">Login</a>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
