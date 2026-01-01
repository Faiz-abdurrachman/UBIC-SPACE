import { motion } from 'framer-motion';

export default function NeoCard({ children, className = '', hoverEffect = true, borderColor = 'tech-black', onClick }) {
  // Check if className already has bg- class, if not, add default bg-background
  const hasBackground = className.includes('bg-');
  const baseClasses = `neo-card p-6 ${hasBackground ? '' : 'bg-background'}`;
  const hoverClasses = hoverEffect ? 'neo-card-hover cursor-pointer' : '';
  const borderClasses = borderColor === 'gold' ? 'border-accent-gold' : 'border-tech-black';
  
  // Dynamic shadow based on border color
  const shadowStyle = borderColor === 'gold' 
    ? { boxShadow: '6px 6px 0px 0px #F59E0B' }
    : { boxShadow: '6px 6px 0px 0px #111827' };

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${borderClasses} ${className}`}
      style={shadowStyle}
      onClick={onClick}
      whileHover={hoverEffect ? { y: -4, x: -4 } : {}}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

