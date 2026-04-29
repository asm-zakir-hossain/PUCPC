import Sidebar from "@/components/admin/Sidebar";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-grow ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
