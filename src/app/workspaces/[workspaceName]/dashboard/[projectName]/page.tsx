"use client";
import { trpc } from "@/lib/trpc";
import {
  Loader2,
  Share2,
  Folder,
  MessageCircle,
  Send,
  Mic,
} from "lucide-react";
import { FC } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";

interface ProjectPageProps {
  params: {
    projectName: string;
  };
}

const ProjectPage: FC<ProjectPageProps> = ({ params }) => {
  const { data, isLoading } = trpc.project.getProjectDetails.useQuery({
    projectName: decodeURI(params.projectName),
  });
  return (
    <div className="col-span-4 row-span-full flex items-center justify-center">
      {isLoading ? (
        <Loader2 className="animate-spin text-white" />
      ) : (
        <Tabs.Root className="flex h-full w-full  flex-col items-center gap-4">
          <div className="flex w-full basis-2/12 flex-col justify-between rounded-2xl bg-nobleBlack-800 p-5 ">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xl font-semibold text-white">{data?.name}</p>
                <p className="text-sm text-nobleBlack-300">
                  {data?.description}
                </p>
              </div>
              <button className="flex items-center gap-3 capitalize text-nobleBlack-400 ">
                <Share2 size={16} />
                share
              </button>
            </div>
            <Tabs.List className="flex gap-9 text-white">
              <Tabs.Trigger
                value="tab1"
                className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-b-steamGreen-500"
              >
                <Image alt="logo" src={"/Logo.png"} width={16} height={16} />{" "}
                Artificium
              </Tabs.Trigger>
              <Tabs.Trigger
                value="tab2"
                className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-b-steamGreen-500"
              >
                <MessageCircle size={16} />
                Chat
              </Tabs.Trigger>
              <Tabs.Trigger
                value="tab3"
                className="flex items-center gap-2 data-[state=active]:border-b-2 data-[state=active]:border-b-steamGreen-500"
              >
                <Folder size={16} />
                Library
              </Tabs.Trigger>
            </Tabs.List>
          </div>
          <div className=" w-full basis-9/12 bg-transparent text-white">
            <Tabs.Content value="tab1">Todo</Tabs.Content>
            <Tabs.Content value="tab2">Todo</Tabs.Content>
            <Tabs.Content value="tab3">Todo</Tabs.Content>
          </div>
          <div className="flex w-full basis-1/12 items-center gap-6 rounded-2xl bg-nobleBlack-800 p-4 text-white">
            <Mic
              size={40}
              className="rounded-lg p-2 hover:cursor-pointer hover:bg-nobleBlack-400"
            />
            <input
              type="text"
              placeholder="You can ask me anything! I am here to help."
              className="h-full w-full bg-transparent outline-none placeholder:text-sm placeholder:text-nobleBlack-400"
            />
            <Send
              size={40}
              className="rounded-lg p-2 hover:cursor-pointer hover:bg-nobleBlack-400"
            />
          </div>
        </Tabs.Root>
      )}
    </div>
  );
};

export default ProjectPage;
