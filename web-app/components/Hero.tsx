"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Hero() {
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();

  const handleMicClick = () => {
    setIsListening(!isListening);
    toast({
      title: isListening ? "Catch you later! 👋" : "Let's rock! 🎸",
      description: isListening 
        ? "You're getting better every day! Keep it up! ⭐" 
        : "Just chat away - Maya's all ears! 🎯",
      duration: 3000,
    });
  };

  return (
    <section id="home" className="min-h-[90vh] relative flex items-center pt-20 sm:pt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-70" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070')] bg-cover bg-center opacity-10" />
      </div>

      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Ready to speak<br />
              like a pro?
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Hey there! 👋 I'm Maya, your AI speaking buddy. No boring textbooks - just fun chats! Let's get talking! ✨
            </p>

            <Button
              size="lg"
              onClick={handleMicClick}
              className={`${
                isListening 
                  ? "bg-red-500 hover:bg-red-600" 
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto`}
            >
              {isListening ? (
                <>
                  <MicOff className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Take a Break
                </>
              ) : (
                <>
                  <Mic className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Let's Talk!
                </>
              )}
            </Button>
          </div>

          <div className="relative lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs sm:text-sm">🎙️</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 bg-white/80 rounded-lg p-2 sm:p-3">"Hey Maya! Help me sound more natural?"</p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs sm:text-sm">🎯</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 bg-white/80 rounded-lg p-2 sm:p-3">"You got it! Let's make you sound like a native! Try this..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}