import { useChatStore } from "../store/chatStore.js";
import { MessageSquare, Users } from "lucide-react";
import { motion } from "framer-motion";
const FocusedTab = () => {
  const { activeTab, setActiveTab } = useChatStore();
  const tabs = [
    {
      id: "chats",
      label: "Chats",
      icon: MessageSquare,
    },
    {
      id: "contacts",
      label: "Contacts",
      icon: Users,
    },
  ];
  return (
    <div className="p-4">
      <div
        className="relative inline-flex rounded-xl p-1 w-full justify-center"
        style={{
          backgroundColor: "#4A4E69",
        }}
      >
        {/* Animated background indicator */}
        <motion.div
          className="absolute top-1 bottom-1 rounded-lg"
          style={{
            backgroundColor: "#9A8C98",
            boxShadow: "0 4px 12px rgba(201, 173, 167, 0.3)",
          }}
          initial={false}
          animate={{
            left: activeTab === "chats" ? 4 : "50%",
            width: "calc(50% - 4px)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-200 flex items-center gap-2 min-w-[120px] justify-center"
              style={{
                color: isActive ? "#22223B" : "#9A8C98",
              }}
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                color: isActive ? "#22223B" : "#C9ADA7",
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1 : 0.9,
                  rotate: isActive ? 0 : -5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              >
                <Icon className="size-4" />
              </motion.div>
              <span>{tab.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
export default FocusedTab;
