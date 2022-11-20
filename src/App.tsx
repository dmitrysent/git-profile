import {Container} from "./components/Container";
import {ThemeSwitcher} from "./components/ThemeSwitcher";
import {TheHeader} from "./components/TheHeader";
import {Search} from "./components/Search";
import {UserStat} from "./components/UserStat";
import {UserCard} from "./components/UserCard";

import { defaultUser } from "./mock";
import {useState} from "react";
import {GithubError, GithubUser, LocalGithubUser} from "./types";
import {isGithubUser} from "./utils/typeguards";
import {extractLocalUser} from "./utils/extract-loacl-user";


const BASE_URL = "https://api.github.com/users/"

function App() {

    const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)

    const fetchUser = async (username: string) => {
        const url = BASE_URL + username

        const res = await fetch(url)
        const user = await res.json() as GithubUser | GithubError

        if (isGithubUser(user)) {
            setUser(extractLocalUser(user))

        } else {
            setUser(null)
        }
    }


  return (
    <Container>
      {<TheHeader />}
      <Search hasError={!user} onSubmit={fetchUser}/>
        {user && (
            <UserCard {...user} />
        )}

    </Container>
  );
}

export default App;
