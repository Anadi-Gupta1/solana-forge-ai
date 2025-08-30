import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Save, Download } from "lucide-react";

export const CodeEditor = () => {
  const [code, setCode] = useState(`use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod solana_forge {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Welcome to Solana Forge AI!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
`);

  return (
    <div className="h-full flex flex-col bg-editor">
      {/* Editor Toolbar */}
      <div className="h-10 bg-panel-bg border-b border-border flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-7 px-2">
            <Play size={14} className="mr-1" />
            Run
          </Button>
          <Button variant="ghost" size="sm" className="h-7 px-2">
            <Save size={14} className="mr-1" />
            Save
          </Button>
          <Button variant="ghost" size="sm" className="h-7 px-2">
            <Download size={14} className="mr-1" />
            Export
          </Button>
        </div>
        
        <div className="text-xs text-muted-foreground">
          Rust • Anchor Framework
        </div>
      </div>

      {/* Code Editor Area */}
      <div className="flex-1 relative">
        {/* Line numbers */}
        <div className="absolute left-0 top-0 w-12 h-full bg-panel-bg border-r border-border flex flex-col text-muted-foreground text-xs font-mono z-10">
          {code.split('\n').map((_, index) => (
            <div 
              key={index} 
              className="h-6 flex items-center justify-end pr-2"
              style={{ lineHeight: '1.6' }}
            >
              {index + 1}
            </div>
          ))}
        </div>
        
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full bg-transparent text-foreground font-mono text-sm leading-relaxed resize-none border-0 outline-none pl-14 p-4"
          style={{
            fontFamily: 'JetBrains Mono, Consolas, Monaco, "Courier New", monospace',
            lineHeight: '1.6',
            tabSize: 2,
          }}
          spellCheck={false}
        />
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-panel-bg border-t border-border flex items-center justify-between px-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>Ln 12, Col 1</span>
          <span>Rust</span>
          <span className="text-accent">No errors</span>
        </div>
        <div className="flex items-center gap-4">
          <span>UTF-8</span>
          <span>LF</span>
        </div>
      </div>
    </div>
  );
};