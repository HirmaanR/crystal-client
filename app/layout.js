import { Roboto } from "next/font/google";
import MainLayout from "./components/layouts/MainLayout";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Crystal",
  description: "AI Chatbot interface",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
