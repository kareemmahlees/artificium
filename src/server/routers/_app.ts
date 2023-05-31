import { router } from "../trpc";
import { projectRouter } from "./projects";
import { workspaceRouter } from "./workspace";

export const appRouter = router({
  workspace: workspaceRouter,
  project: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
