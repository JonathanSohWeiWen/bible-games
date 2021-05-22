import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

import H1 from "../components/Basic_Components/H1";
import H3 from "../components/Basic_Components/H3";
import { AcceptButton } from "../components/Basic_Components/Button";
import Input from "../components/Basic_Components/Input";
import ErrorPrompt from "../components/Basic_Components/ErrorPrompt";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(user.email, user.password);
      history.push("/");
    } catch {
      setError("Failed to login");
    }
  };

  return (
    <div>
      <H1 text="Login" />
      <div className="flex flex-col">
        <div className=" my-5 self-center min-w-max w-1/3">
          <H3 text="Email" />
          <Input
            type="text"
            placeholder="Enter Email Address"
            name="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="my-5 self-center min-w-max w-1/3">
          <H3 text="Password" />
          <Input
            type="password"
            placeholder="Enter Password"
            name="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        {error && (
          <div className="flex justify-center">
            <ErrorPrompt text={error} />
          </div>
        )}

        <div className="flex justify-center py-8">
          <AcceptButton text="Sign Up" onClick={handleLogin} />
        </div>
      </div>
      <hr />
      <div className="flex justify-center my-2">
        <Link to="/signup">Don't have an account?</Link>
      </div>
      <div className="flex justify-center my-2">
        <Link to="/">I don't need an account</Link>
      </div>
    </div>
  );
};

export default Login;
