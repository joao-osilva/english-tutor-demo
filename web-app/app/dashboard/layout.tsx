"use client";

import { useAuth } from "@/hooks/use-auth";
import { Sidebar } from "@/components/dashboard/sidebar";
import { MobileNav } from "@/components/dashboard/mobile-nav";
import { LoadingPage } from "@/components/ui/loading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/api/auth/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 md:ml-64">
          <main className="pt-20 pb-20 md:pb-8 px-4 sm:px-6 lg:px-8"> {/* Added pb-20 for mobile */}
            {children}
          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
}
