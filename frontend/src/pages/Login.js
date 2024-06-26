import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebaseApp from "./firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const userCredential = await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password);
      // Handle successful login
      console.log(userCredential.user);
      history.push("/"); // Redirect to home page after login
    } catch (error) {
      console.error(error.message);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
