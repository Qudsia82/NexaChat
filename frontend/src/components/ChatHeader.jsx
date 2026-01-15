import { X, XIcon } from "lucide-react";
import { useChatStore } from "../store/chatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const online = onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);

    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div
      className="relative h-[84px] px-6 flex items-center justify-between border-b-2 border-[#9A8C98] overflow-hidden"
      style={{
        background: "rgba(74, 78, 105, 0.8)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center space-x-3 relative z-10">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
            <img
              src={selectedUser.userprofilepic || "/avatar.png"}
              alt={selectedUser.username}
              className="w-full h-full object-cover"
            />
          </div>
          {online && (
            <div
              className="absolute -bottom-0 -right-0 w-3 h-3 rounded-full border border-[#6a994e]"
              style={{
                background: "#6a994e",
              }}
            ></div>
          )}
        </div>
        <div>
          <h3 className="text-[#F2E9E4] font-semibold text-lg tracking-wide">
            {selectedUser.username}
          </h3>
          <p
            className={`${
              online ? "text-[#C9ADA7]" : "text-[#C9ADA7]"
            } text-sm font-medium`}
          >
            {online ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <button
        onClick={() => setSelectedUser(null)}
        className="relative z-10 p-2 rounded-lg transition-all duration-200 hover:bg-[#9A8C98] hover:scale-110 group"
      >
        <X className="w-5 h-5 text-[#C9ADA7] group-hover:text-[#22223B]" />
      </button>
    </div>
  );
};

export default ChatHeader;
