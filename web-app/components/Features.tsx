import { Brain, Mic, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: <Mic className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />,
    title: "Just Chat Away!",
    description: "No typing, no rules - just speak and have fun! It's that easy! 🎙️"
  },
  {
    icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />,
    title: "Smart & Friendly",
    description: "Maya's got your back! Get cool tips to sound more natural 🎯"
  },
  {
    icon: <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-500" />,
    title: "Anytime, Anywhere",
    description: "Practice on the bus, at home, or while making coffee! ✨"
  },
  {
    icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-rose-500" />,
    title: "Quick Progress",
    description: "Watch your confidence grow with every chat! ⚡"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Why You'll Love Me
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Learning English has never been this fun! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-300 ease-out" />
              <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out">
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 sm:mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}