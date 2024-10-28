import { MdEmail } from "react-icons/md";
import { FaYoutube, FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white/80 backdrop-blur-sm border-t">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            © 2024 Ask Maya. Made with 💖 for language learners!
          </div>
          
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href="mailto:hi@askmaya.com"
              className="text-gray-600 hover:text-blue-600 transition-colors p-2"
              aria-label="Say Hi!"
            >
              <MdEmail className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://youtube.com/@askmaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors p-2"
              aria-label="Watch Maya's Tips"
            >
              <FaYoutube className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://twitter.com/askmaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors p-2"
              aria-label="Maya's X (formerly Twitter)"
            >
              <FaXTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://tiktok.com/@askmaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#ff0050] transition-colors p-2"
              aria-label="Maya's TikTok"
            >
              <FaTiktok className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
