import React from 'react';
import { Link } from 'react-router-dom';
//this file displays the client information on the shape created by the path

const ClientInfo = ({ client }) => {
  return (
    <div className="">
      <div className="">
        <svg
          className="w-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <div className="">
        <div className="">
          {client.fname} {client.lname}
        </div>

        <Link
          to={{
            pathname: `/clients/${client._id}`,
            state: { client },
          }}
        >
          <button className="">
            View {client.fname}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClientInfo;
