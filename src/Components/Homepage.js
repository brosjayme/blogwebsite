import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
// import GoogleLogin from "@leecheuk/react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import "../styling/home.css";

const Homepage = () => {
  // const [user, setUser] = useState({});
  const dispatch = useDispatch();

  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    dispatch(setSignedIn(true));
    dispatch(setUserData(userObject));
  }

  const isSignedIn = useSelector(selectSignedIn);
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "226419600673-cfhklr7i2uj7ohvb3qshdkkmduv1t9bh.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "",
    });
  }, [isSignedIn]);

  return (
    <div className="home-page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
        <div className="login-message">
          <h2>🔋</h2>
          <h1>A Readers favourite place!!</h1>
          <p>
            we provide high quality online resource for reading blogs. just sign
            up and start reading some quality blogs.
          </p>
          <div id="signInDiv"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
