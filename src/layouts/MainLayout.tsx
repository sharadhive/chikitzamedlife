import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;