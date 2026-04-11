import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function BeansCardAnimation() {
  const [replay, setReplay] = useState(0);

  // Auto replay after 13 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setReplay(prev => prev + 1);
    }, 13500);
    return () => clearTimeout(timer);
  }, [replay]);

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden bg-[#1a0f0a]" style={{ aspectRatio: '1920/1080' }}>
      {/* Coffee bean particles floating */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`bean-${i}-${replay}`}
          className="absolute w-3 h-4 rounded-full bg-gradient-to-br from-amber-700/40 to-amber-900/40 blur-sm"
          style={{
            left: `${10 + i * 7}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          initial={{ opacity: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -80, -160],
            rotate: [0, 180, 360],
            x: [0, (i % 2) * 30 - 15, (i % 2) * -20 + 10]
          }}
          transition={{
            duration: 4,
            delay: 0.5 + i * 0.3,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Steam effect */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`steam-${i}-${replay}`}
          className="absolute w-20 h-40 bg-gradient-to-t from-amber-100/5 via-amber-50/10 to-transparent blur-xl rounded-full"
          style={{
            left: `${30 + i * 10}%`,
            bottom: '20%',
          }}
          initial={{ opacity: 0, y: 0, scaleY: 0 }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [0, -100, -200],
            scaleY: [0, 1, 1.5],
            scaleX: [1, 1.2, 0.8]
          }}
          transition={{
            duration: 3,
            delay: 1 + i * 0.4,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Gradient background blobs */}
      <motion.div
        key={`blob1-${replay}`}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-600/20 to-orange-700/20 blur-3xl"
        initial={{ scale: 0, opacity: 0, x: -300, y: -200 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: -300,
          y: -200,
          rotate: 360
        }}
        transition={{
          duration: 2,
          ease: [0.6, 0.01, 0.05, 0.95],
          rotate: { duration: 20, ease: "linear", repeat: Infinity },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      <motion.div
        key={`blob2-${replay}`}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-yellow-600/20 to-amber-800/20 blur-3xl"
        initial={{ scale: 0, opacity: 0, x: 300, y: 200 }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: 300,
          y: 200,
          rotate: -360
        }}
        transition={{
          duration: 2.5,
          delay: 0.3,
          ease: [0.6, 0.01, 0.05, 0.95],
          rotate: { duration: 25, ease: "linear", repeat: Infinity },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Floating coffee bean decorations */}
      {[
        { left: '8%', top: '20%', delay: 1.5, size: 'text-5xl', rotate: -15 },
        { right: '10%', top: '25%', delay: 1.7, size: 'text-4xl', rotate: 20 },
        { left: '12%', bottom: '28%', delay: 1.9, size: 'text-5xl', rotate: -25 },
        { right: '15%', bottom: '35%', delay: 2.1, size: 'text-4xl', rotate: 15 },
        { left: '20%', top: '40%', delay: 2.3, size: 'text-3xl', rotate: 10 },
        { right: '18%', top: '45%', delay: 2.5, size: 'text-3xl', rotate: -20 },
      ].map((pos, i) => (
        <motion.div
          key={`bean-icon-${i}-${replay}`}
          className={`absolute ${pos.size} opacity-20`}
          style={{ left: pos.left, right: pos.right, top: pos.top, bottom: pos.bottom }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 0.15, 0.15],
            scale: [0, 1, 1],
            rotate: [0, pos.rotate, pos.rotate + 360]
          }}
          transition={{
            duration: 1.2,
            delay: pos.delay,
            rotate: { duration: 20, ease: "linear", repeat: Infinity, delay: pos.delay + 1 }
          }}
        >
          ☕
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">

        {/* Coffee cup icon with steam */}
        <motion.div
          key={`icon-${replay}`}
          className="relative mb-4"
          initial={{ scale: 0, opacity: 0, y: -50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
        >
          <motion.div
            className="text-6xl"
            animate={{ rotate: [0, -5, 5, 0] }}
            transition={{ duration: 2, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ☕
          </motion.div>
        </motion.div>

        {/* Brand Name - BEANS */}
        <div className="flex gap-3">
          {['B', 'E', 'A', 'N', 'S'].map((letter, i) => (
            <motion.div
              key={`beans-${letter}-${i}-${replay}`}
              className="relative"
              initial={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                delay: 1.5 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="text-7xl font-bold text-amber-100 tracking-wider drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                {letter}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          key={`divider-${replay}`}
          className="flex items-center gap-4"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-500/50 to-amber-500/50" />
          <motion.div
            className="w-2 h-2 rounded-full bg-amber-500"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, delay: 3.5, repeat: Infinity }}
          />
          <div className="h-px w-32 bg-gradient-to-l from-transparent via-amber-500/50 to-amber-500/50" />
        </motion.div>

        {/* COFFEE text */}
        <div className="flex gap-4">
          {['C', 'O', 'F', 'F', 'E', 'E'].map((letter, i) => (
            <motion.div
              key={`coffee-${letter}-${i}-${replay}`}
              className="relative"
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                delay: 3.5 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="text-8xl font-light tracking-[0.2em] bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.6)]">
                {letter}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.div
          key={`subtitle-${replay}`}
          className="mt-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 5.5 }}
        >
          <div className="px-10 py-3 border border-amber-500/30 backdrop-blur-sm relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 2, delay: 6, ease: "easeInOut" }}
            />
            <div className="text-lg text-amber-100/80 tracking-[0.3em] font-light relative z-10">
              KAWIARNIA PRZYJAZNA ZWIERZĘTOM
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          key={`contact-${replay}`}
          className="flex flex-col items-center gap-3 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 7 }}
        >
          <motion.div
            className="text-xl text-amber-200/80 font-light tracking-wider"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 7.5 }}
          >
            Magda Zajdlic
          </motion.div>
          <motion.div
            className="text-base text-amber-100/50 font-light tracking-[0.2em]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 7.8 }}
          >
            NIP: 164 100
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative dots */}
      <motion.div
        key={`bottom-decoration-${replay}`}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 9 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className={`rounded-full bg-amber-500/30 ${i === 2 ? 'w-3 h-3' : 'w-2 h-2'}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 0.5,
              delay: 9.2 + i * 0.1,
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 10 + i * 0.2 },
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 10 + i * 0.2 }
            }}
          />
        ))}
      </motion.div>

      {/* Top decorative wave */}
      <motion.div
        key={`top-wave-${replay}`}
        className="absolute top-16 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.2, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      >
        <svg width="200" height="20" viewBox="0 0 200 20">
          <motion.path
            d="M 0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10"
            stroke="rgb(251, 191, 36)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
          />
        </svg>
      </motion.div>

      {/* Fade Out */}
      <motion.div
        key={`fadeout-${replay}`}
        className="absolute inset-0 bg-[#1a0f0a] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 12 }}
      />
    </div>
  );
}
