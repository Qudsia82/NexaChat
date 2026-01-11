import { useEffect } from "react";
import { useChatStore } from "../store/chatStore.js";
import FriendsLoadingState from "./FriendsLoadingState.jsx";
import { motion } from "framer-motion";
import { useState } from "react";

const Contacts = () => {
  const { getAllContacts, allContacts, setSelectedUser, isUserLoading } =
    useChatStore();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUserLoading) return <FriendsLoadingState />;
  return (
    <>
      {allContacts.map((contact) => (
        <motion.div
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
          onClick={() => setSelectedUser(contact)}
        >
          {/* Main card */}
          <motion.div
            className="relative rounded-xl p-2 overflow-hidden"
            style={{
              backgroundColor: "#4A4E69",
            }}
            animate={{
              backgroundColor: isHovered ? "#4A4E69" : "#4A4E69",
            }}
          >
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
                    src={contact.userprofilepic || "/avatar.png"}
                    alt={contact.username}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Online indicator */}
                <div className="absolute bottom-1 right-1">
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: "#6a994e",
                    }}
                  />
                </div>
              </div>

              {/* Chat info */}
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
                    {contact.username}
                  </motion.h4>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default Contacts;
