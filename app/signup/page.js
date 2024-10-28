"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";
import { Loader } from "../components/loader";
import { toast } from "react-toastify";
export default function Page() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [profession, setProffession] = useState("");
  const [warning, setWarning] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  console.log("g");
  const handleSingUp = async () => {
    if (name == "" || email == "" || password == "" || cnfPassword == "") {
      setWarning("don't leave inputs empty");
      toast("Don't leave inputs empty");
    } else if (password.length < 6) {
      setWarning("password must be more than 6 char");
      toast("Password must be more than 6 characters");
    } else if (
      !email.includes("@") ||
      !email.includes(".") ||
      !email.length > 2
    ) {
      setWarning("enter valid email");
      toast("Enter a valid email");
    } else if (password != cnfPassword) {
      setWarning("password doesn't match");
      toast("Passwords don't match");
    } else {
      setIsLoading(true);
      try {
        const res = await createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await updateProfile(user, { displayName: name, photoURL: profession });
        setEmail("");
        setPassword("");
        setName("");
        toast(`${name} created!`);
        router.push("/login");
        console.log(res);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        document.querySelectorAll("input").forEach((e) => (e.value = ""));
        setWarning("email invalid or used before");
        toast("Email invalid or used before");
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex max-md:flex-col max-md:divide-y justify-center items-center min-h-[70vh] m-10 p-10 bg-white rounded-[20px] md:divide-x">
      <p className="text-[#19154E] md:w-[30vw] flex-1 justify-self-center max-md:pb-10 text-center font-bold text-[3em]">
        Sign Up
      </p>
      <div className="  md:w-[30vw] flex-1 max-md:w-[70vw] md:pl-[5em] max-md:pt-10 ">
        <div className="flex flex-col gap-5 max-w-[30em] m-auto">
          <input
            type="text"
            placeholder="name"
            className="bg-[#fcfbfb] p-3 rounded-[10px] "
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="profession"
            className="bg-[#fcfbfb] p-3 rounded-[10px] "
            onChange={(e) => setProffession(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            className="bg-[#fcfbfb] p-3 rounded-[10px]"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="bg-[#fcfbfb] p-3 rounded-[10px]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="confirm password"
            className="bg-[#fcfbfb] p-3 rounded-[10px]"
            onChange={(e) => setCnfPassword(e.target.value)}
          />
          <p
            className="bg-[#2271B9] text-white text-center cursor-pointer rounded-md py-2 grid place-content-center"
            onClick={() => handleSingUp()}
          >
            {isLoading ? <Loader /> : "Sign up"}
          </p>
          <p className="text-red-600">{warning}</p>
          <hr />
          <div>
            <p>
              have an account ?{" "}
              <Link href={"/login"}>
                <span className="text-[#2271B9] hover:underline hover:cursor-pointer">
                  Log in
                </span>
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
