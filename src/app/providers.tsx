// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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
    // <CacheProvider>
    <ChakraProvider theme={theme} resetCSS={false}>
      {children}
    </ChakraProvider>
    // </CacheProvider>
  );
}
