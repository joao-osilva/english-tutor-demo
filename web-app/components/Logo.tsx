import Image from 'next/image';

export default function Logo() {
  return (
    <Image 
      src="/images/maya-avatar.png"
      alt="Maya - AI English Teacher"
      width={40}
      height={40}
      className="rounded-full"
      priority
    />
  );
}