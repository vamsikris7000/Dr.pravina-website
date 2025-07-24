import React, { useState, useEffect } from "react";
import { Phone, PhoneOff } from "lucide-react";
import * as LivekitClient from "livekit-client";

const VoiceChatWidget = () => {
  const [status, setStatus] = useState<'idle' | 'connecting' | 'connected'>('idle');
  const [room, setRoom] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [agents, setAgents] = useState<any[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<string>("");

  // Fetch agents on mount
  useEffect(() => {
    async function fetchAgents() {
      try {
        console.log("Fetching agents...");
        const response = await fetch("https://live.xpectrum-ai.com/agents/all", {
          method: "GET",
          headers: { "X-API-Key": "xpectrum-ai@123" },
        });
        if (!response.ok) {
          console.error("Failed to fetch agents:", response.status, response.statusText);
          throw new Error(`Failed to fetch agents: ${response.status}`);
        }
        const data = await response.json();
        console.log("Agents fetched:", data);
        setAgents(data);
        if (data.length > 0) setSelectedAgent(data[0].name || data[0].agent_name || "");
      } catch (e) {
        console.error("Error fetching agents:", e);
        setAgents([]);
      }
    }
    fetchAgents();
  }, []);

  async function fetchLivekitToken(agentName = 'agent2') {
    try {
      console.log("Fetching token for agent:", agentName);
      
      // Use proxy in development to avoid CORS
      const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const baseUrl = isDevelopment ? '/api/livekit' : 'https://multiagents.livekit.xpectrum-ai.com';
      
      // Try different endpoint structures
      const endpoints = [
        `${baseUrl}/tokens/generate?agent_name=${agentName}`,
        `${baseUrl}/api/tokens/generate?agent_name=${agentName}`,
        `${baseUrl}/proxy/tokens/generate?agent_name=${agentName}`
      ];
      
      let response;
      let lastError;
      
      for (const endpoint of endpoints) {
        try {
          console.log("Trying endpoint:", endpoint);
          response = await fetch(endpoint, {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json',
              'X-API-Key': 'xpectrum-ai@123'
            },
          });
          
          if (response.ok) {
            const data = await response.json();
            console.log("Token received:", data);
            return { token: data.token, livekitUrl: data.livekit_url || 'wss://agent-364qtybd.livekit.cloud' };
          } else {
            console.error(`Endpoint ${endpoint} failed:`, response.status, response.statusText);
            lastError = `HTTP ${response.status}: ${response.statusText}`;
          }
        } catch (e) {
          console.error(`Endpoint ${endpoint} error:`, e);
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
      const agentName = selectedAgent || 'agent2';
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Agent selection dropdown */}
      {status === 'idle' && agents.length > 0 && (
        <select
          className="mb-2 rounded-md border px-3 py-2 text-base bg-white text-gray-700 shadow"
          value={selectedAgent}
          onChange={e => setSelectedAgent(e.target.value)}
        >
          {agents.map((agent: any) => (
            <option key={agent.name || agent.agent_name} value={agent.name || agent.agent_name}>
              {agent.name || agent.agent_name}
            </option>
          ))}
        </select>
      )}
      
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
  );
};

export default VoiceChatWidget; 