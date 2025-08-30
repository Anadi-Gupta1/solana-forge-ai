import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Rocket, Bot, Zap, Users, Shield } from "lucide-react";

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
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Code className="text-primary-foreground" size={40} />
          </div>
          
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Solana Forge AI
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The most advanced AI-powered development environment for Solana. 
            Write, debug, and deploy programs faster than ever before.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="h-12 px-8 text-base font-medium"
            >
              <Rocket className="mr-2" size={20} />
              Launch IDE
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={onGetStarted}
              className="h-12 px-8 text-base font-medium"
            >
              <Bot className="mr-2" size={20} />
              Try AI Assistant
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-left hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                <feature.icon className="text-primary" size={24} />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Programs Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Active Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of developers building on Solana with our AI-powered tools.
            Get started today and ship your program faster.
          </p>
          
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="h-12 px-8 text-base font-medium"
          >
            Launch IDE
          </Button>
        </div>
      </div>
    </div>
  );
};