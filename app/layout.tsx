import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoteHub",
  description:
    "NoteHub is a simple and efficient application designed for managing personal notes. The app provides a clean interface for writing, editing, and browsing notes, with support for keyword search and structured organization.",
  openGraph: {
    title: "NoteHub",
    description:
      "NoteHub is a simple and efficient application designed for managing personal notes. The app provides a clean interface for writing, editing, and browsing notes, with support for keyword search and structured organization.",
    url: "https://08-zustand-swart-theta.vercel.app/",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Notehub",
      },
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <TanStackProvider>
          <div>
            <Toaster position="top-center" reverseOrder={false} />
          </div>
          <Header></Header>
          {children}
          {modal}
          <Footer></Footer>
        </TanStackProvider>
      </body>
    </html>
  );
}
