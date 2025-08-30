import { useState } from "react";
import { WelcomeScreen } from "@/components/Welcome/WelcomeScreen";
import { IDELayout } from "@/components/Layout/IDELayout";

const Index = () => {
  const [showIDE, setShowIDE] = useState(false);

  if (showIDE) {
    return <IDELayout />;
  }

  return <WelcomeScreen onGetStarted={() => setShowIDE(true)} />;
};

export default Index;
