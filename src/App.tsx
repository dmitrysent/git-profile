import {Container} from "./components/Container";
import {ThemeSwitcher} from "./components/ThemeSwitcher";
import {TheHeader} from "./components/TheHeader";

function App() {
  return (
    <Container>
      {<TheHeader />}
    </Container>
  );
}

export default App;
