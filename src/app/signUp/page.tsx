"use client";
import Image from "next/image";
import { Checkbox } from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { FC } from "react";
import { signIn } from "next-auth/react";

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}) => {
  return (
    <main className="flex min-h-screen min-w-full items-center ">
      <div className="relative basis-7/12 ">
        <div className="absolute flex w-full items-center justify-between p-9">
          <Image alt="logo" src={"/Logo.png"} width={32} height={32} />
          <Link
            href={"/login"}
            className="bg-gradient-to-tr from-indigo-100 to-lime-200 bg-clip-text text-sm font-semibold text-transparent"
          >
            Login
          </Link>
        </div>
        <section className="mx-40 flex min-h-screen flex-col items-start justify-center space-y-8 text-white">
          <div className="space-y-3">
            <h2 className="text-3xl">
              Connect with your team and bring your creative ideas to life.
            </h2>
          </div>
          <form action="" className="w-2/3 space-y-4">
            <div className="flex items-center space-x-4 rounded-lg border-2 border-nobleBlack-500 p-3">
              <EmailIcon fontSize={"xl"} color={"gray.300"} />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent outline-none"
              />
            </div>
            <div className="flex items-center space-x-4 rounded-lg border-2 border-nobleBlack-500 p-3">
              <LockIcon fontSize={"xl"} color={"gray.300"} />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </form>
          <Checkbox
            colorScheme="green"
            iconSize={"2rem"}
            className="border-nobleBlack-500 "
            required
          >
            I agree with{" "}
            <span className="bg-gradient-to-r from-indigo-100 to-lime-200 bg-clip-text font-semibold text-transparent">
              Terms and conditions
            </span>
          </Checkbox>
          <button className="w-2/3 rounded-lg bg-steamGreen-500 py-2 font-semibold text-nobleBlack-700">
            Sign up
          </button>
          <div
            className="flex w-2/3 items-center justify-between gap-5 text-nobleBlack-400"
            onClick={(e) => signIn("google")}
          >
            <div
              className="flex w-1/2 cursor-pointer items-center justify-center gap-2 rounded-lg bg-nobleBlack-600 px-4 py-3 text-center"
              onClick={(e) => signIn("google")}
            >
              <Image
                alt="google icon"
                src={"/google.png"}
                width={20}
                height={20}
              />
              Google account
            </div>
            <div
              className="flex w-1/2 cursor-pointer items-center justify-center gap-2 rounded-lg bg-nobleBlack-600 px-4 py-3 text-center"
              onClick={(e) => signIn("github")}
            >
              <Image
                alt="github icon"
                src={"/github.png"}
                width={25}
                height={25}
              />
              Github account
            </div>
          </div>
        </section>
        <div className="absolute bottom-0 flex w-full items-center justify-between p-9 text-xs text-nobleBlack-400">
          <p>Artificium.app © 2023</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="min-h-screen basis-5/12 rounded-bl-3xl rounded-tl-3xl bg-[url(/Illustration2.svg)] bg-cover bg-no-repeat" />
    </main>
  );
};

export default SignUp;
