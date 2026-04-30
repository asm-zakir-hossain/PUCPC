"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-secondary-light dark:bg-[#111] border-t border-foreground/10 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-4">PUCPC</h3>
            <p className="text-foreground/70 text-sm max-w-sm leading-relaxed">
              Prime University Computer Programming Club. Building competitive programmers and creating champions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact & FAQs</Link></li>
              <li><Link href="/join" className="hover:text-accent transition-colors">Join the Club</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Prime University</li>
              <li>Dhaka, Bangladesh</li>
              <li>Email: <a href="mailto:pucsecpc.official@gmail.com" className="hover:text-accent transition-colors">pucsecpc.official@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-foreground/10 text-center text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Prime University Computer Programming Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
