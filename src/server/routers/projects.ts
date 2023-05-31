import { prisma } from "@/lib/prismaClient";
import { procedure, router } from "../trpc";
import { z } from "zod";

export const projectRouter = router({
  getProjectDetails: procedure
    .input(z.object({ projectName: z.string() }))
    .query(async ({ input }) => {
      const projectDetails = await prisma.project.findFirst({
        where: {
          name: input.projectName,
        },
      });
      return projectDetails;
    }),
});
