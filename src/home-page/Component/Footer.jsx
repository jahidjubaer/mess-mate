import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2D2D2D] ">
      <footer className="footer sm:footer-horizontal w-11/12 lg:w-10/12 mx-auto text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <i className="fa-solid fa-2xl text-[#4CAF50] fa-utensils"></i>
          <p className="text-lg">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <i className="fa-brands fa-x-twitter text-2xl"></i>
          </a>
          <a>
            <i className="fa-brands fa-youtube text-2xl"></i>
          </a>
          <a>
            <i className="fa-brands fa-facebook-f text-2xl"></i>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
