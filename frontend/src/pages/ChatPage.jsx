import AccountHeader from "../components/AccountHeader";
import ChatContent from "../components/ChatContent";
import Chats from "../components/Chats";
import Contacts from "../components/Contacts";
import EmptyConversation from "../components/EmptyConversation";
import FocusedTab from "../components/FocusedTab";
import { useChatStore } from "../store/chatStore";

const ChatPage = () => {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="relative w-full max-w-5xl h-[550px] ">
    <div className="w-full h-full flex overflow-hidden rounded-xl">
      <div className="w-80 bg-chat-dark backdrop-blur-sm flex flex-col">
        <AccountHeader />
        <FocusedTab />
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {activeTab === "chats" ? <Chats /> : <Contacts />}
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-chat-accent backdrop-blur-sm">
        {selectedUser ? <ChatContent /> : <EmptyConversation />}
      </div>
      </div>
    </div>
  );
};

export default ChatPage;
