import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="px-10 py-2">
          <Header />
          {children}
          </div>
      
      </body>
    </html>
  );
}