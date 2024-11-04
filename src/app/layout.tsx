// Import necessary dependencies and types
import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { themeScript } from "./theme-script";

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the application
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Personal portfolio website",
};

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning prevents warnings from theme switching
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Inject theme initialization script to prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: themeScript() }} />
      </head>
      <body className={inter.className}>
        {/* Render page content */}
        {children}
        {/* Add theme switcher component */}
        <ThemeSwitcher />
      </body>
    </html>
  );
}