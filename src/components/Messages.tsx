"use client";
import { useVoice } from "@humeai/voice-react";
export default function Messages() {
  const { messages } = useVoice();

  return (
    <div>
      {messages.map((msg:any, index:any) => {
        if (msg.type === "user_message" || msg.type === "assistant_message") {
          return (
            <div key={msg.type + index} className="text-gray-700">
              <div>{msg.message.role}</div>
              <div>{msg.message.content}</div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
