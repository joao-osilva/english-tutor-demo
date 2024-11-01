"use client";

import { MdEmail } from "react-icons/md";
import { FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { useTranslation } from '@/contexts/TranslationContext';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-white/80 backdrop-blur-sm border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            {t.footer.copyright}
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:hi@askmaya.com"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
              title={t.footer.social.email}
            >
              <MdEmail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://youtube.com/@askmaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
              title={t.footer.social.youtube}
            >
              <FaYoutube className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://x.com/askmaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
              title={t.footer.social.twitter}
            >
              <FaXTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://tiktok.com/@askmaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
              title={t.footer.social.tiktok}
            >
              <FaTiktok className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
