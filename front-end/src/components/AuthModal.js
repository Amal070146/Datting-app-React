// import React from 'react'

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ setShowModal, isSignUp }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:1337/user/createuser", {
          email: email,
          password: password,
        })
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error.data.message);
    }
  };
  const handleLoginSubmit = async (e) => {
    console.log("Hiii");
    e.preventDefault();
    try {
      axios
        .get(`http://localhost:1337/user/getuser/${email}/${password}`)
        .then((data) => {
          if (data.data.success) {
            navigate("/onboarding",{state:data.data.data._id});
          }
        });
    } catch (error) {
      console.log(error.data.message);
    }
  };

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>

      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>
        By clicking Log In, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy.
      </p>
      <form onSubmit={isSignUp ? handleSignupSubmit : handleLoginSubmit}>
        <input
          type="email"
          placeholder="email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            placeholder="confirm password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
      </form>

      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};
export default AuthModal;
