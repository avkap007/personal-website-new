import type { Metadata } from "next";
import "./globals.css";
import { themeInitScript } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Avni Kapoor",
  description: "welcome to my website!",
  icons: {
    icon: "/diagonal.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-serif antialiased text-writingColor bg-primary">
        {children}
      </body>
    </html>
  );
}
