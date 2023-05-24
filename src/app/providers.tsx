// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { Session } from "inspector";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} resetCSS={false}>
        <Toaster />
        <SessionProvider>{children}</SessionProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
