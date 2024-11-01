"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoadingPage } from "@/components/ui/loading";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/profile");
  }, [router]);

  return <LoadingPage />;
}
