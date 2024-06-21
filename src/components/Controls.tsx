"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";

export default function Controls() {
  const { connect, disconnect, readyState } = useVoice();

  if (readyState === VoiceReadyState.OPEN) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <button
          className="px-4 py-2 border rounded-lg text-black font-semibold"
          onClick={() => {
            disconnect();
          }}
        >
          End Session
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <h1 className="text-3xl mb-4 text-black">Talk to an Oxford student</h1>
      
      <p className="text-black mb-6">Press the Start Session button to talk, please keep in mind to wait a second or two after your response, to account for inference.</p>
      <button
        className="px-4 py-2 border rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => {
          connect()
           .then(() => {
              /* handle success */
            })
           .catch(() => {
              /* handle error */
            });
        }}
      >
        Start Session
      </button>
    </div>
  );
}
