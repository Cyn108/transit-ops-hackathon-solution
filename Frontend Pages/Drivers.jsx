import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/drivers');
        setDrivers(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDrivers();
  }, []);

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(search.toLowerCase()) ||
    driver.license_no.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Drivers</h1>
        <button className="bg-secondary p-2 rounded flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Driver
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search driver (e.g. Rahul Sharma)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded outline-none"
        />
      </div>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-left">Driver Name</th>
              <th className="p-4 text-left">License No.</th>
              <th className="p-4 text-left">License Expiry</th>
              <th className="p-4 text-left">Experience</th>
              <th className="p-4 text-left">Safety Score</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Assigned Vehicle</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredDrivers.map((driver) => (
              <tr key={driver.id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="p-4 flex items-center">
                  <img src="https://via.placeholder.com/32" alt="Driver" className="w-8 h-8 rounded-full mr-2" />
                  {driver.name}
                </td>
                <td className="p-4">{driver.license_no}</td>
                <td className="p-4">{driver.license_expiry}</td>
                <td className="p-4">{driver.experience}</td>
                <td className="p-4">{driver.safety_score}%</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    driver.status === 'Available' ? 'bg-green-500' :
                    driver.status === 'On Trip' ? 'bg-blue-500' : 'bg-gray-500'
                  }`}>
                    {driver.status}
                  </span>
                </td>
                <td className="p-4">{driver.assigned_vehicle || 'N/A'}</td>
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
        Showing 1 to {filteredDrivers.length} of {drivers.length} entries
      </div>
    </div>
  );
};

export default Drivers;

