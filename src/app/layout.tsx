"use client";
import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "./providers";
import { trpc } from "@/lib/trpc";

const plusJakarata = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Artificium",
  description: "Empowering your digital journey",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={plusJakarata.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default trpc.withTRPC(RootLayout);
