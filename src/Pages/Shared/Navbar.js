import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = (event) => {
    signOut(auth);
  };
  return (
    <div className="">
      {user && (
        <div className="navbar bg-neutral text-neutral-content ">
          <a className="btn btn-ghost normal-case text-xl">
            Hello {user?.displayName}
          </a>
          {user && <button onClick={handleSignOut}>Sign Out</button>}
        </div>
      )}
    </div>
  );
};

export default Navbar;
