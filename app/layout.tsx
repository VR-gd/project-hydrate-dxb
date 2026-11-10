import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PROJECT HYDRATE // DXB",
  description:
    "Advocacy for heat safety, hydration access and electrolyte supply for Dubai's outdoor workforce: construction crews, laborers and delivery riders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="rounded-none bg-base font-sans text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
