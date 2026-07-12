import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/trips');
        setTrips(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrips();
  }, []);

  const filteredTrips = trips.filter((trip) =>
    trip.trip_id.toLowerCase().includes(search.toLowerCase()) ||
    trip.source.toLowerCase().includes(search.toLowerCase()) ||
    trip.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Trips</h1>
        <button className="bg-secondary p-2 rounded flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          Create Trip
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search (e.g. Trip #204)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded outline-none"
        />
      </div>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-left">Trip ID</th>
              <th className="p-4 text-left">Source</th>
              <th className="p-4 text-left">Destination</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Driver</th>
              <th className="p-4 text-left">Start Date</th>
              <th className="p-4 text-left">End Date</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrips.map((trip) => (
              <tr key={trip.id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="p-4">{trip.trip_id}</td>
                <td className="p-4">{trip.source}</td>
                <td className="p-4">{trip.destination}</td>
                <td className="p-4">{trip.vehicle}</td>
                <td className="p-4">{trip.driver}</td>
                <td className="p-4">{trip.start_date}</td>
                <td className="p-4">{trip.end_date}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    trip.status === 'Completed' ? 'bg-green-500' :
                    trip.status === 'In Progress' ? 'bg-blue-500' :
                    trip.status === 'Scheduled' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}>
                    {trip.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="mr-2">
                    <PencilIcon className="w-5 h-5 text-gray-400" />
                  </button>
                  <button>
                    <TrashIcon className="w-5 h-5 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-center text-gray-400">
        Showing 1 to {filteredTrips.length} of {trips.length} entries
      </div>
    </div>
  );
};

export default Trips;
