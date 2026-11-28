import { useState } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  const [signUp, setSignUp] = useState(false);

  return (
    <>
      {signUp ? (
        <SignUp onSignin={() => setSignUp(false)} />
      ) : (
        <Login onSignUp={() => setSignUp(true)} />
      )}
    </>
  );
}

export default App;