import React from 'react';
import { motion } from 'framer-motion';
import { FaMicrophone } from 'react-icons/fa';

interface AudioChatProps {
  isRecording: boolean;
  setIsRecording: (recording: boolean) => void;
}

export const AudioChat: React.FC<AudioChatProps> = ({ isRecording, setIsRecording }) => {
  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  return (
    <div className="flex flex-col items-center px-4">
      <motion.div
        className={`relative w-48 h-48 sm:w-64 sm:h-64 rounded-full ${
          isRecording ? 'bg-red-50' : 'bg-apple-blue/10'
        } flex items-center justify-center cursor-pointer`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={isRecording ? handleStopRecording : handleStartRecording}
      >
        <motion.div
          className={`absolute w-full h-full rounded-full ${
            isRecording ? 'bg-red-100/50' : 'bg-apple-blue/20'
          }`}
          animate={{
            scale: isRecording ? [1, 1.1, 1] : 1,
          }}
          transition={{
            repeat: isRecording ? Infinity : 0,
            duration: 2,
          }}
        />
        <FaMicrophone
          className={`w-12 h-12 sm:w-16 sm:h-16 ${
            isRecording ? 'text-red-500' : 'text-apple-blue'
          } z-10`}
        />
      </motion.div>
      
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 text-center">
        {isRecording
          ? "You're on! Maya's all ears 👂"
          : "Ready for a chat? Tap the mic! 🎙️"}
      </p>
      
      {isRecording && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-white rounded-lg shadow-sm w-full max-w-sm"
        >
          <p className="text-sm sm:text-base text-gray-600 text-center">
            Maya&apos;s tuning in to your awesome English! ✨
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default AudioChat;