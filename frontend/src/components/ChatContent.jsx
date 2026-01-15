import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/authStore";
import { useChatStore } from "../store/chatStore";
import ChatHeader from "./ChatHeader";
import EmptyChat from "./EmptyChat";
import Input from "./Input";
import MessagesLoadingState from "./MessagesLoadingState";
const ChatContent = () => {
  const {
    selectedUser,
    getMessagesById,
    messages,
    isMessagesLoading,
    disconnectMessageStream,
    connectMessageStream,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessagesById(selectedUser._id);
    connectMessageStream();

    return () => disconnectMessageStream();
  }, [
    selectedUser,
    getMessagesById,
    connectMessageStream,
    disconnectMessageStream,
  ]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <>
      <ChatHeader />
      <div className="flex-1 px-6 overflow-y-auto py-8 bg-gradient-to-b from-chat-dark to-chat-secondary">
        {messages.length > 0 && !isMessagesLoading ? (
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`flex ${
                  msg.senderId === authUser._id
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`relative max-w-[75%] rounded-2xl px-4 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                    msg.senderId === authUser._id
                      ? "bg-chat-accent/90 text-chat-light rounded-br-md"
                      : "bg-chat-secondary/90 text-chat-light border border-chat-accent/30 rounded-bl-md"
                  }`}
                >
                  {msg.image && (
                    <div className="mb-2 overflow-hidden rounded-xl border-2 border-chat-highlight/40">
                      <img
                        src={msg.image}
                        alt="Shared"
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  {msg.text && (
                    <p className="text-sm leading-relaxed break-words">
                      {msg.text}
                    </p>
                  )}
                  <div className="flex items-center justify-end gap-1.5 mt-2">
                    <span className="text-[10px] text-chat-highlight/80 font-medium">
                      {new Date(msg.createdAt).toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    {msg.senderId === authUser._id && (
                      <svg
                        className="w-3.5 h-3.5 text-chat-highlight"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
        ) : isMessagesLoading ? (
          <MessagesLoadingState />
        ) : (
          <EmptyChat name={selectedUser.username} />
        )}
      </div>
      <Input />
    </>
  );
};

export default ChatContent;
