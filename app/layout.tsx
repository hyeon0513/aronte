import type { Metadata } from "next";
import "./globals.css";

import "@/lib/sidebar";
import Sidebar from "@/lib/sidebar";

export const metadata: Metadata = {
  title: "Aronte",
  description: "Description of Aronte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex">
        <Sidebar />

        <main className="flex-1 ml-64">
          {children}
        </main>
        
        </body>
    </html>
  );
}
