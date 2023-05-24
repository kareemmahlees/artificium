import { z } from "zod";
import { procedure, router } from "../trpc";
import { prisma } from "@/lib/prismaClient";
import { TRPCError } from "@trpc/server";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3 } from "@/lib/s3";
import { GetObjectCommand } from "@aws-sdk/client-s3";

export const workspaceRouter = router({
  checkWorkspaceExist: procedure
    .input(
      z.object({
        workspaceName: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const workspace = await prisma.workspace.findFirst({
        where: {
          name: input.workspaceName,
        },
      });
      if (!workspace) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Workspace doesn't exist",
        });
      }
    }),
  getWorkspaceInfo: procedure
    .input(z.object({ workspaceName: z.string() }))
    .query(async ({ input }) => {
      const workspaceData = await prisma.workspace.findFirst({
        where: {
          name: input.workspaceName,
        },
        include: {
          members: {
            select: {
              name: true,
              image: true,
            },
          },
        },
      });
      const command = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${input.workspaceName}.png`,
      });
      const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
      return {
        ...workspaceData,
        signedUrl,
      };
    }),
  connectUserToWorkspace: procedure
    .input(z.object({ workspaceId: z.string(), userEmail: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.workspace.update({
        where: {
          id: input.workspaceId,
        },
        data: {
          members: {
            connect: {
              email: input.userEmail,
            },
          },
        },
      });
    }),
});
