
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserGreeting() {
  const userName = useContext(UserContext);

  return <h2>Welcome back, {userName}!</h2>;
}

export default UserGreeting;
