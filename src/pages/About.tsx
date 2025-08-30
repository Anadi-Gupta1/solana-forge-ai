import { Layout } from "@/components/Layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Award, ExternalLink } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Alex Rivera",
      role: "CEO & Co-Founder",
      avatar: "AR",
      bio: "Former Solana Labs engineer with 8+ years in blockchain development",
      location: "San Francisco, CA"
    },
    {
      name: "Sarah Kim",
      role: "CTO & Co-Founder",
      avatar: "SK",
      bio: "AI/ML expert and former Google Research scientist",
      location: "Seattle, WA"
    },
    {
      name: "Marcus Chen",
      role: "Head of Product",
      avatar: "MC",
      bio: "Product leader with experience at Coinbase and Stripe",
      location: "New York, NY"
    },
    {
      name: "Elena Vasquez",
      role: "Lead Engineer",
      avatar: "EV",
      bio: "Full-stack developer specializing in Rust and TypeScript",
      location: "Austin, TX"
    },
    {
      name: "Jordan Smith",
      role: "Head of Community",
      avatar: "JS",
      bio: "Developer advocate and community builder in Web3",
      location: "Berlin, Germany"
    },
    {
      name: "Maya Patel",
      role: "Head of AI",
      avatar: "MP",
      bio: "PhD in Computer Science, specializing in code generation AI",
      location: "Toronto, Canada"
    }
  ];

  const milestones = [
    {
      year: "2023",
      quarter: "Q1",
      title: "Company Founded",
      description: "Started with a vision to democratize Solana development"
    },
    {
      year: "2023",
      quarter: "Q2",
      title: "First Beta Release",
      description: "Launched MVP with basic AI code assistance"
    },
    {
      year: "2023",
      quarter: "Q3",
      title: "Community Launch",
      description: "Reached 1,000 active developers on the platform"
    },
    {
      year: "2023",
      quarter: "Q4",
      title: "Templates Library",
      description: "Launched comprehensive template marketplace"
    },
    {
      year: "2024",
      quarter: "Q1",
      title: "Advanced AI Features",
      description: "Introduced code review and security scanning AI"
    },
    {
      year: "2024",
      quarter: "Q2",
      title: "Enterprise Launch",
      description: "Released enterprise features and custom deployments"
    }
  ];

  const values = [
    {
      title: "Developer First",
      description: "Everything we build is designed to make developers more productive and successful",
      icon: "👩‍💻"
    },
    {
      title: "Open Source",
      description: "We believe in the power of open source and contribute back to the community",
      icon: "🌐"
    },
    {
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI-assisted development",
      icon: "🚀"
    },
    {
      title: "Security",
      description: "Security is built into every aspect of our platform and development process",
      icon: "🔒"
    },
    {
      title: "Community",
      description: "We foster a supportive community where developers can learn and grow together",
      icon: "🤝"
    },
    {
      title: "Accessibility",
      description: "We make Solana development accessible to developers of all skill levels",
      icon: "♿"
    }
  ];

  const investors = [
    "Andreessen Horowitz",
    "Multicoin Capital",
    "Solana Ventures",
    "Alameda Research",
    "Jump Crypto",
    "FTX Ventures"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Building the Future of Solana Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize Solana development by combining the power of AI 
            with intuitive developer tools. Our platform empowers developers of all skill levels 
            to build, test, and deploy sophisticated blockchain applications.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To lower the barrier to entry for Solana development and accelerate the growth 
              of the ecosystem by providing AI-powered tools that make complex blockchain 
              development accessible to everyone.
            </p>
          </Card>
          
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-accent">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A world where any developer can build sophisticated blockchain applications 
              without needing years of specialized knowledge, fostering innovation and 
              driving mass adoption of decentralized technologies.
            </p>
          </Card>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">100K+</div>
            <div className="text-muted-foreground">Programs Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$15M</div>
            <div className="text-muted-foreground">Series A Funding</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="text-lg">{member.avatar}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
                <div className="flex items-center justify-center text-xs text-muted-foreground">
                  <MapPin size={12} className="mr-1" />
                  {member.location}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {milestone.quarter}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{milestone.year}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Investors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Backed by Leading Investors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {investors.map((investor, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-lg font-semibold text-muted-foreground">{investor}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our vision of making 
            blockchain development more accessible. Check out our open positions or get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Users className="mr-2" size={18} />
              View Careers
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="mr-2" size={18} />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;