import { motion } from 'framer-motion';

export default function AbstractShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 106, 78, 0.08) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Geometric shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-primary-green/10 rounded-lg rotate-12 opacity-30 hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-accent-gold/10 rounded-lg -rotate-12 opacity-30 hidden lg:block" />
    </div>
  );
}

