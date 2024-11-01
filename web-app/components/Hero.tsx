"use client";

import { LiveKitRoom, useVoiceAssistant, RoomAudioRenderer, DisconnectButton } from "@livekit/components-react";
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic, X as CloseIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from '@/contexts/TranslationContext';

export default function Hero() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [connectionDetails, updateConnectionDetails] = useState(undefined);
  const [agentState, setAgentState] = useState("disconnected");

  const onConnectButtonClicked = useCallback(async () => {
    try {
      setAgentState("connecting");
      const url = new URL(
        process.env.NEXT_PUBLIC_CONN_DETAILS_ENDPOINT ?? "/api/connection-details",
        window.location.origin
      );
      const response = await fetch(url.toString());
      const connectionDetailsData = await response.json();
      updateConnectionDetails(connectionDetailsData);
    } catch (error) {
      console.error('Connection error:', error);
      setAgentState("disconnected");
    }
  }, [toast]);

  return (
    <section id="home" className="min-h-[90vh] relative flex items-center pt-20 sm:pt-24 overflow-hidden">
      {/* Gradient Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          {/* Top-right decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-10 right-[10%] w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          />

          {/* Bottom-left decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            className="absolute bottom-10 -left-20 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          />

          {/* Center decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"
          />
        </div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="text-center lg:text-left space-y-6">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t.hero.title}
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t.hero.subtitle}
            </motion.p>

            <div className="flex flex-col items-center space-y-8">           
              <LiveKitRoom
                token={connectionDetails?.participantToken}
                serverUrl={connectionDetails?.serverUrl}
                connect={connectionDetails !== undefined}
                audio={true}
                video={false}
                onDisconnected={() => {
                  updateConnectionDetails(undefined);
                  setAgentState("disconnected");
                }}
                onError={(error) => {
                  console.error('LiveKit Error:', error);
                  setAgentState("disconnected");
                }}
                onConnected={() => {
                  console.log('Connected to LiveKit room');
                  setAgentState("connected");
                }}
              >
                <SimpleVoiceAssistant onStateChange={setAgentState} />
                <ControlBar
                  onConnectButtonClicked={onConnectButtonClicked}
                  agentState={agentState}
                  updateConnectionDetails={updateConnectionDetails}
                  setAgentState={setAgentState}
                />
                <RoomAudioRenderer />
              </LiveKitRoom>

              {/* Status messages */}
              <motion.p 
                className="text-gray-400 text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {agentState === "disconnected" && t.hero.status.disconnected}
                {agentState === "connecting" && t.hero.status.connecting}
                {agentState === "connected" && t.hero.status.connected}
                {agentState === "speaking" && t.hero.status.speaking}
                {agentState === "listening" && t.hero.status.listening}
              </motion.p>
            </div>
          </div>

          {/* Right column */}
          <motion.div 
            className="relative lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-xl border border-white/20">
              <div className="space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs sm:text-sm">🎙️</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 bg-white/80 rounded-lg p-2 sm:p-3">
                    {t.hero.demo.userQuestion}
                  </p>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs sm:text-sm">🎯</span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 bg-white/80 rounded-lg p-2 sm:p-3">
                    {t.hero.demo.mayaResponse}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Update SimpleVoiceAssistant component with animations
function SimpleVoiceAssistant({ onStateChange }) {
  const { state } = useVoiceAssistant();
  
  useEffect(() => {
    if (state) {
      onStateChange(state);
    }
  }, [onStateChange, state]);

  return null;
}

// Update ControlBar component with translations
function ControlBar({ onConnectButtonClicked, agentState, updateConnectionDetails, setAgentState }) {
  const { t } = useTranslation();
  
  return (
    <div className="relative h-[100px] flex items-center justify-center">
      {agentState === "disconnected" && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onConnectButtonClicked}
          className="flex items-center gap-2 px-8 py-3 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full transition-colors"
        >
          <Mic className="w-5 h-5" />
          {t.hero.startConversation}
        </motion.button>
      )}

      {agentState !== "disconnected" && (
        <DisconnectButton>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-[#ff3b30] hover:bg-[#ff453a] text-white px-8 py-3 rounded-full transition-colors flex items-center gap-2"
          >
            <CloseIcon className="w-5 h-5" />
            {t.hero.endConversation}
          </motion.button>
        </DisconnectButton>
      )}
    </div>
  );
}