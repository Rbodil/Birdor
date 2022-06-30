import React from "react";

const Footer = () => {
  return (
    <footer className='bg-secondary w-screen flex-row justify-center text-center pt-1 pb-1 shrink bottom-0 fixed z-9999'>
      <div className="m-auto">
        <a className="exlink px-1" target='_blank' rel="noreferrer" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        <a className="exlink px-1" target='_blank' rel="noreferrer" href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a>
        <a className="exlink px-1" target='_blank' rel="noreferrer" href="https://twitter.com/?lang=en"><i className="fab fa-twitter-square"></i></a>
        <a className="exlink px-1" target='_blank' rel="noreferrer" href="https://www.youtube.com/"><i className="fab fa-youtube-square"></i></a>
        <a className="exlink px-1" target='_blank' rel="noreferrer" href="https://www.pinterest.com/"><i className="fab fa-pinterest-square"></i></a>
        <div className="m-auto text-sm">
          &copy;{new Date().getFullYear()} Birdr
        </div>
      </div>
    </footer>
  );
};

export default Footer;
