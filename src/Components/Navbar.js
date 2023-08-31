import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setSearchInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import "../styling/Navbar.css";

const Navbar = () => {
  const [inputValue, setInputVaule] = useState("tech");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setSearchInput(inputValue));
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
            src={userData?.picture}
            alt={userData?.name}
          />
          <h1 className="signedIn">{userData?.given_name}</h1>
          <button onClick={logout} className="logout-button">
            Logout😮
          </button>
        </div>
      ) : (
        <h1 className="notSignedIn">User not available😯</h1>
      )}
    </div>
  );
};
export default Navbar;
