import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Code, Rocket, Settings, FileText } from "lucide-react";

interface SidebarProps {
  activeView: 'editor' | 'deployment';
  onViewChange: (view: 'editor' | 'deployment') => void;
}

export const Sidebar = ({ activeView, onViewChange }: SidebarProps) => {
  const menuItems = [
    { id: 'editor' as const, icon: Code, label: 'Editor', tooltip: 'Code Editor' },
    { id: 'deployment' as const, icon: Rocket, label: 'Deploy', tooltip: 'Deployment Dashboard' },
  ];

  return (
    <div className="w-12 bg-sidebar-bg border-r border-border flex flex-col">
      {/* Logo */}
      <div className="h-12 flex items-center justify-center border-b border-border">
        <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent"></div>
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col gap-1 p-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            onClick={() => onViewChange(item.id)}
            className={cn(
              "h-8 w-8 p-0 flex items-center justify-center transition-colors",
              activeView === item.id 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-hover-bg"
            )}
            title={item.tooltip}
          >
            <item.icon size={16} />
          </Button>
        ))}
      </div>

      {/* Bottom actions */}
      <div className="p-2 border-t border-border">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 hover:bg-hover-bg"
          title="Settings"
        >
          <Settings size={16} />
        </Button>
      </div>
    </div>
  );
};