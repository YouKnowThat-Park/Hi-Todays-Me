import "./globals.css";
import { Inter } from "next/font/google";
import RecoilProvider from "@/providers/RecoilProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NotificationBell from "@/components/layout/notifications/NotificationBell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "DearSomedayToDo",
  description: "투두와 일기를 함께 기록하는 감성 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <RecoilProvider>{children}</RecoilProvider>
        <NotificationBell />
        <Footer />
      </body>
    </html>
  );
}
