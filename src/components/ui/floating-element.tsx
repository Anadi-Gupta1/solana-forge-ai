import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FloatingElementProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: "subtle" | "normal" | "strong";
  delay?: number;
  duration?: number;
}

const FloatingElement = React.forwardRef<HTMLDivElement, FloatingElementProps>(
  ({ 
    className, 
    intensity = "normal", 
    delay = 0, 
    duration = 3,
    children, 
    ...props 
  }, ref) => {
    const intensityMap = {
      subtle: { y: [-2, 2, -2] },
      normal: { y: [-5, 5, -5] },
      strong: { y: [-10, 10, -10] },
    };

    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        animate={intensityMap[intensity]}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        style={props.style}
      >
        {children}
      </motion.div>
    );
  }
);

FloatingElement.displayName = "FloatingElement";

export { FloatingElement };