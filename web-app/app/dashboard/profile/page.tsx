"use client";

import { useAuth } from "@/hooks/use-auth";
import { useTranslation } from "@/contexts/TranslationContext";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { LoadingPage } from "@/components/ui/loading";

export default function Profile() {
  const { user, isLoading } = useAuth();
  const { t } = useTranslation();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!user) {
    return null;
  }

  // Mock data - replace with real data from your backend
  const stats = {
    totalSessions: 12,
    totalMinutes: 180,
  };

  const practiceHistory = [
    {
      id: 1,
      date: "2023-12-20",
      duration: 15,
    },
    // Add more mock data as needed
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {t.profile.title}
        </h1>
        <p className="mt-2 text-gray-600">{t.profile.subtitle}</p>
      </div>

      {/* User Info & Credits */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* User Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-sm p-6"
        >
          <div className="flex items-center space-x-4">
            <img
              src={user.picture}
              alt={user.name}
              className="w-16 h-16 rounded-full ring-2 ring-blue-100"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {user.name}
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </motion.div>

        {/* Credits */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-sm p-6 text-white"
        >
          <h2 className="text-xl font-semibold">{t.profile.credits.title}</h2>
          <p className="text-blue-100 mb-4">{t.profile.credits.subtitle}</p>
          <div className="text-3xl font-bold">
            {user.credits} {t.profile.credits.remaining}
          </div>
          <p className="text-blue-100 mt-1">
            = {user.credits} {t.profile.credits.minutes}
          </p>
        </motion.div>
      </div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="bg-white rounded-xl shadow-sm p-6">
          <Calendar className="w-8 h-8 text-blue-600 mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            {stats.totalSessions}
          </div>
          <p className="text-gray-600">{t.profile.stats.totalSessions}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <Clock className="w-8 h-8 text-purple-600 mb-2" />
          <div className="text-2xl font-bold text-gray-900">
            {stats.totalMinutes}
          </div>
          <p className="text-gray-600">{t.profile.stats.totalMinutes}</p>
        </div>
      </motion.div>

      {/* Practice History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {t.profile.history.title}
            </h2>
            <p className="text-gray-600">{t.profile.history.subtitle}</p>
          </div>
        </div>

        {practiceHistory.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="pb-3 text-gray-600">{t.profile.history.date}</th>
                  <th className="pb-3 text-gray-600">{t.profile.history.duration}</th>
                </tr>
              </thead>
              <tbody>
                {practiceHistory.map((session) => (
                  <tr key={session.id} className="border-b border-gray-100">
                    <td className="py-3">{session.date}</td>
                    <td className="py-3">{session.duration} min</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            {t.profile.history.noSessions}
          </div>
        )}
      </motion.div>
    </div>
  );
}
