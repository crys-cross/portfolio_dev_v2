import "./globals.css";
import { Inter } from "next/font/google";
import { Nav, Footer } from "@/component";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Dev Portfolio",
  description: "Dev Portfolio site built using Nextjs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
