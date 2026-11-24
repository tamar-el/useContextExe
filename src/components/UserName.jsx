
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserName() {
  const userName = useContext(UserContext);

  return <h3>Hello, {userName}!</h3>;
}

export default UserName;
