import { MessageCircleIcon, Sparkles } from 'lucide-react'

const EmptyChat = ({name}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-gradient-to-b from-chat-dark/50 to-chat-secondary/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-chat-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chat-highlight rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl">
        {/* Animated icon */}
        <div className="relative mb-6 inline-block">
          <div className="absolute inset-0 bg-gradient-to-br from-chat-accent/40 to-chat-highlight/40 rounded-2xl blur-lg animate-pulse"></div>
          <div className="relative w-20 h-20 bg-gradient-to-br from-chat-accent/20 to-chat-highlight/20 rounded-2xl flex items-center justify-center border border-chat-accent/30 backdrop-blur-sm shadow-xl">
            <MessageCircleIcon className="size-10 text-chat-highlight" strokeWidth={1.5} />
          </div>
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-5 h-5 text-chat-accent animate-pulse" />
          </div>
        </div>

        {/* greeting */}
        <div className="mb-6 space-y-3">
          <h3 className="text-2xl font-bold text-chat-light">
            Start chatting with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-chat-accent to-chat-highlight">
              {name}
            </span>
          </h3>
          
          <p className="text-chat-highlight/70 text-sm leading-relaxed max-w-md mx-auto">
            This is the start of something great. Break the ice with typing in the message box below to share your thoughts
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-8 gap-3">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-chat-accent/40 to-transparent"></div>
          <div className="w-2 h-2 rounded-full bg-chat-highlight/40"></div>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-chat-highlight/40 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}

export default EmptyChat