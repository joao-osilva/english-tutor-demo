"use client";

import { Brain, Mic, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from '@/contexts/TranslationContext';

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 // Stagger effect
      }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-300 ease-out" />
      <div className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out">
        <motion.div 
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 sm:mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Mic className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />,
      title: t.features.items[0].title,
      description: t.features.items[0].description
    },
    {
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />,
      title: t.features.items[1].title,
      description: t.features.items[1].description
    },
    {
      icon: <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-pink-500" />,
      title: t.features.items[2].title,
      description: t.features.items[2].description
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500" />,
      title: t.features.items[3].title,
      description: t.features.items[3].description
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-white to-blue-50/50 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
            whileInView={{ 
              backgroundPosition: ["0%", "100%"],
              opacity: [0, 1]
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            {t.features.title}
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.features.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 px-4">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}