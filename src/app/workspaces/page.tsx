"use client";
import { FC, useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import clsx from "clsx";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

interface pageProps {}

const CreateWorkspace: FC<pageProps> = ({}) => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const inputClasses = clsx(
    "flex items-center gap-3 rounded-lg border-[1px] border-nobleBlack-500 bg-nobleBlack-600 p-3",
    {
      "flex items-center gap-3 rounded-lg border-[1px] border-red-500 bg-nobleBlack-600 p-3":
        value === "" || !value.endsWith(".artificium.app") ? true : false,
    }
  );
  return (
    <main className="flex min-h-screen min-w-full items-center ">
      <PageTemplate flexLayout="center">
        <div className="space-y-9">
          <div className="space-y-3">
            <h2 className="text-3xl">Join or Create a Workspace</h2>
            <p className=" font-medium text-nobleBlack-300">
              Connect with others by joining an existing workspace or create a
              new one to collaborate with your team.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <div className={inputClasses} id="input_box">
                <input
                  className="border-none bg-transparent outline-none"
                  onChange={(e) => setValue(e.target.value)}
                />
                <p className="text-sm text-nobleBlack-300">
                  Your workspace URL
                </p>
                <p className="text-sm text-nobleBlack-300 opacity-50">
                  .artificium.app
                </p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  if (value === "" || !value.endsWith("artificium.app")) {
                    return;
                  } else {
                    router.push(`/workspaces/${value.split(".")[0]}`);
                  }
                }}
                className="rounded-lg bg-steamGreen-500 p-3 text-sm font-semibold capitalize text-nobleBlack-700 hover:bg-steamGreen-700"
              >
                join workspace
              </button>
            </div>
            <div className="text-sm tracking-wide text-red-500">
              {value === "" ? (
                <p>url field can&apos;t be empty</p>
              ) : !value.endsWith(".artificium.app") ? (
                <p>url must end with .artificium.app</p>
              ) : null}
            </div>
          </div>
          <div className="flex w-full items-center justify-center font-medium text-nobleBlack-300">
            <hr className="w-full opacity-30" />
            <p className="mx-5 text-sm">or </p>
            <hr className="w-full opacity-30" />
          </div>
          <button className="text-medium w-full rounded-lg bg-nobleBlack-600 py-3 font-semibold text-nobleBlack-300 hover:bg-nobleBlack-500">
            Create new workspace
          </button>
        </div>
      </PageTemplate>
      <div className="min-h-screen basis-5/12 rounded-bl-3xl rounded-tl-3xl bg-[url(/Illustration2.svg)] bg-cover bg-no-repeat" />
    </main>
  );
};

export default CreateWorkspace;
