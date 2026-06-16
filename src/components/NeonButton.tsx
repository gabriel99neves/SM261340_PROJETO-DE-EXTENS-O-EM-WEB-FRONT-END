interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function NeonButton({ variant = 'primary', children, className = '', ...props }: NeonButtonProps) {
  const baseClass = "px-4 sm:px-6 py-2.5 min-h-[44px] uppercase tracking-widest text-xs sm:text-sm font-bold transition-all duration-200 flex items-center";
  const primaryClass = "text-black bg-[#00FF41] hover:bg-[#39FF14] neon-border";
  const secondaryClass = "text-[#00FF41] bg-transparent neon-border hover:bg-[rgba(0,255,65,0.1)]";

  return (
    <button className={`${baseClass} ${variant === 'primary' ? primaryClass : secondaryClass} ${className}`} {...props}>
      {children}
    </button>
  );
}