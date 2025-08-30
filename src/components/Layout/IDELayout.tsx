import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { CodeEditor } from "../Editor/CodeEditor";
import { AIAssistant } from "../AI/AIAssistant";
import { DeploymentPanel } from "../Deployment/DeploymentPanel";
import { ProjectExplorer } from "../Project/ProjectExplorer";
import { Button } from "@/components/ui/button";
import { PanelRightOpen, PanelRightClose } from "lucide-react";

export const IDELayout = () => {
  const [showAIAssistant, setShowAIAssistant] = useState(true);
  const [activeView, setActiveView] = useState<'editor' | 'deployment'>('editor');

  return (
    <div className="h-screen flex bg-background text-foreground">
      {/* Left Sidebar */}
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      
      {/* Project Explorer */}
      <div className="w-64 bg-sidebar-bg border-r border-border flex-shrink-0">
        <ProjectExplorer />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-12 bg-panel-bg border-b border-border flex items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-medium">
              {activeView === 'editor' ? 'Code Editor' : 'Deployment Dashboard'}
            </h2>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-xs text-muted-foreground">main.rs</span>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAIAssistant(!showAIAssistant)}
            className="h-8 w-8 p-0"
          >
            {showAIAssistant ? <PanelRightClose size={16} /> : <PanelRightOpen size={16} />}
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 flex">
          <div className="flex-1">
            {activeView === 'editor' ? <CodeEditor /> : <DeploymentPanel />}
          </div>
          
          {/* AI Assistant Panel */}
          {showAIAssistant && (
            <div className="w-80 bg-panel-bg border-l border-border flex-shrink-0">
              <AIAssistant />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};