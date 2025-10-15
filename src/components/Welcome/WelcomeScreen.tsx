import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Rocket, Bot, Zap, Users, Shield, Star, Github } from "lucide-react";
import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export const WelcomeScreen = ({ onGetStarted }: WelcomeScreenProps) => {
  const features = [
    {
      icon: Code,
      title: "Smart Code Editor",
      description: "Advanced Rust/Anchor syntax highlighting with intelligent autocomplete"
    },
    {
      icon: Bot,
      title: "AI-Powered Assistant",
      description: "Get instant help with Solana development, debugging, and best practices"
    },
    {
      icon: Rocket,
      title: "One-Click Deployment",
      description: "Deploy to Devnet, Testnet, or Mainnet with seamless integration"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with real-time feedback and instant compilation"
    },
    {
      icon: Users,
      title: "Community Templates",
      description: "Start with proven templates from the Solana developer community"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security analysis and vulnerability detection"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20"
          style={{
            background: "var(--gradient-aurora)",
            filter: "blur(40px)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20"
          style={{
            background: "var(--gradient-neon)",
            filter: "blur(40px)"
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="w-20 h-20 mx-auto mb-8 rounded-2xl glass-effect flex items-center justify-center relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: [
                  "0 0 20px hsl(270 91% 65% / 0.3)",
                  "0 0 40px hsl(270 91% 65% / 0.6)",
                  "0 0 20px hsl(270 91% 65% / 0.3)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity },
                scale: { type: "spring", stiffness: 300 }
              }}
            >
              <Code className="text-primary relative z-10" size={40} />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Solana Forge AI
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The most advanced AI-powered development environment for Solana. 
              Write, debug, and deploy programs faster than ever before.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  onClick={onGetStarted}
                  className="h-12 px-8 text-base font-medium bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 group"
                >
                  <Rocket className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                  Launch IDE
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={onGetStarted}
                  className="h-12 px-8 text-base font-medium glass-effect hover:glass-hover transition-all duration-300 group"
                >
                  <Bot className="mr-2 group-hover:bounce transition-all duration-300" size={20} />
                  Try AI Assistant
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="p-6 text-left glass-panel hover:glass-hover transition-all duration-300 group border-0 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 relative"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="text-primary" size={24} />
                </motion.div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { value: "10K+", label: "Programs Deployed", delay: 0 },
            { value: "500+", label: "Active Developers", delay: 0.1 },
            { value: "99.9%", label: "Uptime", delay: 0.2 }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.2 + stat.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="text-3xl font-bold mb-2 gradient-text"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {index === 0 ? "10K+" : index === 1 ? "500+" : "99.9%"}
              </motion.div>
              <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="relative rounded-2xl p-8 glass-effect overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated background */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{ background: "var(--gradient-aurora)" }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              Ready to Build the Future?
            </motion.h2>
            <motion.p 
              className="text-muted-foreground mb-6 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              Join thousands of developers building on Solana with our AI-powered tools.
              Get started today and ship your program faster.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                onClick={onGetStarted}
                className="h-12 px-8 text-base font-medium bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 group neon-glow"
              >
                <Star className="mr-2 group-hover:rotate-180 transition-transform duration-500" size={20} />
                Launch IDE
              </Button>
            </motion.div>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
};