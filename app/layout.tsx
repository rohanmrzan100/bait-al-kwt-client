import CartProvider from "@/providers/CartProvider";
import UserProvider from "@/providers/UserProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import HeaderBottom from "./components/Navbar/NavbarBottom";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bait Al Kuwait",
  description: "E commerce app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-700 bg-slate-200`}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <CartProvider>
          <UserProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <HeaderBottom />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </UserProvider>
        </CartProvider>
      </body>
    </html>
  );
}
