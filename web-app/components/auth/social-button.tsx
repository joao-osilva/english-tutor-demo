import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Mail } from 'lucide-react';
import Image from 'next/image';

interface SocialButtonProps {
  provider: 'google' | 'facebook';
  onClick: () => void;
  isLoading?: boolean;
}

export const SocialButton: FC<SocialButtonProps> = ({
  provider,
  onClick,
  isLoading = false,
}) => {
  const getProviderDetails = (provider: string) => {
    switch (provider) {
      case 'google':
        return {
          text: 'Continue with Google',
          icon: (
            <Image
              src="/google.svg"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
          ),
          className: 'bg-white text-gray-900 hover:bg-gray-50',
        };
      case 'facebook':
        return {
          text: 'Continue with Facebook',
          icon: <Facebook className="mr-2 h-5 w-5" />,
          className: 'bg-[#1877F2] text-white hover:bg-[#0C63D4]',
        };
      default:
        return {
          text: '',
          icon: <Mail />,
          className: '',
        };
    }
  };

  const { text, icon, className } = getProviderDetails(provider);

  return (
    <Button
      variant="outline"
      className={`w-full flex items-center justify-center ${className}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {icon}
      {text}
    </Button>
  );
};
