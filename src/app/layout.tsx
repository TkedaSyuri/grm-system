import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { Providers } from "./features/Redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GRM-SYSTEM s",
  description: "Please Check Gest Room State",
  icons:{
    icon:"/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} overflow-hidden bg-gray-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
