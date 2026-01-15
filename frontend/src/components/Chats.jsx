import { useEffect } from "react";
import { useChatStore } from "../store/chatStore.js";
import EmptyChatState from "./EmptyChatState.jsx";
import FriendsLoadingState from "./FriendsLoadingState.jsx";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore.js";

const Chats = () => {
  const [isHovered, setIsHovered] = useState(false);

  const { getChatPartners, chats, isUsersLoading, setSelectedUser } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  useEffect(() => {
    getChatPartners();
  }, [getChatPartners]);

  if (isUsersLoading) return <FriendsLoadingState />;
  if (chats.length === 0) return <EmptyChatState />;
  return (
    <>
      {chats.map((chat) => (
        <motion.div
          key={chat._id}
          className="relative group cursor-pointer"
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 1 * 0.05,
            duration: 0.3,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={() => setSelectedUser(chat)}
        >
          {/* Main card */}
          <motion.div className="relative rounded-2xl p-4 overflow-hidden">
            <div className="flex items-center gap-4 relative z-10">
              {/* Avatar with online indicator */}
              <div className="relative">
                <motion.div
                  className="relative w-14 h-14 rounded-full overflow-hidden"
                  style={{
                    ringColor: isHovered ? "#C9ADA7" : "#9A8C98",
                  }}
                >
                  <img
                    src={chat.userprofilepic || "/avatar.png"}
                    alt={chat.username}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Online indicator */}
                {onlineUsers.includes(chat._id) && (
                  <div className="absolute bottom-0 right-1">
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: "#6a994e",
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <motion.h4
                    className="font-semibold truncate"
                    style={{
                      color: isHovered ? "#F2E9E4" : "#F2E9E4",
                    }}
                    animate={{
                      x: isHovered ? 2 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {chat.username}
                  </motion.h4>
                </div>

                {/* Status text */}
                <motion.p
                  className="text-sm"
                  style={{
                    color: "#9A8C98",
                  }}
                  animate={{
                    color: onlineUsers.includes(chat._id)
                      ? "#6a994e"
                      : isHovered
                      ? "#C9ADA7"
                      : "#9A8C98",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {onlineUsers.includes(chat._id) ? "Online" : "Offline"}
                </motion.p>
              </div>

              {/* Chevron indicator */}
              <motion.div
                animate={{
                  x: isHovered ? 4 : 0,
                  opacity: isHovered ? 1 : 0.3,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{
                    color: "#C9ADA7",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default Chats;
