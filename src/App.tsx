import {Container} from "./components/Container";
import {ThemeSwitcher} from "./components/ThemeSwitcher";
import {TheHeader} from "./components/TheHeader";
import {Search} from "./components/Search";

function App() {
  return (
    <Container>
      {<TheHeader />}
      <Search hasError onSubmit={() => {}}/>
    </Container>
  );
}

export default App;
