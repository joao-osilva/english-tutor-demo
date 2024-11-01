"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslation } from '@/contexts/TranslationContext';

const PricingCard = ({ 
  title, 
  subtitle, 
  price, 
  credits, 
  features, 
  isFeatured = false,
  delay = 0
}) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-2xl p-8 ${
        isFeatured 
          ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl' 
          : 'bg-white/80 backdrop-blur-sm shadow-lg'
      } flex flex-col h-full`}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className={`mt-2 ${isFeatured ? 'text-blue-100' : 'text-gray-600'}`}>{subtitle}</p>
      </div>
      
      <div className="mb-8">
        {price ? (
          <>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">R${price}</span>
              <span className={`ml-2 ${isFeatured ? 'text-blue-100' : 'text-gray-600'}`}>
                {t.pricing.cta.paid}
              </span>
            </div>
            <div className={`mt-2 ${isFeatured ? 'text-blue-100' : 'text-gray-600'}`}>
              {credits} {t.pricing.credits.amount} = {credits / 60} {t.pricing.credits.hours}
            </div>
          </>
        ) : (
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">{t.pricing.cta.free}</span>
            <span className="ml-2 text-gray-600">{t.pricing.credits.free}</span>
          </div>
        )}
      </div>

      <div className="flex-grow">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isFeatured ? 'text-blue-100' : 'text-blue-600'}`} />
              <span className={isFeatured ? 'text-blue-50' : 'text-gray-600'}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className={`mt-8 w-full rounded-full py-3 px-4 font-semibold transition-all
        ${isFeatured 
          ? 'bg-white text-blue-600 hover:bg-blue-50' 
          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90'
        } shadow-sm`}>
        {price ? t.pricing.cta.paid : t.pricing.cta.free}
      </button>
    </motion.div>
  );
};

export default function Pricing() {
  const { t } = useTranslation();
  
  const plans = [
    {
      title: t.pricing.plans[0].title,
      subtitle: t.pricing.plans[0].subtitle,
      credits: 5,
      features: t.pricing.plans[0].features
    },
    {
      title: t.pricing.plans[1].title,
      subtitle: t.pricing.plans[1].subtitle,
      price: 20,
      credits: 60,
      features: t.pricing.plans[1].features,
      isFeatured: true
    },
    {
      title: t.pricing.plans[2].title,
      subtitle: t.pricing.plans[2].subtitle,
      price: 75,
      credits: 240,
      features: t.pricing.plans[2].features
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-white to-blue-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {t.pricing.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              {...plan} 
              delay={index * 0.2} 
            />
          ))}
        </div>

        <motion.div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            {t.pricing.footer.creditInfo}<br />
            {t.pricing.footer.paymentInfo}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
