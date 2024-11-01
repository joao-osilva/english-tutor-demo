"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle, GraduationCap, Menu, LogOut, Home } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useTranslation } from "@/contexts/TranslationContext";

export function MobileNav() {
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

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
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
        <nav className="flex items-center justify-around h-16">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1
                ${item.current ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}
            >
              <item.icon className={`h-6 w-6 ${
                item.current ? "text-blue-600" : "text-gray-400"
              }`} />
              <span className="text-xs">{item.name}</span>
            </Link>
          ))}
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col items-center justify-center w-full h-full space-y-1 text-gray-600"
          >
            <Menu className="h-6 w-6 text-gray-400" />
            <span className="text-xs">{t.dashboard.navigation.more}</span>
          </button>
        </nav>
      </div>

      {/* More Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl"
          >
            <div className="p-4">
              {/* User Info */}
              <div className="flex items-center space-x-3 p-4 border-b border-gray-200">
                <img
                  src={user?.picture}
                  alt={user?.name || ""}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{user?.name}</p>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>
              </div>

              {/* Menu Actions */}
              <div className="mt-4 space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full p-4 text-left text-gray-600 hover:bg-gray-50 rounded-lg flex items-center space-x-3"
                >
                  <Home className="h-5 w-5" />
                  <span>{t.dashboard.navigation.home}</span>
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full p-4 text-left text-red-600 hover:bg-red-50 rounded-lg flex items-center space-x-3"
                >
                  <LogOut className="h-5 w-5" />
                  <span>{t.dashboard.mobileMenu.signOut}</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 w-full p-4 text-center text-gray-500 hover:text-gray-700 font-medium"
              >
                {t.dashboard.mobileMenu.close}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
