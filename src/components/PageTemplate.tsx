import React, { FC } from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

interface PageTemplateProps {
  children: React.ReactNode;
  flexLayout: "start" | "center";
}

const PageTemplate: FC<PageTemplateProps> = ({ children, flexLayout }) => {
  const classes = clsx({
    "mx-40 flex min-h-screen flex-col items-start justify-center space-y-8 text-white":
      flexLayout === "start",
    "mx-40 flex min-h-screen flex-col items-center justify-center space-y-8 text-white":
      flexLayout === "center",
  });
  return (
    <div className="relative basis-7/12 ">
      {/* top section */}
      <div className="absolute flex w-full items-center justify-between p-9">
        <Link href={"/"}>
          <Image alt="logo" src={"/Logo.png"} width={32} height={32} />
        </Link>
      </div>
      {/* center section */}
      <section className={classes}>{children}</section>
      {/* bottom section */}
      <div className="absolute bottom-0 flex w-full items-center justify-between p-9 text-xs text-nobleBlack-400">
        <p>Artificium.app © 2023</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default PageTemplate;
