import { MessageCircle, Sparkles, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { useChatStore } from '../store/chatStore'
const EmptyChatState = () => {
  const { setActiveTab } = useChatStore()
  // Floating bubble positions
  const bubbles = [
    {
      size: 40,
      delay: 0,
      x: -60,
      y: -40,
    },
    {
      size: 32,
      delay: 0.2,
      x: 50,
      y: -30,
    },
    {
      size: 28,
      delay: 0.4,
      x: -40,
      y: 40,
    },
    {
      size: 36,
      delay: 0.6,
      x: 60,
      y: 35,
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center py-11 px-6 text-center relative overflow-hidden">
      {/* Ambient background glow */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, #C9ADA7 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main icon container with floating bubbles */}
      <div className="relative mb-8">
        {/* Floating message bubbles */}
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            className="absolute rounded-2xl"
            style={{
              width: bubble.size,
              height: bubble.size,
              backgroundColor: '#9A8C98',
              opacity: 0.2,
              left: '50%',
              top: '50%',
            }}
            initial={{
              scale: 0,
              x: 0,
              y: 0,
            }}
            animate={{
              scale: [0, 1, 1],
              x: [0, bubble.x, bubble.x],
              y: [0, bubble.y, bubble.y],
              rotate: [0, 360],
            }}
            transition={{
              duration: 1.2,
              delay: bubble.delay,
              ease: 'easeOut',
            }}
          >
            {/* Inner shimmer */}
            <motion.div
              className="absolute inset-1 rounded-xl"
              style={{
                backgroundColor: '#C9ADA7',
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: bubble.delay,
              }}
            />
          </motion.div>
        ))}

        {/* Central icon with glow */}
        <motion.div
          className="relative w-24 h-24 rounded-3xl flex items-center justify-center"
          style={{
            backgroundColor: '#4A4E69',
            boxShadow: '0 8px 32px rgba(201, 173, 167, 0.3)',
          }}
          initial={{
            scale: 0,
            rotate: -180,
          }}
          animate={{
            scale: 1,
            rotate: 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            delay: 0.2,
          }}
        >
          {/* Rotating glow ring */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `conic-gradient(from 0deg, transparent, #C9ADA7, transparent)`,
              opacity: 0.4,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Icon */}
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <MessageCircle
              className="w-12 h-12 relative z-10"
              style={{
                color: '#C9ADA7',
              }}
            />
          </motion.div>

          {/* Sparkle effects */}
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: i === 0 ? '10%' : '70%',
                right: i === 0 ? '15%' : '10%',
              }}
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 1,
                ease: 'easeInOut',
              }}
            >
              <Sparkles
                className="w-4 h-4"
                style={{
                  color: '#C9ADA7',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Text content with staggered entrance */}
      <motion.div
        className="space-y-3 mb-8"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 0.5,
        }}
      >
        <h4
          className="text-xl font-semibold"
          style={{
            color: '#F2E9E4',
          }}
        >
          Your inbox is waiting
        </h4>
        <p
          className="text-sm max-w-xs mx-auto leading-relaxed"
          style={{
            color: '#9A8C98',
          }}
        >
          Start meaningful conversations by connecting with your contacts
        </p>
      </motion.div>

      {/* Interactive CTA button */}
      <motion.button
        onClick={() => setActiveTab('contacts')}
        className="group relative px-6 py-3 rounded-xl font-medium text-sm overflow-hidden"
        style={{
          backgroundColor: '#9A8C98',
          color: '#22223B',
        }}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
          duration: 0.5,
        }}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 -translate-x-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(242, 233, 228, 0.3), transparent)',
          }}
          whileHover={{
            translateX: '200%',
            transition: {
              duration: 0.6,
            },
          }}
        />

        <span className="relative flex items-center gap-2">
          <Users className="w-4 h-4" />
          Find contacts
        </span>
      </motion.button>

      {/* Floating particles in background */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: '#9A8C98',
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  )
}
export default EmptyChatState
