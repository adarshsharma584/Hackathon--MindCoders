// path of this file NestQuest/app/layout.tsx


import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NestQuest - AI-Powered House Rental Platform",
  description:
    "Find your perfect rental home with AI-powered matching, virtual tours, and secure payments",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
          <Toaster position="top-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
