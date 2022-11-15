import {Container} from "./components/Container";
import {ThemeSwitcher} from "./components/ThemeSwitcher";
import {TheHeader} from "./components/TheHeader";
import {Search} from "./components/Search";
import {UserStat} from "./components/UserStat";
import {UserCard} from "./components/UserCard";

import { defaultUser } from "./mock";

function App() {
  return (
    <Container>
      {<TheHeader />}
      <Search hasError onSubmit={() => {}}/>
        <UserCard {...defaultUser} />
    </Container>
  );
}

export default App;
