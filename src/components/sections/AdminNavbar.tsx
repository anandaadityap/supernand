"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminNavbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-brand-text bg-brand-surface/90 backdrop-blur-sm py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/admin"
            className="font-archivo font-extrabold text-xl uppercase text-brand-text"
          >
            NANDA ADMIN
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/admin"
              className="flex items-center gap-2 text-sm font-mono font-bold text-brand-muted hover:text-brand-text transition-colors"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              href="/admin/projects"
              className="flex items-center gap-2 text-sm font-mono font-bold text-brand-muted hover:text-brand-text transition-colors"
            >
              <FolderOpen className="w-4 h-4" />
              Projects
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="flex items-center gap-2 font-mono font-bold"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}
