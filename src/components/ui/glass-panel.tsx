import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  blur?: "sm" | "md" | "lg" | "xl";
  opacity?: "low" | "medium" | "high";
  bordered?: boolean;
  animated?: boolean;
}

const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ 
    className, 
    blur = "md", 
    opacity = "medium", 
    bordered = true, 
    animated = false,
    children, 
    ...props 
  }, ref) => {
    const blurClasses = {
      sm: "backdrop-blur-sm",
      md: "backdrop-blur-md",
      lg: "backdrop-blur-lg",
      xl: "backdrop-blur-xl",
    };

    const opacityClasses = {
      low: "bg-white/5",
      medium: "bg-white/10",
      high: "bg-white/20",
    };

    const borderClasses = bordered ? "border border-white/10" : "";

    const Component = animated ? motion.div : "div";
    const motionProps = animated ? {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.3, ease: "easeOut" },
      whileHover: { scale: 1.02 },
    } : {};

    return (
      <Component
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg",
          blurClasses[blur],
          opacityClasses[opacity],
          borderClasses,
          "shadow-lg",
          "transition-all duration-300",
          className
        )}
        {...motionProps}
        {...props}
      >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </Component>
    );
  }
);

GlassPanel.displayName = "GlassPanel";

export { GlassPanel };