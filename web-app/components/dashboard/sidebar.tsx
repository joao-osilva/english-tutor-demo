"use client";

import { useAuth } from "@/hooks/use-auth";
import { useTranslation } from "@/contexts/TranslationContext";
import { NavItem } from "./nav-item";
import { UserCircle, GraduationCap, LogOut, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Sidebar() {
  const { user, signOut } = useAuth();
  const { t } = useTranslation();
  const pathname = usePathname();

  const navigation = [
    {
      name: t.dashboard.navigation.profile,
      href: "/dashboard/profile",
      icon: UserCircle,
      current: pathname === "/dashboard/profile",
    },
    {
      name: t.dashboard.navigation.classroom,
      href: "/dashboard/classroom",
      icon: GraduationCap,
      current: pathname === "/dashboard/classroom",
    },
  ];

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow bg-white/80 backdrop-blur-sm border-r border-gray-200 pt-20 pb-4">
        <div className="flex-shrink-0 px-4 py-4 border-b border-gray-200">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full"
              src={user?.picture}
              alt={user?.name || ""}
            />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 truncate max-w-[150px]">
                {user?.name}
              </p>
              <p className="text-xs text-gray-500 truncate max-w-[150px]">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 px-4 py-4 space-y-2 border-t border-gray-200">
          <Link
            href="/"
            className="flex items-center w-full px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
          >
            <Home className="mr-3 h-5 w-5" />
            {t.dashboard.navigation.home}
          </Link>
          <button
            onClick={() => signOut()}
            className="flex items-center w-full px-2 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
          >
            <LogOut className="mr-3 h-5 w-5" />
            {t.dashboard.mobileMenu.signOut}
          </button>
        </div>
      </div>
    </div>
  );
}
