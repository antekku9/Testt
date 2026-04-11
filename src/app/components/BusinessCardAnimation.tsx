import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function BusinessCardAnimation() {
  const [replay, setReplay] = useState(0);

  // Auto replay after 13 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setReplay(prev => prev + 1);
    }, 13500);
    return () => clearTimeout(timer);
  }, [replay]);

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ aspectRatio: '1920/1080' }}>
      {/* Animated gradient background */}
      <motion.div
        key={`bg-gradient-${replay}`}
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(20,20,30,1) 0%, rgba(10,10,10,1) 100%)',
        }}
      />

      {/* Scanlines effect */}
      <motion.div
        key={`scanlines-${replay}`}
        className="absolute inset-0 opacity-5 pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: [0, 100] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />

      {/* Glitch bars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`glitch-${i}-${replay}`}
          className="absolute h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
          style={{ width: '100%', top: `${20 + i * 30}%` }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scaleX: [0, 1, 0],
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 2,
            delay: 2 + i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Holographic elements */}
      <motion.div
        key={`holo1-${replay}`}
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, rgba(0,255,255,0.1), rgba(255,0,255,0.1), rgba(255,255,0,0.1), rgba(0,255,255,0.1))',
          filter: 'blur(60px)',
          left: '20%',
          top: '20%',
        }}
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.3, rotate: 360 }}
        transition={{ duration: 2, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
      />

      <motion.div
        key={`holo2-${replay}`}
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, rgba(255,0,255,0.1), rgba(0,255,255,0.1), rgba(255,255,0,0.1), rgba(255,0,255,0.1))',
          filter: 'blur(60px)',
          right: '15%',
          bottom: '15%',
        }}
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 0.3, rotate: -180 }}
        transition={{ duration: 2.5, rotate: { duration: 25, repeat: Infinity, ease: "linear" } }}
      />

      {/* Digital frame corners - full frame */}
      {/* Top-left corner */}
      <motion.div
        key={`corner-tl-${replay}`}
        className="absolute top-8 left-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: "backOut" }}
      >
        <div className="border-l-2 border-t-2 border-cyan-400/50 w-16 h-16" />
      </motion.div>

      {/* Top-right corner */}
      <motion.div
        key={`corner-tr-${replay}`}
        className="absolute top-8 right-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.1, ease: "backOut" }}
      >
        <div className="border-r-2 border-t-2 border-cyan-400/50 w-16 h-16" />
      </motion.div>

      {/* Bottom-left corner */}
      <motion.div
        key={`corner-bl-${replay}`}
        className="absolute bottom-8 left-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "backOut" }}
      >
        <div className="border-l-2 border-b-2 border-cyan-400/50 w-16 h-16" />
      </motion.div>

      {/* Bottom-right corner */}
      <motion.div
        key={`corner-br-${replay}`}
        className="absolute bottom-8 right-8"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.3, ease: "backOut" }}
      >
        <div className="border-r-2 border-b-2 border-cyan-400/50 w-16 h-16" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-8">

        {/* First Name - ANTONI */}
        <div className="flex gap-3">
          {['A', 'N', 'T', 'O', 'N', 'I'].map((letter, i) => (
            <motion.div
              key={`first-${letter}-${i}-${replay}`}
              className="relative"
              initial={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                delay: 2 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="text-7xl font-light text-white/90 tracking-wider">{letter}</div>
              <motion.div
                className="absolute inset-0 text-7xl font-light text-cyan-400/50 tracking-wider"
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, 2, 0], y: [0, 2, 0] }}
                transition={{ duration: 0.2, delay: 2.5 + i * 0.1 }}
              >
                {letter}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Divider line */}
        <motion.div
          key={`divider-${replay}`}
          className="h-px w-96 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        />

        {/* Last Name - KURAN */}
        <div className="flex gap-3">
          {['K', 'U', 'R', 'A', 'N'].map((letter, i) => (
            <motion.div
              key={`last-${letter}-${i}-${replay}`}
              className="relative"
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.6,
                delay: 4 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <div className="text-9xl font-extralight tracking-widest text-white">{letter}</div>
              <motion.div
                className="absolute inset-0 text-9xl font-extralight tracking-widest bg-gradient-to-b from-cyan-400/60 to-purple-400/60 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, delay: 4.5 + i * 0.1 }}
              >
                {letter}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Framework Studio */}
        <motion.div
          key={`studio-${replay}`}
          className="mt-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 6 }}
        >
          <div className="px-12 py-4 border border-cyan-400/30 backdrop-blur-sm relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 2, delay: 6.5, ease: "easeInOut" }}
            />
            <div className="text-xl text-white/80 tracking-[0.3em] font-light relative z-10">
              FRAMEWORK STUDIO
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          key={`contact-${replay}`}
          className="flex flex-col items-center gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 7.5 }}
        >
          <motion.div
            className="text-lg text-cyan-400/70 font-light tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 8 }}
          >
            info@frameworkstudio.pl
          </motion.div>
          <motion.div
            className="text-base text-white/50 font-light tracking-[0.2em]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 8.3 }}
          >
            NIP: 5252968361
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom accent lines */}
      <motion.div
        key={`bottom-lines-${replay}`}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 9 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="w-1 h-16 bg-gradient-to-t from-cyan-400/60 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.4, delay: 9.2 + i * 0.1 }}
          />
        ))}
      </motion.div>

      {/* Data stream effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`stream-${i}-${replay}`}
          className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"
          style={{ left: `${15 + i * 15}%`, top: 0 }}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '200%', opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            delay: 9.5 + i * 0.2,
            ease: "linear"
          }}
        />
      ))}

      {/* Fade Out Everything */}
      <motion.div
        key={`fadeout-${replay}`}
        className="absolute inset-0 bg-[#0a0a0a] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 12 }}
      />
    </div>
  );
}
