import { Link } from "react-router-dom";
import { Code, Github, Twitter, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-panel-bg border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Code className="text-primary-foreground" size={20} />
              </div>
              <span className="text-lg font-bold">Solana Forge AI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The most advanced AI-powered development environment for Solana blockchain development.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Github size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Twitter size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MessageCircle size={16} />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/ide" className="hover:text-foreground transition-colors">IDE</Link></li>
              <li><Link to="/templates" className="hover:text-foreground transition-colors">Templates</Link></li>
              <li><Link to="/docs" className="hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/community" className="hover:text-foreground transition-colors">Discord</Link></li>
              <li><Link to="/community" className="hover:text-foreground transition-colors">GitHub</Link></li>
              <li><Link to="/community" className="hover:text-foreground transition-colors">Twitter</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest updates and Solana development tips.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="h-8 text-sm"
              />
              <Button size="sm" className="h-8">
                <Mail size={14} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Solana Forge AI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/security" className="hover:text-foreground transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};