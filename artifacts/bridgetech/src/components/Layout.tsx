import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pt-24 lg:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}
