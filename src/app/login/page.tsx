"use client";
import Image from "next/image";
import { FC } from "react";
import { Checkbox } from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Login: FC = ({}) => {
  return (
    <main className="flex min-h-screen min-w-full items-center ">
      <div className="basis-7/12">
        <Image
          className="absolute left-0 top-0 m-9"
          alt="logo"
          src={"/Logo.png"}
          width={32}
          height={32}
        />
        <section className="mx-40 flex min-h-screen flex-col items-start justify-center space-y-8 text-white">
          <div className="space-y-3">
            <h2 className="text-3xl">
              Let&apos;s get{" "}
              <span className="bg-gradient-to-tr from-dayBlue-500 from-5% via-blue-300 via-15% to-green-300 to-50% bg-clip-text font-bold text-transparent">
                creative!
              </span>
            </h2>
            <p className=" text-nobleBlack-300">
              Log in to Artificium to start creating magic.
            </p>
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
          <div className="flex w-2/3 items-center justify-between">
            <Checkbox
              colorScheme="green"
              iconSize={"2rem"}
              className="border-nobleBlack-500 "
            >
              Remember me
            </Checkbox>
            <div className="bg-gradient-to-tr from-indigo-100 to-lime-200 bg-clip-text font-semibold text-transparent">
              <Link href={"/forgot-password"}>Forgot Password?</Link>
            </div>
          </div>
          <button className="w-2/3 rounded-lg bg-steamGreen-500 py-2 font-semibold text-nobleBlack-700">
            Log in
          </button>
          <div className="flex w-2/3 items-center justify-center font-medium text-nobleBlack-300">
            <hr className="basis-1/4 opacity-30" />
            <p className="mx-5 text-sm">or continue with</p>
            <hr className="basis-1/4 opacity-30" />
          </div>
          <div
            className="flex w-2/3 items-center justify-between gap-5 text-nobleBlack-400"
            onClick={(e) => signIn("google", { callbackUrl: "/workspaces" })}
          >
            <div className="flex w-1/2 cursor-pointer items-center justify-center gap-2 rounded-lg bg-nobleBlack-600 px-4 py-3 text-center">
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
              onClick={(e) => signIn("github", { callbackUrl: "/workspaces" })}
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
          <p className="absolute bottom-9 left-0 m-9 text-nobleBlack-300">
            Don&apos;t have and account?{" "}
            <span className="ml-2">
              <Link
                href={"/signUp"}
                className="bg-gradient-to-tr from-indigo-100 to-lime-200 bg-clip-text font-semibold text-transparent"
              >
                Sign up
              </Link>
            </span>
          </p>
        </section>
      </div>
      <div className="min-h-screen basis-5/12 rounded-bl-3xl rounded-tl-3xl bg-[url(/Illustration.png)] bg-cover bg-no-repeat" />
    </main>
  );
};

export default Login;
