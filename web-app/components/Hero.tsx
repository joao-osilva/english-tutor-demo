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
    <section id="home" className="min-h-[90vh] relative flex items-center pt-20 sm:pt-24">
      <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {t.hero.title}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

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

          <div className="relative lg:block">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-4 sm:p-8 shadow-xl">
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
          </div>
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