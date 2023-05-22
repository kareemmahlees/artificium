"use client";
import { FC } from "react";
import { trpc } from "@/lib/trpc";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const hello = trpc.hello.useQuery({ text: "client" });
  console.log(hello.data?.greeting);
  return <div>page</div>;
};

export default page;
