import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import { ToastContainer   } from 'react-toastify';

const Josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: "400"
});

export const metadata = {
  title: "Mohebur Rahman",
  description: " I craft visually stunning, highly interactive, and user-centric digital experiences that live on the web. Let's turn your ideas into reality.  My programming journey started with curiosity and a passion for building modern and interactive web applications using React, Next.js, and backend technologies I enjoy creating clean UI designs, smooth animations, and real-time applications while continuously exploring new technologies and improving my skills. Outside of programming, I love exploring creative designs, watching tech content, gaming, and turning innovative ideas into real digital experiences.  My Name: Md Mohebur Rahman Monir",
};

export default function RootLayout({ children }) {


  return (
    <html
      lang="en"
      className={` ${Josefin.className}  h-full antialiased scrollbar-none`}

    >
      <body className="  min-h-full flex flex-col">
        <SmoothCursor />
        <ToastContainer position="top-left" closeOnClick />
        {children}</body>
    </html>
  );
}
