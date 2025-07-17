import React, { useState } from "react";
import { Phone, PhoneOff } from "lucide-react";
import * as LivekitClient from "livekit-client";

const livekitUrl = 'wss://agent-364qtybd.livekit.cloud';

const VoiceChatWidget = () => {
  const [status, setStatus] = useState<'idle' | 'connecting' | 'connected'>('idle');
  const [room, setRoom] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);

  async function fetchLivekitToken(agentName = 'agent10') {
    const endpoint = `http://localhost:5001/proxy/tokens/generate?agent_name=${agentName}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error('Token fetch failed');
    const data = await response.json();
    return { token: data.token, livekitUrl: data.livekit_url };
  }

  async function startCall() {
    if (status !== 'idle') return;
    setStatus('connecting');
    let token, livekitUrl;
    try {
      const tokenData = await fetchLivekitToken('agent10');
      token = tokenData.token;
      livekitUrl = tokenData.livekitUrl;
    } catch (e) {
      setStatus('idle');
      return;
    }
    const roomInstance = new LivekitClient.Room({
      audioCaptureDefaults: { autoGainControl: true, noiseSuppression: true },
    });
    setRoom(roomInstance);
    try {
      await roomInstance.connect(livekitUrl, token);
      setIsConnected(true);
      setStatus('connected');
      await publishMicrophone(roomInstance);
      // @ts-ignore
      roomInstance.on(LivekitClient.RoomEvent.TrackSubscribed, handleTrackSubscribed);
      // @ts-ignore
      roomInstance.on(LivekitClient.RoomEvent.Disconnected, handleDisconnect);
    } catch (e) {
      setStatus('idle');
      setIsConnected(false);
    }
  }

  async function publishMicrophone(roomInstance: any) {
    try {
      // @ts-ignore
      const localTrack = await LivekitClient.createLocalAudioTrack();
      await roomInstance.localParticipant.publishTrack(localTrack);
    } catch (e) {}
  }

  function handleTrackSubscribed(track: any) {
    if (track.kind === 'audio') {
      const audioElement = track.attach();
      audioElement.setAttribute('data-agent-audio', 'true');
      audioElement.autoplay = true;
      audioElement.muted = false;
      audioElement.volume = 1.0;
      document.body.appendChild(audioElement);
      audioElement.play().catch(() => {});
    }
  }

  function endCall() {
    if (!isConnected || !room) return;
    setStatus('idle');
    setIsConnected(false);
    room.disconnect();
    // Remove any attached agent audio elements
    const audioElements = document.querySelectorAll('audio[data-agent-audio]');
    audioElements.forEach(el => el.remove());
  }

  function handleDisconnect() {
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
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <button
        className={`flex items-center rounded-full px-6 h-12 transition-all shadow-lg focus:outline-none border border-teal-600
          ${status === 'connected' ? 'bg-red-500 hover:bg-red-600' : 'bg-teal-600 hover:bg-teal-700'}
        `}
        style={{ minWidth: '160px', maxWidth: '200px' }}
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