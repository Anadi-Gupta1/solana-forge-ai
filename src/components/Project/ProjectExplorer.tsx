import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, ChevronDown, File, Folder, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  expanded?: boolean;
}

export const ProjectExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fileTree, setFileTree] = useState<FileNode[]>([
    {
      name: 'src',
      type: 'folder',
      expanded: true,
      children: [
        { name: 'lib.rs', type: 'file' },
        { name: 'processor.rs', type: 'file' },
        { name: 'instruction.rs', type: 'file' },
        { name: 'state.rs', type: 'file' },
      ]
    },
    {
      name: 'tests',
      type: 'folder',
      expanded: false,
      children: [
        { name: 'integration_test.rs', type: 'file' },
      ]
    },
    { name: 'Cargo.toml', type: 'file' },
    { name: 'Anchor.toml', type: 'file' },
    { name: 'README.md', type: 'file' },
  ]);

  const toggleFolder = (path: string[]) => {
    const updateTree = (nodes: FileNode[], currentPath: string[] = []): FileNode[] => {
      return nodes.map(node => {
        const newPath = [...currentPath, node.name];
        const isTarget = JSON.stringify(newPath) === JSON.stringify(path);
        
        if (isTarget && node.type === 'folder') {
          return { ...node, expanded: !node.expanded };
        }
        
        if (node.children) {
          return { ...node, children: updateTree(node.children, newPath) };
        }
        
        return node;
      });
    };
    
    setFileTree(updateTree(fileTree));
  };

  const renderFileTree = (nodes: FileNode[], path: string[] = []): JSX.Element => {
    const filteredNodes = nodes.filter(node => 
      node.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        {filteredNodes.map((node, index) => {
          const currentPath = [...path, node.name];
          const isRustFile = node.name.endsWith('.rs');
          const isConfigFile = node.name.endsWith('.toml') || node.name.endsWith('.md');
          
          return (
            <div key={index}>
              <Button
                variant="ghost"
                className="w-full justify-start h-7 px-2 text-sm hover:bg-hover-bg"
                onClick={() => node.type === 'folder' ? toggleFolder(currentPath) : null}
                style={{ paddingLeft: `${path.length * 12 + 8}px` }}
              >
                {node.type === 'folder' ? (
                  <>
                    {node.expanded ? (
                      <ChevronDown size={12} className="mr-1" />
                    ) : (
                      <ChevronRight size={12} className="mr-1" />
                    )}
                    <Folder size={12} className="mr-2 text-primary" />
                  </>
                ) : (
                  <File 
                    size={12} 
                    className={`mr-2 ml-3 ${isRustFile ? 'text-accent' : isConfigFile ? 'text-muted-foreground' : 'text-foreground'}`} 
                  />
                )}
                <span className={isRustFile ? 'text-accent' : ''}>{node.name}</span>
              </Button>
              
              {node.type === 'folder' && node.expanded && node.children && (
                renderFileTree(node.children, currentPath)
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="h-12 bg-panel-bg border-b border-border flex items-center justify-between px-3">
        <h3 className="text-sm font-medium">Explorer</h3>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
          <Plus size={12} />
        </Button>
      </div>

      {/* Search */}
      <div className="p-3 border-b border-border">
        <div className="relative">
          <Search size={12} className="absolute left-2 top-2 text-muted-foreground" />
          <Input
            placeholder="Search files..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-7 pl-7 text-xs"
          />
        </div>
      </div>

      {/* File Tree */}
      <ScrollArea className="flex-1">
        <div className="p-1">
          {renderFileTree(fileTree)}
        </div>
      </ScrollArea>

      {/* Status */}
      <div className="h-8 bg-panel-bg border-t border-border flex items-center px-3 text-xs text-muted-foreground">
        <span>Solana Program Project</span>
      </div>
    </div>
  );
};