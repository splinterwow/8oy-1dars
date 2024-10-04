import React from 'react';
import logo from "../assets/Logo.png";

function Footer() {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-start gap-3 space-x-4 flex-col">
          <img src={logo} alt="Logo" className="h-10" />
          <p className="">Copyright © 2021 BRIX Templates | All Rights Reserved</p>
        </div>

        <div className="mt-4 md:mt-0">
          <div className="flex items-center rounded-full shadow-md p-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 outline-none w-64"
            />
            <button className="rounded-full px-6 py-2 shadow-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
