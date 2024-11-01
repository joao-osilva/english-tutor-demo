"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SocialButton } from "./social-button";
import { useTranslation } from "@/contexts/TranslationContext";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    try {
      // Auth0 connection names must match your Auth0 dashboard
      const connection = provider === 'facebook' ? 'facebook' : 'google-oauth2';
      router.push(`/api/auth/login?connection=${connection}`);
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <SocialButton
        provider="google"
        onClick={() => handleSocialLogin('google')}
        isLoading={isLoading}
      />
      <SocialButton
        provider="facebook"
        onClick={() => handleSocialLogin('facebook')}
        isLoading={isLoading}
      />
    </div>
  );
}
