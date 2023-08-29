import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import "../styling/Navbar.css";

const Navbar = () => {
  const [inputValue, setInputVaule] = useState("");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();
  const logout = (Response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

  return (
    <div className="navbar">
      <h1 className="navbar-header">BlogMania</h1>
      {isSignedIn && (
        <div className="blog-search">
          <input
            className="search"
            placeholder="search for a blog"
            value={inputValue}
            onChange={(e) => setInputVaule(e.target.value)}
          />
          <button className="submit" onClick={handleClick}>
            Search
          </button>
        </div>
      )}

      {isSignedIn ? (
        <div className="navbar-user-data">
          <Avatar
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          />
          <h1 className="signedIn">{userData?.givenName}</h1>
          <GoogleLogout
            clientId="AIzaSyDTbTJsBBwgUG_CciZ8ecNw77wXDLJ-kNc"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout-button"
              >
                Logout😮
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <h1 className="notSignedIn">User not available😯</h1>
      )}
    </div>
  );
};
export default Navbar;
