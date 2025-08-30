import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Rocket, CheckCircle, AlertCircle, Clock, ExternalLink } from "lucide-react";

export const DeploymentPanel = () => {
  const [selectedNetwork, setSelectedNetwork] = useState("devnet");
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState(0);

  const handleDeploy = () => {
    setDeploymentStatus('deploying');
    setProgress(0);
    
    // Simulate deployment progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDeploymentStatus('success');
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const deployments = [
    {
      id: '1',
      name: 'Token Minting Program',
      network: 'Devnet',
      status: 'success',
      address: 'Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      name: 'NFT Marketplace',
      network: 'Testnet',
      status: 'success',
      address: 'BPFLoaderUpgradeab1e11111111111111111111111',
      timestamp: '1 day ago',
    },
  ];

  return (
    <div className="h-full p-6 bg-background">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Deployment Dashboard</h1>
            <p className="text-muted-foreground">Deploy your Solana programs to different networks</p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Rocket className="text-primary-foreground" size={24} />
          </div>
        </div>

        {/* Deployment Form */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Deploy Current Program</h2>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Target Network</label>
              <Select value={selectedNetwork} onValueChange={setSelectedNetwork}>
                <SelectTrigger>
                  <SelectValue placeholder="Select network" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="devnet">Devnet (Testing)</SelectItem>
                  <SelectItem value="testnet">Testnet (Staging)</SelectItem>
                  <SelectItem value="mainnet">Mainnet (Production)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {deploymentStatus === 'deploying' && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Deploying to {selectedNetwork}...</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            {deploymentStatus === 'success' && (
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle size={16} />
                  <span className="font-medium">Deployment Successful!</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Program deployed to {selectedNetwork}
                </p>
              </div>
            )}

            <Button 
              onClick={handleDeploy} 
              disabled={deploymentStatus === 'deploying'}
              className="w-full"
            >
              <Rocket size={16} className="mr-2" />
              {deploymentStatus === 'deploying' ? 'Deploying...' : 'Deploy Program'}
            </Button>
          </div>
        </Card>

        {/* Deployment History */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Deployments</h2>
          
          <div className="space-y-3">
            {deployments.map((deployment) => (
              <div key={deployment.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-medium">{deployment.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {deployment.network}
                    </Badge>
                    <div className="flex items-center gap-1 text-accent">
                      <CheckCircle size={12} />
                      <span className="text-xs">Live</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {deployment.address}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Deployed {deployment.timestamp}
                  </div>
                </div>
                
                <Button variant="ghost" size="sm">
                  <ExternalLink size={14} />
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};