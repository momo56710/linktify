"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { Loader } from "../components/loader";
import { toast } from "react-toastify";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const router = useRouter();
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const [isLoading, setIsLoading] = useState(false);
  const handleSignIn = async () => {
    if (email == "" || password == "") {
      setWarning("Don't leave inputs empty");
    } else {
      setIsLoading(true);
      try {
        const res = await signInWithEmailAndPassword(email, password);
        if (res) {
          router.push("/");
          toast("Welcome back");
        } else {
          setWarning("Information doesn't match any account");
          toast("Information doesn't match any account");
        }
        setIsLoading(false);
      } catch (e) {
        document.querySelectorAll("input").forEach((e) => (e.value = ""));
        setWarning("Information doesn't match any account");
        toast('An error has occurred, please try again')
        setIsLoading(false);
      }
    }
  };
  return (
    <div className="flex max-md:flex-col max-md:divide-y justify-center items-center min-h-[70vh] m-10 p-10 bg-white rounded-[20px] md:divide-x">
      <p className="text-[#19154E] md:w-[30vw] flex-1 justify-self-center max-md:pb-10 text-center font-bold text-[3em]">
        Log In
      </p>
      <div className="  md:w-[30vw] max-md:w-[70vw] flex-1 md:pl-[5em] max-md:pt-10">
        <div className="flex flex-col gap-5 max-w-[30em] m-auto">
          <input
            type="email"
            placeholder="Email"
            className="bg-[#fcfbfb] p-3 rounded-[10px]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex flex-col">
            <input
              type="password"
              placeholder="Password"
              className="bg-[#fcfbfb] p-3 rounded-[10px]"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-[0.8em] ml-3 mt-1 text-[#2271B9] hover:underline hover:cursor-pointer">
              Forgot your password?
            </p>
          </div>
          <p
            className="bg-[#2271B9] text-white text-center cursor-pointer rounded-md py-2 grid place-content-center"
            onClick={(e) => {
              handleSignIn();
            }}
          >
            {isLoading ? <Loader /> : "Log in"}
          </p>
          <p className="text-red-600">{warning}</p>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>

          <hr />
          <div>
            <p>
              New to Linktify?
              <Link href={"/signup"}>
                <span className="text-[#2271B9] hover:underline hover:cursor-pointer">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
