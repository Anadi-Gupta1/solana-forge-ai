import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/Layout/Layout";
import { Search, Star, Download, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Templates", count: 24 },
    { id: "defi", name: "DeFi", count: 8 },
    { id: "nft", name: "NFT", count: 6 },
    { id: "gaming", name: "Gaming", count: 4 },
    { id: "dao", name: "DAO", count: 3 },
    { id: "token", name: "Token", count: 3 },
  ];

  const templates = [
    {
      id: 1,
      name: "Token Minting Program",
      description: "Create and mint SPL tokens with custom metadata and supply controls",
      category: "token",
      author: "Solana Labs",
      stars: 1200,
      downloads: 5400,
      difficulty: "Beginner",
      lastUpdated: "2 days ago",
      image: "/api/placeholder/300/200",
      tags: ["SPL Token", "Minting", "Metadata"]
    },
    {
      id: 2,
      name: "NFT Marketplace",
      description: "Full-featured NFT marketplace with bidding, royalties, and escrow",
      category: "nft",
      author: "Metaplex",
      stars: 2100,
      downloads: 8900,
      difficulty: "Advanced",
      lastUpdated: "1 week ago",
      image: "/api/placeholder/300/200",
      tags: ["NFT", "Marketplace", "Escrow"]
    },
    {
      id: 3,
      name: "AMM Liquidity Pool",
      description: "Automated Market Maker with liquidity provision and trading",
      category: "defi",
      author: "Raydium",
      stars: 980,
      downloads: 3200,
      difficulty: "Intermediate",
      lastUpdated: "3 days ago",
      image: "/api/placeholder/300/200",
      tags: ["AMM", "DeFi", "Liquidity"]
    },
    {
      id: 4,
      name: "Governance DAO",
      description: "Decentralized governance with proposal creation and voting",
      category: "dao",
      author: "Realms",
      stars: 750,
      downloads: 2100,
      difficulty: "Advanced",
      lastUpdated: "5 days ago",
      image: "/api/placeholder/300/200",
      tags: ["DAO", "Governance", "Voting"]
    },
    {
      id: 5,
      name: "Gaming Leaderboard",
      description: "On-chain leaderboard system for games with ranking and rewards",
      category: "gaming",
      author: "Star Atlas",
      stars: 650,
      downloads: 1800,
      difficulty: "Intermediate",
      lastUpdated: "1 week ago",
      image: "/api/placeholder/300/200",
      tags: ["Gaming", "Leaderboard", "Rewards"]
    },
    {
      id: 6,
      name: "Lending Protocol",
      description: "Decentralized lending with collateral management and interest",
      category: "defi",
      author: "Solend",
      stars: 1500,
      downloads: 4200,
      difficulty: "Advanced",
      lastUpdated: "4 days ago",
      image: "/api/placeholder/300/200",
      tags: ["Lending", "DeFi", "Collateral"]
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/10 text-green-400";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-400";
      case "Advanced": return "bg-red-500/10 text-red-400";
      default: return "bg-gray-500/10 text-gray-400";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Program Templates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jumpstart your Solana development with battle-tested templates from the community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Link to="/ide">
              <Button className="h-12 px-6">
                Create New Template
              </Button>
            </Link>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="h-8"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">⚡</div>
                </div>
                <Badge className={`absolute top-3 right-3 ${getDifficultyColor(template.difficulty)}`}>
                  {template.difficulty}
                </Badge>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {template.name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star size={14} className="mr-1" />
                    {template.stars}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {template.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Users size={12} className="mr-1" />
                    {template.downloads} downloads
                  </div>
                  <div className="flex items-center">
                    <Clock size={12} className="mr-1" />
                    {template.lastUpdated}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    by {template.author}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download size={14} className="mr-1" />
                      Use
                    </Button>
                    <Link to="/ide">
                      <Button size="sm">
                        Open IDE
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-medium mb-2">No templates found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Templates;