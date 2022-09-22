// This file is a page where all the clients are listed
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClientInfo from './ClientInfo';

const Clients = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:4002/clients');
      setClients(res.data);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=" bg-blue-300">
      <div className="flex justify-center">
        <Link to='/clients/add' className='bg-purple-300 '>Add New User</Link>
      </div>
      <div className="">
        {clients.map((c, i) => (
          <ClientInfo key={i} client={c}></ClientInfo>
        ))}
      </div>
    </div>
  );
};

export default Clients;
