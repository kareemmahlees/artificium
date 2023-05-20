import "@/styles/globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const plusJakarata = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Artificium",
  description: "Empowering your digital journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakarata.className}>{children}</body>
    </html>
  );
}
