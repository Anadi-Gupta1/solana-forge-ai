import { WelcomeScreen } from "@/components/Welcome/WelcomeScreen";
import { Layout } from "@/components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/ide");
  };

  return (
    <Layout>
      <WelcomeScreen onGetStarted={handleGetStarted} />
    </Layout>
  );
};

export default Index;
