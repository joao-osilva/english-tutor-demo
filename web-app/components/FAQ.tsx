"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { useTranslation } from '@/contexts/TranslationContext';

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-24 px-4 bg-gradient-to-b from-blue-50/50 to-white scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            {t.faq.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {t.faq.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faq.questions.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-blue-100 bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium hover:no-underline data-[state=open]:bg-gradient-to-r data-[state=open]:from-blue-600 data-[state=open]:to-purple-600 data-[state=open]:text-white group">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div className="mt-12 text-center">
          <p className="text-gray-600">
            {t.common.needHelp}{' '}
            <a 
              href="mailto:support@askmaya.com" 
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              {t.common.contactUs}
              <span className="text-xl">→</span>
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
