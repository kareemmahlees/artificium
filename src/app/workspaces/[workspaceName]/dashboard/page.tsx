"use client";
import { FC } from "react";

interface WorkspaceDashboardProps {
  params: {
    workspaceName: string;
  };
}

const WorkspaceDashboard: FC<WorkspaceDashboardProps> = ({ params }) => {
  return (
    <div className="col-span-4 row-span-full flex items-center justify-center ">
      <div className="flex flex-col items-center gap-4 text-4xl font-bold capitalize text-nobleBlack-400 opacity-30 ">
        <p>start by</p>
        <p>selecting a project</p>
      </div>
    </div>
  );
};

export default WorkspaceDashboard;
