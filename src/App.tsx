import "bootstrap/dist/css/bootstrap.min.css";
import { HomeScreen } from "@/screen/HomeStack";
import { Container } from "@/components/Containers";

export const App = () => {
  return (
    <Container>
      <HomeScreen />
    </Container>
  );
};

export default App;
