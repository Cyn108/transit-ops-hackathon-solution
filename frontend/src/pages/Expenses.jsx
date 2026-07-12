import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/expenses');
        setExpenses(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchExpenses();
  }, []);

  const filteredExpenses = activeTab === 'All' ? expenses : expenses.filter((e) => e.status === activeTab);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Fuel & Expense Management</h1>
        <button className="bg-secondary p-2 rounded flex items-center">
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Expense
        </button>
      </div>
      <div className="flex space-x-4 mb-4">
        {['All', 'Approved', 'Pending', 'Rejected'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={px-4 py-2 rounded ${activeTab === tab ? 'bg-secondary' : 'bg-gray-700'}}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Total Expenses (Jun 2025)</h3>
          <p className="text-2xl font-bold">₹3,40,000</p>
          <p className="text-red-400 text-sm">-4.5%</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Approved</h3>
          <p className="text-2xl font-bold">₹2,75,000</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Pending</h3>
          <p className="text-2xl font-bold">₹45,000</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Rejected</h3>
          <p className="text-2xl font-bold">₹20,000</p>
        </div>
      </div>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Trip ID</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Amount (₹)</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((e) => (
              <tr key={e.id} className="border-b border-gray-700 hover:bg-gray-700">
                <td className="p-4">{e.date}</td>
                <td className="p-4">{e.trip_id}</td>
                <td className="p-4">{e.type}</td>
                <td className="p-4">{e.description}</td>
                <td className="p-4">{e.amount.toLocaleString()}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    e.status === 'Approved' ? 'bg-green-500' :
                    e.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}>
                    {e.status}
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
        Showing 1 to {filteredExpenses.length} of {expenses.length} entries
      </div>
    </div>
  );
};

export default Expenses;

