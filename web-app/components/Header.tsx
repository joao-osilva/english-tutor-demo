"use client";

import { useState, useEffect } from "react";
import { useAuth } from '@/hooks/use-auth';
import { useTranslation } from '@/contexts/TranslationContext';
import Link from "next/link";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { Menu, X, User, GraduationCap, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { t } = useTranslation();
  const { user, isAuthenticated, signIn, signOut } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      name: "Classroom",
      href: "/dashboard/classroom",
      icon: GraduationCap,
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {t.common.appName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link href="/#features" className="text-gray-600 hover:text-gray-900">
                {t.header.features}
              </Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-gray-900">
                {t.header.pricing}
              </Link>
              <Link href="/#faq" className="text-gray-600 hover:text-gray-900">
                {t.header.faq}
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center space-x-2 group"
                  >
                    <img
                      src={user?.picture}
                      alt={user?.name || 'Profile'}
                      className="w-8 h-8 rounded-full ring-2 ring-white group-hover:ring-gray-200 transition-all"
                    />
                    <div className="hidden sm:block text-left">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500 group-hover:text-gray-700">
                        {user?.email}
                      </p>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isProfileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                      >
                        <div className="px-4 py-3">
                          <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                          <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>

                        <div className="py-1">
                          {menuItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsProfileMenuOpen(false)}
                            >
                              <item.icon className="mr-3 h-5 w-5 text-gray-400" />
                              {item.name}
                            </Link>
                          ))}
                        </div>

                        <div className="py-1">
                          <button
                            onClick={() => {
                              setIsProfileMenuOpen(false);
                              signOut();
                            }}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                          >
                            <LogOut className="mr-3 h-5 w-5" />
                            Sign out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => signIn()}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
                >
                  Sign in
                </motion.button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4"
            >
              <nav className="flex flex-col space-y-4">
                <Link href="/#features" className="text-gray-600 hover:text-gray-900">
                  {t.header.features}
                </Link>
                <Link href="/#pricing" className="text-gray-600 hover:text-gray-900">
                  {t.header.pricing}
                </Link>
                <Link href="/#faq" className="text-gray-600 hover:text-gray-900">
                  {t.header.faq}
                </Link>
                {isAuthenticated ? (
                  <>
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center text-gray-600 hover:text-gray-900"
                      >
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.name}
                      </Link>
                    ))}
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        signOut();
                      }}
                      className="flex items-center text-red-600 hover:text-red-700"
                    >
                      <LogOut className="mr-3 h-5 w-5" />
                      Sign out
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      signIn();
                    }}
                    className="text-blue-600 hover:text-blue-700 text-left"
                  >
                    Sign in
                  </button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}