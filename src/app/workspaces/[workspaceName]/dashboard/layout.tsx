"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { trpc } from "@/lib/trpc";
import { Loader, Search, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";

interface layoutProps {
  children: React.ReactNode;
  params: {
    workspaceName: string;
  };
}

const Layout: FC<layoutProps> = ({ children, params }) => {
  const session = useSession();
  const router = useRouter();
  const { data, isLoading } = trpc.workspace.getWorkspaceDetails.useQuery({
    workspaceName: params.workspaceName,
  });

  if (isLoading) {
    return <Loader className="animate-spin" />;
  }
  return (
    <main className="grid min-h-screen grid-cols-5 grid-rows-6 gap-4 p-3">
      <div className="relative col-span-1 row-span-full flex flex-col rounded-2xl bg-nobleBlack-800 p-6 text-white">
        <div className="space-y-6 divide-y divide-solid divide-nobleBlack-500">
          <div className="flex items-center gap-7">
            <Image
              alt="workspace avatar"
              src={data?.signedUrl as string}
              width={40}
              height={40}
            />
            <div className="space-y-1">
              <h5 className="font-semibold">{data?.name}</h5>
              <p className="text-xs text-steamGreen-500">
                {data?.members?.length} members
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-5 pt-4 text-sm">
            <p className=" text-nobleBlack-300">General</p>
            <button className="flex w-full items-center gap-4 rounded-lg p-2 transition hover:bg-nobleBlack-400">
              <Search size={16} />
              Search
            </button>
            <button className="flex w-full items-center gap-4 rounded-lg p-2 transition hover:bg-nobleBlack-400">
              <Wallet size={16} />
              Billing
            </button>
          </div>
          <div className="flex flex-col items-start space-y-5 pt-4 text-sm">
            <p className=" text-nobleBlack-300">Projects</p>
            {data?.projects?.map((project, index) => (
              <button
                key={index}
                className="w-full rounded-lg p-2 text-start hover:bg-nobleBlack-400"
                onClick={(e) =>
                  router.push(
                    `/workspaces/${params.workspaceName}/dashboard/${project.name}`
                  )
                }
              >
                {project.name}
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-6 flex w-4/5 items-center gap-5 rounded-lg bg-gradient-to-br from-nobleBlack-500 to-nobleBlack-800 p-3">
          <Image
            alt="user avatar"
            src={session.data?.user?.image as string}
            width={40}
            height={40}
            className="rounded-xl"
          />
          <div className="space-y-1">
            <h5 className="font-semibold capitalize">
              {session.data?.user?.name}
            </h5>
            <p className="text-xs text-steamGreen-500">Premium</p>
          </div>
        </div>
      </div>
      {children}
    </main>
  );
};

export default Layout;
