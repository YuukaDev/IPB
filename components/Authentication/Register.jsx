import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import db, { auth } from "../../lib/firebase";

import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";

export default function Register() {
  const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().min(8).max(32).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [displayName, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const registerUser = async () => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: displayName,
        authProvider: "local",
        registerEmail,
      });
      setLoading(false);
      toast.success("Great, your account was registered successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error("Oh no, there was an error!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(true);
    }
  };

  const handleSubmitForm = () => {
    registerUser(registerEmail, registerPassword);
  };

  return (
    <div className="h-loginH flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h1 className="mt-6 uppercase tracking-login text-center text-login">
            REGISTER
          </h1>
          <p className="text-center text-sm mt-7 mb-7">
            Please fill in the information below:
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="flex flex-col gap-5">
            <div>
              <input
                {...register("name")}
                onChange={(e) => setName(e.target.value)}
                id="name"
                type="text"
                autoComplete="name"
                className="w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Name"
              />
              <p className="mt-2 ml-2 text-xs text-red-500">
                {errors.name?.message}
              </p>
            </div>
            <div>
              <input
                {...register("email")}
                onChange={(e) => setRegisterEmail(e.target.value)}
                id="email-address"
                type="email"
                autoComplete="email"
                className="w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
              <p className="mt-2 ml-2 text-xs text-red-500">
                {errors.email?.message}
              </p>
            </div>
            <div>
              <input
                {...register("password")}
                onChange={(e) => setRegisterPassword(e.target.value)}
                id="password"
                type="password"
                autoComplete="password"
                className="w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
              <p className="mt-2 ml-2 text-xs text-red-500">
                {errors.password?.message}
              </p>
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
