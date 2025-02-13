import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function GlowingButton({ children, onClick, className = '', href }: Props) {
  const ButtonComponent = href ? motion.a : motion.button;
  
  return (
    <ButtonComponent
      href={href}
      onClick={onClick}
      className={`relative group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center">
        {children}
      </div>
    </ButtonComponent>
  );
}