import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-gray-800 text-gray-100 shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <Link
          to="/"
          className="text-2xl no-underline text-green hover:text-green-dark"
        >
          CS230 Therapist Web
        </Link>
      </div>
      <div>
        <Link
          to="/clients"
          className="text-lg text-green hover:text-green-dark ml-9"
        >
          Clients
        </Link>
        <Link
          to="/Therapists"
          className="text-lg  text-green hover:text-green-dark ml-9"
        >
          Therapists
        </Link>
        <Link
          to="/sessions"
          className="text-lg text-green hover:text-green-dark ml-9"
        >
          Sessions
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
