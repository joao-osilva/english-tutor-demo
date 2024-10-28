import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AudioChat } from './components/AudioChat';
import { AITutorInfo } from './components/AITutorInfo';

export const App = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="min-h-screen bg-apple-gray">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-6 sm:py-12">
        <section id="home">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Level Up Your English Game with Maya! 🚀
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 px-2">
              No textbooks. No boring lessons. Just fun chats with your AI bestie!
            </p>
          </motion.div>

          <AITutorInfo />
          <AudioChat isRecording={isRecording} setIsRecording={setIsRecording} />
        </section>

        <section id="features" className="mt-12 sm:mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center px-2">
            Why Students Love Maya
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2">
            {[
              {
                title: 'Smart & Adaptable',
                description: "Maya learns your style and grows with you. Like a friend who always knows what you need!"
              },
              {
                title: 'Zero Awkwardness',
                description: 'Make mistakes, learn, and laugh - Maya keeps it fun and pressure-free'
              },
              {
                title: 'Always Available',
                description: "Late-night study session? Early morning practice? Maya's got your back 24/7"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;