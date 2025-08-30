import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code, Rocket, Book, Users, DollarSign, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "IDE", href: "/ide", icon: Code },
    { name: "Templates", href: "/templates", icon: Rocket },
    { name: "Docs", href: "/docs", icon: Book },
    { name: "Community", href: "/community", icon: Users },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "About", href: "/about", icon: Info },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code className="text-primary-foreground" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solana Forge AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "h-9 px-3 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  )}
                >
                  <item.icon size={16} className="mr-2" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/ide">
              <Button variant="outline" size="sm">
                Try Demo
              </Button>
            </Link>
            <Link to="/ide">
              <Button size="sm">
                Start Building
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start h-12",
                        isActive(item.href)
                          ? "bg-primary/10 text-primary"
                          : ""
                      )}
                    >
                      <item.icon size={20} className="mr-3" />
                      {item.name}
                    </Button>
                  </Link>
                ))}
                <div className="pt-4 border-t border-border space-y-2">
                  <Link to="/ide" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Try Demo
                    </Button>
                  </Link>
                  <Link to="/ide" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">
                      Start Building
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};