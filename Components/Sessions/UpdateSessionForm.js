import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams, useLocation } from 'react-router-dom';

const UpdateSessionForm = () => {
  const { state } = useLocation();
  const history = useHistory();
  const { id } = useParams();
  const [clients, setClients] = useState([]);
  const [Therapists, setTherapists] = useState([]);

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    Therapist: '',
    client: '',
    price: null,
    sessionNumber: '',
    duration: '',
    type: '',
    notes: '',
  });

  const sessionTypes = [
    'Assessment',
    'Massage Therapy',
    'Stretching and Exercising',
    'Technology(Lasers and /or Ultrasound)',
    'Hydrotherapy',
    'Electrotherapy',
  ];
  useEffect(() => {
    const getData = async () => {
      const clientsRes = await axios.get('http://localhost:4002/clients');
      const TherapistsRes = await axios.get('http://localhost:4002/Therapists');
      setClients(clientsRes.data);
      setTherapists(TherapistsRes.data);
      let passeddate = new Date(state.session.date);
      let passedtime = new Date(state.session.time);

      setFormData({
        ...formData,
        date: `${passeddate.getFullYear()}-${
          passeddate.getMonth() + 1 < 10
            ? `0${passeddate.getMonth() + 1}`
            : passeddate.getMonth() + 1
        }-${passeddate.getDate()}`,
        time: passedtime.toTimeString().substring(0, 5),
        Therapist: state.session.Therapist._id,
        client: state.session.client._id,
        price: state.session.price,
        duration: state.session.duration,
        type: state.session.type,
        notes: state.session.notes,
      });
    };
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { date, time, Therapist, client, price, duration, type, notes } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        header: {
          'Content-Type': 'application/json',
        },
      };

      await axios.patch(
        `http://localhost:4002/sessions/${id}`,
        formData,
        config
      );

      history.push('/');
    } catch (error) {
      const errors = error.response.data.errors;
      console.log(errors);
    }
  };

  return (
    <div className="flex-col w-full justify-center items-center">
      <div className="text-left font-bold text-3xl py-3 ml-3">
        Update Session
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="w-full flex flex-wrap">
        <label className="block mx-4 w-full sm:w-5/12">
          <span className="text-gray-700">Session Date</span>
          <input
            required
            type="date"
            className="form-input mt-1 block w-full"
            name="date"
            value={date}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label className="block mx-4 w-full sm:w-5/12">
          <span className="text-gray-700">Session Time</span>
          <input
            required
            name="time"
            value={time}
            onChange={(e) => onChange(e)}
            type="time"
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mx-4 w-full sm:w-5/12">
          <span className="text-gray-700">Therapist</span>
          <select
            required
            name="Therapist"
            value={Therapist}
            onChange={(e) => onChange(e)}
            className="form-select block w-full mt-1"
          >
            <option disabled value=""></option>
            {Therapists.map((p) => (
              <option key={p._id} value={p._id}>
                {p.fname} {p.lname}
              </option>
            ))}
          </select>
        </label>
        <label className="block mx-4 w-full sm:w-5/12">
          <span className="text-gray-700">Client</span>
          <select
            required
            name="client"
            value={client}
            onChange={(e) => onChange(e)}
            className="form-select block w-full mt-1"
          >
            <option disabled value=""></option>
            {clients.map((c) => (
              <option key={c._id} value={c._id}>
                {c.fname} {c.lname}
              </option>
            ))}
          </select>
        </label>
        <label className="block mx-4 w-full sm:w-5/12">
          <span className="text-gray-700">Price</span>
          <input
            required
            type="number"
            className="form-input mt-1 block w-full"
            placeholder="€100"
            name="price"
            value={price}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label className="block mx-4 w-full sm:w-5/12">
          <span className="text-gray-700">Duration/Cancelled/No Show</span>
          <input
            required
            type="text"
            className="form-input mt-1 block w-full"
            placeholder="1 hour"
            name="duration"
            value={duration}
            onChange={(e) => onChange(e)}
          />
        </label>
        <label className="block mx-4 w-full sm:w-5/12">
          <span className="text-gray-700">Type</span>
          <select
            required
            name="type"
            value={type}
            onChange={(e) => onChange(e)}
            className="form-select block w-full mt-1"
          >
            <option disabled value=""></option>
            {sessionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block w-full">
          <span className="text-gray-700">Session Notes</span>
          <textarea
            required
            className="form-textarea mt-1 block w-full h-24"
            rows="3"
            placeholder="Enter any session notes."
            name="notes"
            value={notes}
            onChange={(e) => onChange(e)}
          ></textarea>
        </label>

        <button
          className="bg-green-300 p-3 m-4 rounded-2xl font-bold block w-full"
          type="submit"
        >
          Update Session
        </button>
      </form>
    </div>
  );
};

export default UpdateSessionForm;
