import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vehicles');
        setVehicles(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVehicles();
  }, []);

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.vehicle_no.toLowerCase().includes(search.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vehicles</h1>
        <button className="bg-secondary p-2 rounded flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Vehicle
        </button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search (e.g. KA01AB1234)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 bg-gray-700 rounded outline-none"
        />
      </div>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-left">Vehicle No.</th>
              <th className="p-4 text-left">Model</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Capacity</th>
              <th className="p-4 text-left">Reg. Expiry</th>
              <th className="p-4 text-left">Insurance Expiry</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredVehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="p-4">{vehicle.vehicle_no}</td>
                <td className="p-4">{vehicle.model}</td>
                <td className="p-4">{vehicle.type}</td>
                <td className="p-4">{vehicle.capacity}</td>
                <td className="p-4">{vehicle.reg_expiry}</td>
                <td className="p-4">{vehicle.insurance_expiry}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    vehicle.status === 'Active' ? 'bg-green-500' :
                    vehicle.status === 'Maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}>
                    {vehicle.status}
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
        Showing 1 to {filteredVehicles.length} of {vehicles.length} entries
      </div>
    </div>
  );
};

export default Vehicles;

