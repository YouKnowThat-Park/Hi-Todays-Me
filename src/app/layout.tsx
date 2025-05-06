import "./globals.css";
import RecoilProvider from "@/recoil/RecoilProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
