import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./navbar";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "longlonglo.ng",
  description: "A personal website, made for CSE 461",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className="flex justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen">
        <div className="flex flex-col min-h-screen items-center justify-center w-2/3 h-full">
          <NavigationBar />
          <main className="flex-1 w-full h-full grow">{children}</main>

          <footer className="w-full py-4 border-t border-gray-600 text-sm text-gray-400">
            <div className="flex flex-col sm:flex-row justify-between items-center px-4">
              <div className="flex space-x-4 mt-2 sm:mt-0">
                <a
                  href="https://github.com/lognguyenle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/longnguyenle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:longnguyenle05@gmail.com"
                  className="hover:text-white transition"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
