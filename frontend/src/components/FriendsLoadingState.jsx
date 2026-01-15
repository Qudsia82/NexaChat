import { motion } from 'framer-motion'
const FriendsLoadingState = () => {
  return (
    <div className="space-y-3 p-2">
      {[1, 2, 3,4,5].map((item, index) => (
        <motion.div
          key={item}
          className="relative overflow-hidden rounded-2xl p-4"
          style={{
            backgroundColor: '#4A4E69',
          }}
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: index * 0.1,
            duration: 0.4,
            ease: 'easeOut',
          }}
        >
          <motion.div
            className="absolute inset-0 -translate-x-full"
            style={{
              background: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(201, 173, 167, 0.1) 50%, 
                transparent 100%)`,
            }}
            animate={{
              translateX: ['100%', '200%'],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: 'easeInOut',
            }}
          />

          <div className="flex items-center space-x-4">
            <motion.div
              className="relative w-14 h-14 rounded-full"
              style={{
                backgroundColor: '#9A8C98',
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.div
                className="absolute inset-2 rounded-full"
                style={{
                  backgroundColor: '#C9ADA7',
                }}
                animate={{
                  scale: [1, 0.9, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
              />
            </motion.div>

            <div className="flex-1 space-y-3">
              <motion.div
                className="h-4 rounded-full"
                style={{
                  backgroundColor: '#9A8C98',
                  width: `${60 + index * 10}%`,
                }}
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.1,
                }}
              />
              <motion.div
                className="h-3 rounded-full"
                style={{
                  backgroundColor: '#9A8C98',
                  opacity: 0.6,
                  width: `${40 + index * 5}%`,
                }}
                animate={{
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.3,
                }}
              />
            </div>

            <div className="flex gap-1">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: '#C9ADA7',
                  }}
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: dot * 0.15,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
export default FriendsLoadingState
