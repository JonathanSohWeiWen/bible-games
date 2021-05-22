import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

import H1 from "../components/Basic_Components/H1";
import H3 from "../components/Basic_Components/H3";
import { AcceptButton } from "../components/Basic_Components/Button";
import Input from "../components/Basic_Components/Input";
import ErrorPrompt from "../components/Basic_Components/ErrorPrompt";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const createUserFirebase = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      );
    } catch (err) {
      setError("Something went wrong. Please try again later");
    }
  };

  const createNewUser = () => {
    if (newUser.password === newUser.confirmPassword) {
      createUserFirebase();
    } else {
      setError("Passwords do not match. Please try again");
    }
  };

  return (
    <div>
      <H1 text="Sign Up" />
      <div className="flex flex-col">
        <div className=" my-5 self-center min-w-max w-1/3">
          <H3 text="Email" />
          <Input
            type="text"
            placeholder="Enter Email Address"
            name="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </div>
        <div className="my-5 self-center min-w-max w-1/3">
          <H3 text="Password" />
          <Input
            type="password"
            placeholder="Enter Password"
            name="Password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
        </div>
        <div className="my-5 self-center min-w-max w-1/3">
          <H3 text="Confirm Password" />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="ConfirmPassword"
            value={newUser.confirmPassword}
            onChange={(e) =>
              setNewUser({ ...newUser, confirmPassword: e.target.value })
            }
          />
        </div>
        {error && (
          <div className="flex justify-center">
            <ErrorPrompt text={error} />
          </div>
        )}

        <div className="flex justify-center py-8">
          <AcceptButton text="Sign Up" onClick={createNewUser} />
        </div>
      </div>
      <hr />
      <div className="flex justify-center my-2">
        <Link to="/login">Already have an account?</Link>
      </div>
      <div className="flex justify-center my-2">
        <Link to="/">I don't need an account</Link>
      </div>
    </div>
  );
};

export default SignUp;
