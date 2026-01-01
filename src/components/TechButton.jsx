import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function TechButton({ 
  children, 
  variant = 'primary', 
  className = '', 
  href,
  onClick 
}) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-bold text-sm uppercase tracking-tight rounded-lg border-2 transition-all duration-200';
  
  const variants = {
    primary: 'bg-primary-green text-white border-tech-black',
    secondary: 'bg-background text-tech-black border-tech-black',
    outline: 'bg-transparent text-tech-black border-tech-black hover:bg-tech-black hover:text-white'
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;
  const shadowStyle = { boxShadow: '6px 6px 0px 0px #111827' };

  const handleClick = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
      }
    }
    if (onClick) onClick(e);
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        style={shadowStyle}
        onClick={handleClick}
        whileHover={{ y: -2, x: -2, boxShadow: '8px 8px 0px 0px #111827' }}
        whileTap={{ y: 0, x: 0 }}
      >
        <span>{children}</span>
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      style={shadowStyle}
      onClick={onClick}
      whileHover={{ y: -2, x: -2, boxShadow: '8px 8px 0px 0px #111827' }}
      whileTap={{ y: 0, x: 0 }}
    >
      <span>{children}</span>
      <ArrowRight className="w-4 h-4" strokeWidth={2} />
    </motion.button>
  );
}

