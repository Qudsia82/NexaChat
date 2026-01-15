import { MessageCircleIcon } from "lucide-react";

const EmptyConversation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-gradient-to-br from-chat-dark via-chat-secondary to-chat-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-chat-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-chat-highlight rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-br from-chat-accent to-chat-highlight rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="relative size-24 bg-gradient-to-br from-chat-accent/30 to-chat-highlight/30 rounded-3xl flex items-center justify-center border-2 border-chat-accent/40 backdrop-blur-sm shadow-2xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <MessageCircleIcon
              className="size-12 text-chat-light drop-shadow-lg"
              strokeWidth={1.5}
            />
          </div>
          {/* Decorative dots */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-chat-highlight rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-chat-accent rounded-full shadow-lg animate-pulse delay-150"></div>
        </div>

        {/* Text content */}
        <div className="space-y-3 max-w-md">
          <h3 className="text-2xl font-bold text-chat-light mb-2 tracking-tight">
            No Conversation Selected
          </h3>
          <p className="text-chat-highlight/80 text-sm leading-relaxed px-4">
            Choose a contact from the sidebar to start a new conversation or
            continue where you left off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyConversation;
