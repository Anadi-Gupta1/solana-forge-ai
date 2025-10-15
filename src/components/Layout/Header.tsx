import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code, Rocket, Book, Users, DollarSign, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.header 
      className="sticky top-0 z-50 w-full glass-effect backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div 
              className="w-8 h-8 rounded-lg glass-effect flex items-center justify-center"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px hsl(270 91% 65% / 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Code className="text-primary group-hover:rotate-12 transition-transform duration-300" size={20} />
            </motion.div>
            <motion.span 
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Solana Forge AI
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <AnimatePresence>
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={item.href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "h-9 px-3 text-sm font-medium transition-all duration-300 relative group",
                        isActive(item.href)
                          ? "text-primary"
                          : "hover:text-primary"
                      )}
                    >
                      <item.icon size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                      {item.name}
                      {isActive(item.href) && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                          layoutId="activeTab"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/ide">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="glass-panel hover:glass-hover transition-all duration-300"
                >
                  Try Demo
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/ide">
                <Button 
                  size="sm"
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300"
                >
                  Start Building
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="sm" className="glass-panel">
                  <Menu size={20} />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 glass-effect border-l border-border/50">
              <motion.div 
                className="flex flex-col space-y-4 mt-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start h-12 glass-panel hover:glass-hover transition-all duration-300",
                          isActive(item.href)
                            ? "text-primary border-l-2 border-primary"
                            : ""
                        )}
                      >
                        <item.icon size={20} className="mr-3" />
                        {item.name}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  className="pt-4 border-t border-border space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to="/ide" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full glass-panel hover:glass-hover">
                        Try Demo
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to="/ide" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-primary to-accent">
                        Start Building
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};