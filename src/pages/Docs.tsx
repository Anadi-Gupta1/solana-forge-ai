import { Layout } from "@/components/Layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Book, Code, Zap, Shield, Database, GitBranch } from "lucide-react";
import { useState } from "react";

const Docs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const quickStartGuides = [
    {
      title: "Getting Started",
      description: "Set up your development environment and create your first program",
      time: "5 min",
      difficulty: "Beginner"
    },
    {
      title: "Building Your First Token",
      description: "Learn to create and mint SPL tokens on Solana",
      time: "15 min",
      difficulty: "Beginner"
    },
    {
      title: "NFT Program Development",
      description: "Build and deploy NFT programs with metadata",
      time: "30 min",
      difficulty: "Intermediate"
    },
    {
      title: "DeFi Protocol Basics",
      description: "Create liquidity pools and trading mechanisms",
      time: "45 min",
      difficulty: "Advanced"
    }
  ];

  const apiReferences = [
    {
      section: "Program Development",
      items: [
        "Anchor Framework",
        "Program Instruction Handling",
        "Account Management",
        "Cross-Program Invocation"
      ]
    },
    {
      section: "Client Integration",
      items: [
        "Web3.js Integration",
        "Wallet Connection",
        "Transaction Building",
        "RPC Methods"
      ]
    },
    {
      section: "Testing & Deployment",
      items: [
        "Unit Testing",
        "Integration Testing",
        "Devnet Deployment",
        "Mainnet Deployment"
      ]
    }
  ];

  const examples = [
    {
      title: "Token Swap Program",
      description: "Complete implementation of a token swap mechanism",
      language: "Rust",
      lines: 450
    },
    {
      title: "Governance Contract",
      description: "DAO governance with proposal and voting systems",
      language: "Rust",
      lines: 680
    },
    {
      title: "Staking Pool",
      description: "Liquid staking implementation with rewards",
      language: "Rust",
      lines: 520
    },
    {
      title: "Oracle Integration",
      description: "Price feed oracle consumer implementation",
      language: "Rust",
      lines: 280
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build on Solana with AI assistance
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>

        <Tabs defaultValue="guides" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
            <TabsTrigger value="guides">
              <Book size={16} className="mr-2" />
              Guides
            </TabsTrigger>
            <TabsTrigger value="api">
              <Code size={16} className="mr-2" />
              API Reference
            </TabsTrigger>
            <TabsTrigger value="examples">
              <GitBranch size={16} className="mr-2" />
              Examples
            </TabsTrigger>
            <TabsTrigger value="advanced">
              <Shield size={16} className="mr-2" />
              Advanced
            </TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quickStartGuides.map((guide, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{guide.title}</h3>
                    <Badge variant="secondary">{guide.time}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant={guide.difficulty === 'Beginner' ? 'default' : guide.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
                      {guide.difficulty}
                    </Badge>
                    <Button size="sm">
                      Start Guide
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {apiReferences.map((section, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Database size={18} className="mr-2 text-primary" />
                    {section.section}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Button variant="ghost" className="w-full justify-start h-8 text-sm">
                          {item}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {examples.map((example, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{example.title}</h3>
                    <Badge variant="outline">{example.language}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{example.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {example.lines} lines of code
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Code
                      </Button>
                      <Button size="sm">
                        Open in IDE
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Performance Optimization</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn advanced techniques for optimizing program performance and reducing compute costs.
                </p>
                <Button size="sm" className="w-full">
                  Learn More
                </Button>
              </Card>

              <Card className="p-6">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Security Best Practices</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive security guidelines for building secure Solana programs.
                </p>
                <Button size="sm" className="w-full">
                  Learn More
                </Button>
              </Card>

              <Card className="p-6">
                <Database className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Advanced Account Management</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Master complex account relationships and data structures in Solana programs.
                </p>
                <Button size="sm" className="w-full">
                  Learn More
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Docs;