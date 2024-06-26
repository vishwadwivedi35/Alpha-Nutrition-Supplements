import React from "react";
import firebaseApp from "./firebaseConfig";

const GoogleAuth = () => {
  const handleGoogleLogin = async () => {
    try {
      const provider = new firebaseApp.auth.GoogleAuthProvider();
      const userCredential = await firebaseApp.auth().signInWithPopup(provider);
      // Handle successful Google login
      console.log(userCredential.user);
    } catch (error) {
      console.error(error.message);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div>
      <h2>Google Authentication</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
};

export default GoogleAuth;
