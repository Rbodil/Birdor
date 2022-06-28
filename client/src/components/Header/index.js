import React from "react";
import { Link, useParams } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className='bg-secondary w-screen flex-row justify-center pt-2 pb-2 shrink top-0 sticky z-0 h-22'>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Birdor</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">My Post</Link>
              {/* <Link to={`/profile/${friend.username}`}>Followed</Link> */}
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
