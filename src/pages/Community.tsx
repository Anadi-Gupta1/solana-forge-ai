import { Layout } from "@/components/Layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageSquare, Calendar, Trophy, Github, ExternalLink, Star } from "lucide-react";

const Community = () => {
  const stats = [
    { label: "Active Developers", value: "12,500+", icon: Users },
    { label: "Programs Deployed", value: "45,000+", icon: Trophy },
    { label: "Community Posts", value: "8,200+", icon: MessageSquare },
    { label: "Monthly Events", value: "24", icon: Calendar },
  ];

  const recentPosts = [
    {
      author: "Sarah Chen",
      avatar: "SC",
      title: "Building a Cross-Program Invocation Pattern",
      content: "Just figured out an elegant way to handle CPI calls between multiple programs. Here's the pattern I'm using...",
      time: "2 hours ago",
      replies: 12,
      likes: 45
    },
    {
      author: "Alex Rodriguez",
      avatar: "AR",
      title: "Gas Optimization Tips for Token Programs",
      content: "After deploying 50+ token programs, here are my top 10 tips for reducing compute costs...",
      time: "4 hours ago",
      replies: 28,
      likes: 89
    },
    {
      author: "Maya Patel",
      avatar: "MP",
      title: "NFT Royalty Implementation Deep Dive",
      content: "Working on a new royalty standard that's backwards compatible. Would love feedback from the community...",
      time: "1 day ago",
      replies: 34,
      likes: 67
    }
  ];

  const upcomingEvents = [
    {
      title: "Solana Forge AI Workshop",
      date: "Dec 15, 2024",
      time: "2:00 PM PST",
      type: "Workshop",
      attendees: 124
    },
    {
      title: "Advanced Anchor Patterns",
      date: "Dec 18, 2024",
      time: "10:00 AM PST",
      type: "Webinar",
      attendees: 89
    },
    {
      title: "Community Demo Day",
      date: "Dec 22, 2024",
      time: "3:00 PM PST",
      type: "Demo",
      attendees: 156
    }
  ];

  const topContributors = [
    { name: "Jordan Smith", contributions: 245, avatar: "JS" },
    { name: "Elena Vasquez", contributions: 198, avatar: "EV" },
    { name: "David Kim", contributions: 167, avatar: "DK" },
    { name: "Sophie Brown", contributions: 134, avatar: "SB" },
    { name: "Marcus Johnson", contributions: 123, avatar: "MJ" },
  ];

  const projects = [
    {
      name: "Solana Cookbook",
      description: "Community-driven recipes and examples for Solana development",
      stars: 2400,
      contributors: 89,
      language: "TypeScript"
    },
    {
      name: "Anchor Examples",
      description: "Comprehensive examples for the Anchor framework",
      stars: 1800,
      contributors: 56,
      language: "Rust"
    },
    {
      name: "Program Templates",
      description: "Battle-tested program templates for common use cases",
      stars: 1200,
      contributors: 34,
      language: "Rust"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Join Our Community
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with thousands of Solana developers building the future of blockchain
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="discussions" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
            <TabsTrigger value="discussions">
              <MessageSquare size={16} className="mr-2" />
              Discussions
            </TabsTrigger>
            <TabsTrigger value="events">
              <Calendar size={16} className="mr-2" />
              Events
            </TabsTrigger>
            <TabsTrigger value="projects">
              <Github size={16} className="mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="contributors">
              <Trophy size={16} className="mr-2" />
              Contributors
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discussions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Recent Discussions</h2>
              <Button>
                Start Discussion
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarFallback>{post.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold">{post.author}</h3>
                        <span className="text-sm text-muted-foreground">{post.time}</span>
                      </div>
                      <h4 className="text-lg font-medium mb-2">{post.title}</h4>
                      <p className="text-muted-foreground mb-4">{post.content}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{post.replies} replies</span>
                        <span>{post.likes} likes</span>
                        <Button variant="ghost" size="sm">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
              <Button>
                Host Event
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="p-6">
                  <Badge className="mb-3">{event.type}</Badge>
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div>{event.date}</div>
                    <div>{event.time}</div>
                    <div>{event.attendees} attendees</div>
                  </div>
                  <Button className="w-full">
                    Join Event
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Community Projects</h2>
              <Button>
                Submit Project
              </Button>
            </div>
            
            <div className="space-y-4">
              {projects.map((project, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Star size={14} className="mr-1" />
                          {project.stars}
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-1" />
                          {project.contributors} contributors
                        </div>
                        <Badge variant="secondary">{project.language}</Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink size={14} className="mr-1" />
                      View
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contributors" className="space-y-6">
            <h2 className="text-2xl font-bold">Top Contributors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topContributors.map((contributor, index) => (
                <Card key={index} className="p-6 text-center">
                  <Avatar className="w-16 h-16 mx-auto mb-4">
                    <AvatarFallback className="text-lg">{contributor.avatar}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold mb-2">{contributor.name}</h3>
                  <div className="text-sm text-muted-foreground mb-4">
                    {contributor.contributions} contributions
                  </div>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Community;