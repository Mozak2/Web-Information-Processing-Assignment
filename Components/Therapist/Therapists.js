//tgis file is where all the therapists are listed
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TherapistCard from './TherapistInfo';

const Therapists = () => {
  const [Therapists, setTherapists] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('http://localhost:4002/Therapists');
      setTherapists(res.data);
    };
    getData();
  }, []);
  return (
    <div className="bg-gray-300">
      <div className="">
        <Link
          to="/Therapists/add"
          className="bg-yellow-200 "
        >
          Add New Therapist
        </Link>
      </div>
      <div className="">
        {Therapists.map((p, i) => (
          <TherapistCard key={i} Therapist={p}></TherapistCard>
        ))}
      </div>
    </div>
  );
};

export default Therapists;
