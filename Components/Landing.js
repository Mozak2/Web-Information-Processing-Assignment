import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className=" bg-gray-300">
      <div className="flex flex-col justify-content items-center pt-5">
        <Link to="/clients">
          <button className="py-3 px-4 text-3xl bg-blue-400 w-80 my-4">
            Clients
          </button>
        </Link>
        <Link to="/Therapists">
          <button className="py-3 px-4 text-3xl bg-blue-400 w-80 my-4">
            Therapists
          </button>
        </Link>
        <Link to="/Sessions">
          <button className="py-3 px-4 text-3xl bg-blue-400 w-80 my-4">
            Sessions
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
