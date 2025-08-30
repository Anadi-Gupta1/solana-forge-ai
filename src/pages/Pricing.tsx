import { Layout } from "@/components/Layout/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Users } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for learning and personal projects",
      price: { monthly: 0, annual: 0 },
      features: [
        "AI Code Assistant (100 queries/month)",
        "Basic Templates Access",
        "Devnet Deployment",
        "Community Support",
        "2GB Storage",
        "Basic Analytics"
      ],
      limitations: [
        "No Testnet/Mainnet deployment",
        "Limited AI queries",
        "No priority support"
      ],
      cta: "Get Started",
      popular: false,
      icon: Star
    },
    {
      name: "Pro",
      description: "For serious developers building production apps",
      price: { monthly: 29, annual: 24 },
      features: [
        "Unlimited AI Code Assistant",
        "All Premium Templates",
        "Devnet + Testnet + Mainnet Deployment",
        "Priority Support",
        "50GB Storage",
        "Advanced Analytics",
        "Code Review AI",
        "Security Scanning",
        "Custom Deployment Scripts"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      popular: true,
      icon: Zap
    },
    {
      name: "Team",
      description: "For teams and organizations",
      price: { monthly: 99, annual: 82 },
      features: [
        "Everything in Pro",
        "Team Collaboration Tools",
        "Shared Templates & Components",
        "Team Analytics Dashboard",
        "200GB Shared Storage",
        "Dedicated Support Manager",
        "SSO Integration",
        "Advanced Security Features",
        "Audit Logs",
        "Custom Integrations"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      icon: Users
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      price: { monthly: "Custom", annual: "Custom" },
      features: [
        "Everything in Team",
        "Custom AI Model Training",
        "On-premise Deployment",
        "Unlimited Storage",
        "24/7 Phone Support",
        "Custom SLA",
        "Dedicated Infrastructure",
        "Advanced Compliance",
        "Custom Integrations",
        "White-label Options"
      ],
      limitations: [],
      cta: "Contact Sales",
      popular: false,
      icon: Shield
    }
  ];

  const additionalFeatures = [
    {
      category: "Development Tools",
      items: [
        "Advanced Code Editor",
        "Real-time Collaboration",
        "Version Control Integration",
        "Automated Testing Suite"
      ]
    },
    {
      category: "AI Features",
      items: [
        "Code Completion",
        "Error Detection & Fixes",
        "Performance Optimization",
        "Security Vulnerability Scanning"
      ]
    },
    {
      category: "Deployment & Operations",
      items: [
        "One-click Deployment",
        "Environment Management",
        "Monitoring & Alerts",
        "Performance Analytics"
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time. Changes take effect immediately for upgrades, or at the end of your billing cycle for downgrades."
    },
    {
      question: "What happens to my projects if I downgrade?",
      answer: "Your projects remain safe. However, some features may become limited based on your new plan. We'll notify you of any changes before they take effect."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund."
    },
    {
      question: "Is there a limit on the number of programs I can deploy?",
      answer: "No, there are no limits on the number of programs you can deploy. However, storage limits may apply based on your plan."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your Solana development needs
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAnnual(!isAnnual)}
              className={`h-6 w-12 p-0 ${isAnnual ? 'bg-primary' : 'bg-muted'}`}
            >
              <div
                className={`h-4 w-4 rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-1' : '-translate-x-1'
                }`}
              />
            </Button>
            <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge variant="secondary" className="ml-2">
                Save 20%
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-6 ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <plan.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  {typeof plan.price.monthly === 'string' ? (
                    <div className="text-3xl font-bold">{plan.price.monthly}</div>
                  ) : (
                    <>
                      <div className="text-3xl font-bold">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                        {plan.price.monthly > 0 && (
                          <span className="text-sm font-normal text-muted-foreground">
                            /{isAnnual ? 'year' : 'month'}
                          </span>
                        )}
                      </div>
                      {isAnnual && plan.price.monthly > 0 && (
                        <div className="text-sm text-muted-foreground">
                          Billed annually
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Check size={16} className="text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of developers using Solana Forge AI to build the future of blockchain applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;