import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <h2>Homepage</h2>
      <LoginButton>
        <Button variant='default'>Login</Button>
      </LoginButton>
    </div>
  );
};

export default HomePage;
