"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import Controls from "./Controls";

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  return (
    <VoiceProvider auth={{ type: "accessToken", value: accessToken }}
    configId={'0bde233b-57c2-4909-b5c4-394fd13b95af'}>
      <Messages />
      <Controls />
    </VoiceProvider>
  );
}

