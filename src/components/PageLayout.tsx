import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen">
    <Navbar />
    <main className="pt-24 pb-16">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
