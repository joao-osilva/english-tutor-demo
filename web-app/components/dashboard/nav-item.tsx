"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  name: string;
  href: string;
  icon: LucideIcon;
  current: boolean;
  onClick?: () => void;
}

export function NavItem({ name, href, icon: Icon, current, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex items-center px-2 py-2 text-sm font-medium rounded-md group
        transition-colors duration-150 ease-in-out
        ${
          current
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        }
      `}
    >
      <Icon
        className={`
          mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-150 ease-in-out
          ${current ? "text-blue-600" : "text-gray-400 group-hover:text-gray-500"}
        `}
      />
      {name}
    </Link>
  );
}
