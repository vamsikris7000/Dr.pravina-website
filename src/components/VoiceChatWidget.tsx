import React, { useState, useEffect, useRef } from "react";
import { Phone, PhoneOff } from "lucide-react";
import * as LivekitClient from "livekit-client";

const VoiceChatWidget = () => {
  const [status, setStatus] = useState<'idle' | 'connecting' | 'connected'>('idle');
  const [room, setRoom] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  async function fetchLivekitToken(agentName = 'agent1') {
    try {
      console.log("Fetching token for agent:", agentName);
      
      // Use proxy to avoid CORS issues in both development and production
      const baseUrl = '/api/voice-integration';
      
      // Use the exact format from the working curl command
      const endpoints = [
        {
          url: `${baseUrl}?path=tokens/generate&agent_name=${agentName}`,
          method: 'POST',
          body: null
        }
      ];
      
      let response;
      let lastError;
      
      for (const endpoint of endpoints) {
        try {
          console.log("Trying endpoint:", endpoint.url, "with method:", endpoint.method);
          
          const requestOptions = {
            method: endpoint.method,
            headers: { 
              'X-API-Key': 'xpectrum-ai@123'
            },
            ...(endpoint.body && { body: endpoint.body })
          };
          
          response = await fetch(endpoint.url, requestOptions);
          
          console.log("Response status:", response.status);
          console.log("Response headers:", response.headers);
          
          if (response.ok) {
            const data = await response.json();
            console.log("Token received:", data);
            return { token: data.token, livekitUrl: data.livekit_url || 'wss://agent-364qtybd.livekit.cloud' };
          } else {
            const errorText = await response.text();
            console.error(`Endpoint ${endpoint.url} failed:`, response.status, response.statusText, errorText);
            lastError = `HTTP ${response.status}: ${response.statusText} - ${errorText}`;
          }
        } catch (e) {
          console.error(`Endpoint ${endpoint.url} error:`, e);
          lastError = e.message;
        }
      }
      
      // If all endpoints fail, try a simple GET request to test connectivity
      try {
        console.log("Testing basic connectivity...");
        const testResponse = await fetch(`${baseUrl}/`, {
          method: 'GET',
          headers: { 'X-API-Key': 'xpectrum-ai@123' },
        });
        console.log("Basic connectivity test:", testResponse.status);
        const testText = await testResponse.text();
        console.log("Basic connectivity response:", testText);
      } catch (e) {
        console.error("Basic connectivity test failed:", e);
      }
      
      throw new Error(`All token endpoints failed. Last error: ${lastError}`);
      
    } catch (e) {
      console.error("Error fetching token:", e);
      throw e;
    }
  }

  async function startCall() {
    if (status !== 'idle') return;
    
    setStatus('connecting');
    
    let token, livekitUrl;
    try {
      const agentName = 'agent1'; // Always use agent1
      console.log("Starting call with agent:", agentName);
      
      const tokenData = await fetchLivekitToken(agentName);
      token = tokenData.token;
      livekitUrl = tokenData.livekitUrl;
      
      console.log("Connecting to LiveKit:", livekitUrl);
      
      const roomInstance = new LivekitClient.Room({
        audioCaptureDefaults: { autoGainControl: true, noiseSuppression: true },
      });
      setRoom(roomInstance);
      
      await roomInstance.connect(livekitUrl, token);
      console.log("Connected to room");
      
      setIsConnected(true);
      setStatus('connected');
      
      await publishMicrophone(roomInstance);
      
      // @ts-ignore
      roomInstance.on(LivekitClient.RoomEvent.TrackSubscribed, handleTrackSubscribed);
      // @ts-ignore
      roomInstance.on(LivekitClient.RoomEvent.Disconnected, handleDisconnect);
      
    } catch (e) {
      console.error("Error in startCall:", e);
      setStatus('idle');
      setIsConnected(false);
    }
  }

  async function publishMicrophone(roomInstance: any) {
    try {
      console.log("Publishing microphone...");
      // @ts-ignore
      const localTrack = await LivekitClient.createLocalAudioTrack();
      await roomInstance.localParticipant.publishTrack(localTrack);
      console.log("Microphone published");
    } catch (e) {
      console.error("Error publishing microphone:", e);
    }
  }

  function handleTrackSubscribed(track: any) {
    console.log("Track subscribed:", track.kind);
    if (track.kind === 'audio') {
      const audioElement = track.attach();
      audioElement.setAttribute('data-agent-audio', 'true');
      audioElement.autoplay = true;
      audioElement.muted = false;
      audioElement.volume = 1.0;
      document.body.appendChild(audioElement);
      audioElement.play().catch((e: any) => console.error("Error playing audio:", e));
    }
  }

  function endCall() {
    if (!isConnected || !room) return;
    console.log("Ending call...");
    setStatus('idle');
    setIsConnected(false);
    room.disconnect();
    // Remove any attached agent audio elements
    const audioElements = document.querySelectorAll('audio[data-agent-audio]');
    audioElements.forEach(el => el.remove());
  }

  function handleDisconnect() {
    console.log("Disconnected from room");
    setStatus('idle');
    setIsConnected(false);
    // Remove any attached agent audio elements
    const audioElements = document.querySelectorAll('audio[data-agent-audio]');
    audioElements.forEach(el => el.remove());
  }

  // UI rendering
  let buttonContent;
  if (status === 'idle') {
    buttonContent = (
      <span className="flex items-center gap-2 font-semibold tracking-wide text-white text-base"><Phone className="w-4 h-4" /> PHONE CALL</span>
    );
  } else if (status === 'connecting') {
    buttonContent = (
      <span className="flex items-center gap-2 font-semibold tracking-wide text-white text-base">Connecting...</span>
    );
  } else if (status === 'connected') {
    buttonContent = (
      <span className="flex items-center gap-2 font-semibold tracking-wide text-white text-base"><PhoneOff className="w-4 h-4" /> END CALL</span>
    );
  }

  return (
    <>
      {/* Desktop version - full button */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-2">
        <button
          className="flex items-center justify-center rounded-full px-6 h-12 transition-all shadow-lg focus:outline-none text-white font-semibold hover:scale-105"
          style={{ 
            minWidth: (status === 'connected' || status === 'connecting') ? '180px' : '160px', 
            maxWidth: (status === 'connected' || status === 'connecting') ? '220px' : '200px',
            backgroundColor: status === 'connected' ? '#ef4444' : '#0d9488',
            border: status === 'connected' ? '1px solid #ef4444' : '1px solid #0d9488'
          }}
          onClick={status === 'connected' ? endCall : startCall}
          disabled={status === 'connecting'}
          aria-label={status === 'connected' ? 'End call' : 'Start phone call'}
        >
          {buttonContent}
        </button>
      </div>

      {/* Mobile version - just the phone icon */}
      <div className="lg:hidden">
        <button
          className="flex items-center justify-center rounded-full w-10 h-10 transition-all shadow-lg focus:outline-none text-white font-semibold hover:scale-105"
          style={{ 
            backgroundColor: status === 'connected' ? '#ef4444' : '#0d9488',
            border: status === 'connected' ? '1px solid #ef4444' : '1px solid #0d9488'
          }}
          onClick={status === 'connected' ? endCall : startCall}
          disabled={status === 'connecting'}
          aria-label={status === 'connected' ? 'End call' : 'Start phone call'}
        >
          {status === 'connected' ? <PhoneOff className="w-5 h-5" /> : <Phone className="w-5 h-5" />}
        </button>
      </div>
    </>
  );
};

export default VoiceChatWidget; 