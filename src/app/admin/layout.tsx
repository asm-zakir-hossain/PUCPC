import Sidebar from "@/components/admin/Sidebar";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-grow ml-64 p-8">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
