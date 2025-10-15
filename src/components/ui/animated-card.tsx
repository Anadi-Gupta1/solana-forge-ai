import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  hoverable?: boolean;
  glowing?: boolean;
  floating?: boolean;
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, delay = 0, hoverable = true, glowing = false, floating = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay,
          type: "spring", 
          stiffness: 100 
        }}
        whileHover={hoverable ? { 
          y: -8,
          transition: { type: "spring", stiffness: 300 }
        } : {}}
        className={cn(
          "rounded-xl border bg-card text-card-foreground shadow relative overflow-hidden transition-all duration-300",
          hoverable && "hover:shadow-lg",
          glowing && "pulse-glow",
          floating && "floating",
          className
        )}
        {...props}
      >
        {/* Shimmer effect on hover */}
        {hoverable && (
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Glowing border effect */}
        {glowing && (
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 -z-10 blur-sm" />
        )}
      </motion.div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

export { AnimatedCard };