import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata={title:"বাজার দর | BazarDor",description:"প্রয়োজনীয় পণ্যের আজকের বাজারদর এক নজরে।"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="bn"><body><Navbar/>{children}<Footer/><Toaster position="top-right"/></body></html>}
