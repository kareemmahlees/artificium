"use client";
import { FC } from "react";
import { trpc } from "@/lib/trpc";
import PageTemplate from "@/components/PageTemplate";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

interface pageProps {
  params: {
    workspaceName: string;
  };
}

const JoinWorkspace: FC<pageProps> = ({ params }) => {
  const router = useRouter();
  const session = useSession();
  let toastId = "some-id";
  const { isLoading, data } = trpc.workspace.getWorkspaceInfo.useQuery({
    workspaceName: params.workspaceName,
  });
  const mutation = trpc.workspace.connectUserToWorkspace.useMutation({
    onSuccess: () => {
      toast.dismiss(toastId);
      router.push(`/workspaces/${data?.name}/dashboard`);
    },
  });
  return (
    <main className="flex min-h-screen min-w-full items-center ">
      <PageTemplate flexLayout="center">
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          <>
            <Image
              alt="workspace avatar"
              src={data?.signedUrl as string}
              width={64}
              height={64}
            />
            <div className="flex flex-col items-center space-y-2">
              <h2 className="text-4xl font-bold capitalize">{data?.name}</h2>
              <h5 className="text-steamGreen-500">
                {data?.name}.artificium.app
              </h5>
            </div>
            <div className="mt-4 flex items-center space-x-6">
              <button
                className="rounded-lg p-4 text-nobleBlack-400 hover:bg-nobleBlack-600 hover:text-white"
                onClick={(e) => router.push("/workspaces")}
              >
                Change workspace
              </button>
              <button
                className="rounded-lg bg-steamGreen-500 px-5 py-3 font-semibold text-black hover:bg-steamGreen-700"
                onClick={(e) => {
                  toast.loading("Joining to workspace", { id: toastId });
                  mutation.mutate({
                    workspaceId: data?.id as string,
                    userEmail: session.data?.user?.email as string,
                  });
                }}
              >
                Join now
              </button>
            </div>
            <div className="flex items-center gap-5 text-nobleBlack-300">
              {data?.members?.map((member, index) => (
                <Image
                  className="rounded-lg"
                  key={index}
                  alt="user avatar"
                  src={member.image as string}
                  width={32}
                  height={32}
                />
              ))}
              {!data?.members?.length ? (
                <p>You are the first to get here</p>
              ) : data.members.length < 5 ? (
                <p>are already here</p>
              ) : (
                <p>and {data.members.length - 5} others have already joined</p>
              )}
            </div>
          </>
        )}
      </PageTemplate>
      <div className="min-h-screen basis-5/12 rounded-bl-3xl rounded-tl-3xl bg-[url(/Illustration3.png)] bg-cover bg-no-repeat" />
    </main>
  );
};

export default JoinWorkspace;
