"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Calendar, Award, LogOut, Activity } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Events", href: "/admin/events", icon: Calendar },
  { name: "Achievements", href: "/admin/achievements", icon: Award },
  { name: "Activities", href: "/admin/activities", icon: Activity },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      if (auth) await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="w-64 bg-[#0a0a0a] border-r border-foreground/10 h-screen fixed top-0 left-0 flex flex-col z-50">
      <div className="p-6 border-b border-foreground/10">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors">
          PUCPC <span className="text-accent text-sm ml-1 font-medium">Admin</span>
        </Link>
      </div>

      <nav className="flex-grow py-6 px-4 space-y-2">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? "bg-accent/10 text-accent font-medium" 
                  : "text-foreground/70 hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-foreground/10">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-foreground/70 hover:bg-red-500/10 hover:text-red-500 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
