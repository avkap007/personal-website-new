import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avni Kapoor",
  description: "Welcome to my portfolio!",
  icons: {
    icon: "/diagonal.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-serif antialiased text-writingColor">
        {children}
      </body>
    </html>
  );
}
