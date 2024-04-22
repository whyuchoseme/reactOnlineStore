import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/selectors";
import { User } from "./component";

export const UserContainer = ({ usersIds }) => {
  const user = useSelector((state) => selectUserById(state, usersIds));
  return <User user={user} />;
};
