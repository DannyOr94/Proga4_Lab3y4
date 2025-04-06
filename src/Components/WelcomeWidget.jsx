import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function WelcomeWidget({userName}) {
  const {user} = useContext(AuthContext)
  return (
      <div>
        <h1>Welcome to react {user.email}</h1> 
      </div>
    );
}
