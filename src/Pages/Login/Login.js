import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = (event) => {
    signInWithGoogle();
  };
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    // navigate(from, { replace: true });
    navigate("/home");
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div>
        <h2>Login</h2>
        <button onClick={handleGoogleSignIn} class="btn btn-outline">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
