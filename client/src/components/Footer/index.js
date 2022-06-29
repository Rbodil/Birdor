import React from "react";

const Footer = () => {
  return (
    <footer className='bg-secondary w-screen flex-row justify-center pt-3 pb-2 shrink bottom-0 fixed z-9999'>
      <div className="container">
        &copy;{new Date().getFullYear()} by Conner, Luke, Reagan, Nancy
      </div>
    </footer>
  );
};

export default Footer;
