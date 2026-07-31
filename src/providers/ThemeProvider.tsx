import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export default function ThemeProvider({
  children,
}: Props) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
    >
      {children}
    </NextThemeProvider>
  );
}