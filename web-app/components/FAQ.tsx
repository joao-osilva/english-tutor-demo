"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What is Maya?",
    answer: "Maya is your AI speaking buddy that helps you practice English conversation. She's available 24/7 and adapts to your level! 🤖✨"
  },
  {
    question: "How do credits work?",
    answer: "Simple! 1 credit = 1 minute of conversation with Maya. Your credits never expire, so practice at your own pace! ⏱️"
  },
  {
    question: "How do I pay?",
    answer: "We use PIX for instant, secure payments. Just scan the code with your banking app and start chatting! 🏦"
  },
  {
    question: "Can I try before buying?",
    answer: "Of course! Get 5 free minutes to chat with Maya. No credit card needed - just start talking! 🎉"
  },
  {
    question: "What can I talk about?",
    answer: "Anything you like! Maya can discuss daily life, hobbies, travel, work, or any topic you're interested in! 💭"
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 bg-gradient-to-b from-blue-50/50 to-white scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            Quick Answers 
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know 💬
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
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
            Need help?{' '}
            <a 
              href="mailto:support@askmaya.com" 
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Contact us 
              <span className="text-xl">→</span>
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
