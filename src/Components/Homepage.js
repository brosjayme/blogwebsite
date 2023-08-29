import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import "../styling/home.css";

const Homepage = () => {
  const isSignedIn = useSelector(selectSignedIn);

  const dispatch = useDispatch();
  const login = (Response) => {
    console.log(Response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(Response.profileObj));
  };

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
          <GoogleLogin
            clientId="AIzaSyDTbTJsBBwgUG_CciZ8ecNw77wXDLJ-kNc"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login-button"
              >
                Login with Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSigedIn={true}
            cookiePolicy={"single-host-origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
