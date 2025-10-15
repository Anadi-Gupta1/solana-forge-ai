import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { CodeEditor } from "../Editor/CodeEditor";
import { AIAssistant } from "../AI/AIAssistant";
import { DeploymentPanel } from "../Deployment/DeploymentPanel";
import { ProjectExplorer } from "../Project/ProjectExplorer";
import { Button } from "@/components/ui/button";
import { PanelRightOpen, PanelRightClose, Play, Save, Settings, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const IDELayout = () => {
  const [showAIAssistant, setShowAIAssistant] = useState(true);
  const [activeView, setActiveView] = useState<'editor' | 'deployment'>('editor');
  const [isCompiling, setIsCompiling] = useState(false);

  const handleCompile = () => {
    setIsCompiling(true);
    setTimeout(() => setIsCompiling(false), 2000); // Simulate compilation
  };

  return (
    <div className="h-screen flex bg-background text-foreground overflow-hidden">
      {/* Left Sidebar */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
      </motion.div>
      
      {/* Project Explorer */}
      <motion.div 
        className="w-64 glass-panel border-r border-border/50 flex-shrink-0"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
      >
        <ProjectExplorer />
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Enhanced Top Bar */}
        <motion.div 
          className="h-14 glass-panel border-b border-border/50 flex items-center justify-between px-4 relative overflow-hidden"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-50" />
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <motion.h2 
                className="text-sm font-medium gradient-text"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {activeView === 'editor' ? 'Code Editor' : 'Deployment Dashboard'}
              </motion.h2>
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity 
                  }}
                />
                <span className="text-xs text-muted-foreground">main.rs</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCompile}
                  disabled={isCompiling}
                  className="h-8 px-3 glass-panel hover:glass-hover transition-all duration-300"
                >
                  <motion.div
                    animate={isCompiling ? { rotate: 360 } : {}}
                    transition={{ duration: 1, repeat: isCompiling ? Infinity : 0, ease: "linear" }}
                  >
                    <Play size={14} />
                  </motion.div>
                  <span className="ml-1 text-xs">
                    {isCompiling ? 'Compiling...' : 'Run'}
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 glass-panel hover:glass-hover transition-all duration-300"
                >
                  <Save size={14} />
                  <span className="ml-1 text-xs">Save</span>
                </Button>
              </motion.div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 glass-panel hover:glass-hover transition-all duration-300"
              >
                <Settings size={14} />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 glass-panel hover:glass-hover transition-all duration-300"
              >
                <Terminal size={14} />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAIAssistant(!showAIAssistant)}
                className="h-8 w-8 p-0 glass-panel hover:glass-hover transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: showAIAssistant ? 0 : 180 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {showAIAssistant ? <PanelRightClose size={14} /> : <PanelRightOpen size={14} />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 flex relative">
          <motion.div 
            className="flex-1 relative"
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <AnimatePresence mode="wait">
              {activeView === 'editor' ? (
                <motion.div
                  key="editor"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full h-full"
                >
                  <CodeEditor />
                </motion.div>
              ) : (
                <motion.div
                  key="deployment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="w-full h-full"
                >
                  <DeploymentPanel />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Status indicator overlay */}
            <AnimatePresence>
              {isCompiling && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-4 right-4 z-10"
                >
                  <div className="glass-effect px-3 py-2 rounded-lg flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                    />
                    <span className="text-sm text-primary">Compiling...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* AI Assistant Panel */}
          <AnimatePresence>
            {showAIAssistant && (
              <motion.div
                initial={{ x: 320, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 320, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-80 glass-panel border-l border-border/50 flex-shrink-0 relative overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 opacity-30" />
                <div className="relative z-10">
                  <AIAssistant />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};