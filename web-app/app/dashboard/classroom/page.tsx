"use client";

import { useTranslation } from "@/contexts/TranslationContext";
import { motion } from "framer-motion";

export default function Classroom() {
  const { t } = useTranslation();

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {t.dashboard.classroom.title}
          </h1>
          <p className="mt-2 text-gray-600">
            {t.dashboard.classroom.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-center text-gray-600">
            {t.dashboard.classroom.status.available}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
