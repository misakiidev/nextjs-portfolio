import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "misakii's Portfolio",
  description: "Modern & Minimalist Next.JS Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <meta content="misakii's Portfolio" property="og:title" />
        <meta
          content="I'm Anaël Couralet, based in Montpellier, and currently studying at Epitech."
          property="og:description"
        />
        <meta content="https://misakii.dev" property="og:url" />
        <meta content="https://i.imgur.com/aeCeaGT.jpeg" property="og:image" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
