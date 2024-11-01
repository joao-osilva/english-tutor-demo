'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { LoadingPage } from '@/components/ui/loading';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/signin');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
