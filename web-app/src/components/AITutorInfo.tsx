import React from 'react';
import { motion } from 'framer-motion';

export const AITutorInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm mb-8 sm:mb-12 max-w-2xl mx-auto"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-apple-blue rounded-full flex items-center justify-center">
          <span className="text-xl sm:text-2xl text-white">👩‍🏫</span>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Meet Maya!</h3>
          <p className="text-sm sm:text-base text-gray-600">Your AI-powered English tutor</p>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-600">
        Hi! I&apos;m Maya, your virtual English tutor. I&apos;m here to help you practice 
        conversation in a relaxed and fun way. Ready to chat? 😊
      </p>
    </motion.div>
  );
};

export default AITutorInfo;