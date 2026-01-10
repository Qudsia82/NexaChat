import { motion } from 'framer-motion';

export function ChatIllustration() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-chat-light relative rounded-l-xl">
      {/* Abstract Background Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-10 left-10 rounded-full bg-chat-highlight blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-chat-secondary blur-3xl"
      />

      {/* Main Illustration */}
      <svg viewBox="0 0 600 500" className="w-full max-w-lg drop-shadow-xl z-10">
        {/* Device Frame */}
        <motion.rect
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          x="100" y="5" width="400" height="400" rx="24" 
          fill="#F2E9E4" stroke="#4A4E69" strokeWidth="8"
        />
        
        {/* Header Bar */}
        <motion.rect
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          x="100" y="5" width="400" height="60" rx="24" 
          className="fill-chat-secondary"
        />
        <rect x="100" y="35" width="400" height="30" fill="#4A4E69" /> {/* Square off bottom corners of header */}
        
        {/* Chat Bubbles */}
        
        {/* Left Bubble 1 */}
        <motion.g
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <path d="M140 150 H 300 A 20 20 0 0 1 320 170 V 200 A 20 20 0 0 1 300 220 H 140 A 20 20 0 0 1 120 200 V 170 A 20 20 0 0 1 140 150" fill="#9A8C98" opacity="0.2" transform="translate(0, -40)" />
          <rect x="140" y="130" width="120" height="10" rx="5" fill="#4A4E69" opacity="0.6" />
          <rect x="140" y="150" width="80" height="10" rx="5" fill="#4A4E69" opacity="0.4" />
        </motion.g>

        {/* Right Bubble 1 */}
        <motion.g
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <path d="M460 240 H 280 A 20 20 0 0 0 260 260 V 290 A 20 20 0 0 0 280 310 H 460 A 20 20 0 0 0 480 290 V 260 A 20 20 0 0 0 460 240" fill="#4A4E69" transform="translate(0, -40)" />
          <rect x="290" y="220" width="140" height="10" rx="5" fill="#F2E9E4" opacity="0.9" />
          <rect x="290" y="240" width="100" height="10" rx="5" fill="#F2E9E4" opacity="0.7" />
        </motion.g>

        {/* Left Bubble 2 */}
        <motion.g
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >

          <path d="M140 330 H 340 A 20 20 0 0 1 360 350 V 380 A 20 20 0 0 1 340 400 H 140 A 20 20 0 0 1 120 380 V 350 A 20 20 0 0 1 140 330" fill="#C9ADA7" opacity="0.3" transform="translate(0, -40)"/>
          <rect x="140" y="310" width="160" height="10" rx="5" fill="#22223B" opacity="0.6" />
          <rect x="140" y="330" width="100" height="10" rx="5" fill="#22223B" opacity="0.4" />
        </motion.g>

        {/* Floating Elements */}
        <motion.circle 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          cx="450" cy="120" r="30" fill="#C9ADA7" opacity="0.8" 
        />
        <motion.circle 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          cx="150" cy="400" r="20" fill="#22223B" opacity="0.6" 
        />
        <motion.circle 
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
          cx="520" cy="350" r="15" fill="#9A8C98" 
        />
      </svg>
      
      <div className="absolute bottom-4 text-center w-full px-8">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-2xl font-bold text-chat-dark"
        >
          Join the Conversation
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-chat-secondary"
        >
          Create an account to start chatting.
        </motion.p>
      </div>
    </div>
  );
}
