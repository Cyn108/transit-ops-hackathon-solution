import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const Maintenance = () => {
  const [maintenance, setMaintenance] = useState([]);
  const [activeTab, setActiveTab] = useState('Scheduled');

  useEffect(() => {
    const fetchMaintenance = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/maintenance');
        setMaintenance(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMaintenance();
  }, []);

  const filteredMaintenance = maintenance.filter((m) => m.status === activeTab);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Maintenance</h1>
        <button className="bg-secondary p-2 rounded flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          Schedule Maintenance
        </button>
      </div>
      <div className="flex space-x-4 mb-4">
        {['Scheduled', 'In Progress', 'Completed'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={'px-4 py-2 rounded ${activeTab === tab ? 'bg-secondary' : 'bg-gray-700'}'}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-left">Vehicle No.</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Last Service</th>
              <th className="p-4 text-left">Next Service</th>
              <th className="p-4 text-left">Kms Due</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Est. Cost</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMaintenance.map((m) => (
              <tr key={m.id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="p-4">{m.vehicle_no}</td>
                <td className="p-4">{m.type}</td>
                <td className="p-4">{m.last_service}</td>
                <td className="p-4">{m.next_service}</td>
                <td className="p-4">{m.kms_due}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    m.status === 'Completed' ? 'bg-green-500' :
                    m.status === 'In Progress' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}>
                    {m.status}
                  </span>
                </td>
                <td className="p-4">₹{m.est_cost.toLocaleString()}</td>
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
        Showing 1 to {filteredMaintenance.length} of {maintenance.length} entries
      </div>
    </div>
  );
};

export default Maintenance;
