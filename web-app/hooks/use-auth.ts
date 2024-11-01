'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const signIn = () => {
    router.push('/api/auth/login?returnTo=/dashboard/profile');
  };

  const signOut = () => {
    router.push('/api/auth/logout?returnTo=/');
  };

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    signIn,
    signOut
  };
}
