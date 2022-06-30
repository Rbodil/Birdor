import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const user = Auth.loggedIn() ? Auth.getProfile() : undefined;

  return (
    <header className="bg-secondary w-full flex-row justify-center pt-4 pb-3 shrink top-0">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Birdr</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to={`/profile/${user.data.username}`}>My Posts</Link>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
