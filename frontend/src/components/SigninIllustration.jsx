import { motion } from 'framer-motion'
const SigninIllustration = ()=> {
  return (
    <div className="h-full w-full flex items-center justify-center bg-[#22223B] relative overflow-hidden rounded-r-xl">
      {/* Abstract Background Elements */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 0.08,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
        }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#C9ADA7] blur-3xl"
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 0.06,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: 'easeOut',
        }}
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#9A8C98] blur-3xl"
      />

      {/* Main SVG Illustration */}
      <svg
        viewBox="0 0 600 500"
        className="w-full max-w-lg drop-shadow-2xl z-10"
      >
        {/* Back Chat Window (Left) */}
        <motion.g
          initial={{
            x: -30,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          <rect
            x="80"
            y="120"
            width="200"
            height="280"
            rx="16"
            fill="#4A4E69"
            opacity="0.6"
          />
          <rect
            x="80"
            y="120"
            width="200"
            height="50"
            rx="16"
            fill="#9A8C98"
            opacity="0.8"
          />
          <rect
            x="80"
            y="150"
            width="200"
            height="20"
            fill="#9A8C98"
            opacity="0.8"
          />

          {/* Message bubbles in back window */}
          <rect
            x="100"
            y="190"
            width="120"
            height="30"
            rx="15"
            fill="#C9ADA7"
            opacity="0.4"
          />
          <rect
            x="140"
            y="235"
            width="100"
            height="30"
            rx="15"
            fill="#F2E9E4"
            opacity="0.3"
          />
          <rect
            x="100"
            y="280"
            width="140"
            height="30"
            rx="15"
            fill="#C9ADA7"
            opacity="0.4"
          />
        </motion.g>

        {/* Middle Chat Window */}
        <motion.g
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          <rect
            x="200"
            y="80"
            width="220"
            height="300"
            rx="18"
            fill="#4A4E69"
            opacity="0.8"
          />
          <rect
            x="200"
            y="80"
            width="220"
            height="55"
            rx="18"
            fill="#C9ADA7"
            opacity="0.9"
          />
          <rect
            x="200"
            y="115"
            width="220"
            height="20"
            fill="#C9ADA7"
            opacity="0.9"
          />

          {/* Active indicator */}
          <motion.circle
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
            }}
            cx="390"
            cy="107"
            r="6"
            fill="#22223B"
          />

          {/* Message bubbles */}
          <rect
            x="220"
            y="155"
            width="140"
            height="35"
            rx="17"
            fill="#9A8C98"
            opacity="0.5"
          />
          <rect
            x="270"
            y="205"
            width="120"
            height="35"
            rx="17"
            fill="#F2E9E4"
            opacity="0.8"
          />
          <rect
            x="220"
            y="255"
            width="160"
            height="35"
            rx="17"
            fill="#9A8C98"
            opacity="0.5"
          />
          <rect
            x="250"
            y="305"
            width="140"
            height="35"
            rx="17"
            fill="#F2E9E4"
            opacity="0.8"
          />
        </motion.g>

        {/* Front Chat Window (Right) */}
        <motion.g
          initial={{
            x: 30,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          <rect
            x="320"
            y="140"
            width="200"
            height="260"
            rx="16"
            fill="#4A4E69"
          />
          <rect
            x="320"
            y="140"
            width="200"
            height="50"
            rx="16"
            fill="#22223B"
          />
          <rect x="320" y="170" width="200" height="20" fill="#22223B" />

          {/* Notification Badge */}
          <motion.circle
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 1.2,
              type: 'spring',
              stiffness: 200,
              damping: 10,
            }}
            cx="500"
            cy="155"
            r="18"
            fill="#C9ADA7"
          />
          <motion.text
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.3,
            }}
            x="500"
            y="161"
            textAnchor="middle"
            fill="#22223B"
            fontSize="16"
            fontWeight="bold"
          >
            3
          </motion.text>

          {/* Message bubbles */}
          <rect
            x="340"
            y="210"
            width="100"
            height="30"
            rx="15"
            fill="#C9ADA7"
            opacity="0.6"
          />
          <rect
            x="380"
            y="255"
            width="120"
            height="30"
            rx="15"
            fill="#F2E9E4"
            opacity="0.9"
          />
          <rect
            x="340"
            y="300"
            width="140"
            height="30"
            rx="15"
            fill="#C9ADA7"
            opacity="0.6"
          />

          {/* Typing indicator */}
          <motion.g
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.4,
            }}
          >
            <rect
              x="340"
              y="350"
              width="80"
              height="30"
              rx="15"
              fill="#9A8C98"
              opacity="0.4"
            />
            <motion.circle
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }}
              cx="360"
              cy="365"
              r="4"
              fill="#F2E9E4"
            />
            <motion.circle
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: 0.2,
                ease: 'easeInOut',
              }}
              cx="380"
              cy="365"
              r="4"
              fill="#F2E9E4"
            />
            <motion.circle
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: 0.4,
                ease: 'easeInOut',
              }}
              cx="400"
              cy="365"
              r="4"
              fill="#F2E9E4"
            />
          </motion.g>
        </motion.g>

        {/* Floating Notification Icons */}
        <motion.g
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
        >
          <circle cx="140" cy="90" r="24" fill="#C9ADA7" opacity="0.9" />
          <path
            d="M 135 85 L 140 90 L 145 80"
            stroke="#22223B"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        <motion.g
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <circle cx="480" cy="420" r="20" fill="#9A8C98" opacity="0.8" />
          <rect
            x="472"
            y="413"
            width="16"
            height="14"
            rx="3"
            fill="#F2E9E4"
            opacity="0.9"
          />
        </motion.g>

        <motion.g
          animate={{
            y: [0, -8, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <circle cx="540" cy="200" r="18" fill="#22223B" opacity="0.7" />
          <circle cx="540" cy="200" r="10" fill="#C9ADA7" opacity="0.9" />
        </motion.g>

        {/* Connection Lines */}
        <motion.path
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: 1,
            opacity: 0.3,
          }}
          transition={{
            delay: 1.0,
            duration: 1.5,
            ease: 'easeInOut',
          }}
          d="M 180 260 Q 250 240 310 260"
          stroke="#9A8C98"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 5"
        />
        <motion.path
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: 1,
            opacity: 0.3,
          }}
          transition={{
            delay: 1.2,
            duration: 1.5,
            ease: 'easeInOut',
          }}
          d="M 310 280 Q 360 270 420 280"
          stroke="#C9ADA7"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 5"
        />
      </svg>

      {/* Bottom Text */}
      <div className="absolute bottom-8 text-center w-full px-8">
        <motion.h3
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
          }}
          className="text-2xl font-bold text-[#F2E9E4] mb-2"
        >
          Welcome Back
        </motion.h3>
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.7,
          }}
          className="text-[#9A8C98] text-sm"
        >
          Your conversations are waiting for you
        </motion.p>
      </div>
    </div>
  )
}
export default SigninIllustration;