import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { cn } from "@/lib/utils";
import SessionWrapper from "@/components/SessionWrapper";
import StoreProvider from "@/app/StoreProvider";
import QueryProvider from "@/app/QueryProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <Theme>
            <QueryProvider>
              <StoreProvider>{children}</StoreProvider>
            </QueryProvider>
          </Theme>
        </body>
      </html>
    </SessionWrapper>
  );
}
