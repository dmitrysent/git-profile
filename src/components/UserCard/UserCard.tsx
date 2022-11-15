import styles from './UserCard.module.scss';
import {UserStat} from "../UserStat";
import {LocalGithubUser} from "../../types";

interface UserCardProps extends LocalGithubUser {
}

export const UserCard = (props: UserCardProps) => (
    <div className={styles.userCard}>
        <UserStat followers={props.followers}
                  following={props.following}
                  repos={props.repos}/>
    </div>
);
