import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Input from "./Input";
import Output from "./Output";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <Input></Input>
      <Output></Output>
    </div>
  );
};

export default Home;
