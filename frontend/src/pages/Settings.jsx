import React, { useEffect, useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const Settings = () => {
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState('Users');

  useEffect(() => {
    setUsers([
      { id: 1, name: 'Admin User', email: 'admin@transportops.com', role: 'Admin', status: 'Active', lastLogin: '07 Jun 2025 10:30 AM' },
      { id: 2, name: 'John Dispatcher', email: 'john@transportops.com', role: 'Dispatcher', status: 'Active', lastLogin: '07 Jun 2025 09:15 AM' },
      { id: 3, name: 'Rahul Driver', email: 'rahul@transportops.com', role: 'Driver', status: 'Active', lastLogin: '07 Jun 2025 08:45 AM' },
      { id: 4, name: 'Manoj Mechanic', email: 'manoj@transportops.com', role: 'Mechanic', status: 'Active', lastLogin: '06 Jun 2025 02:20 PM' },
      { id: 5, name: 'Priya Finance', email: 'priya@transportops.com', role: 'Finance', status: 'Active', lastLogin: '07 Jun 2025 11:00 AM' },
    ]);
  }, []);

  const roleSummary = [
    { role: 'Admin', users: 2 },
    { role: 'Dispatcher', users: 5 },
    { role: 'Driver', users: 45 },
    { role: 'Mechanic', users: 6 },
    { role: 'Finance', users: 4 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings (RBAC)</h1>
      <div className="flex space-x-4 mb-6">
        {['Users', 'Roles & Permissions', 'System Settings', 'Notifications', 'Audit Logs'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-secondary' : 'bg-gray-700'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === 'Users' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Users</h2>
            <button className="bg-secondary p-2 rounded flex items-center">
              <PlusIcon className="w-5 h-5 mr-2" />
              Add User
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg overflow-hidden mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Role</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Last Login</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-700">
                    <td className="p-4 flex items-center">
                      <img src="https://via.placeholder.com/32" alt="User" className="w-8 h-8 rounded-full mr-2" />
                      {user.name}
                    </td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.role}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4">{user.lastLogin}</td>
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
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Role Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {roleSummary.map((role) => (
                <div key={role.role} className="text-center">
                  <p className="text-2xl font-bold">{role.users}</p>
                  <p className="text-gray-400 text-sm">{role.role}</p>
                  <p className="text-gray-500 text-xs">Users</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === 'Roles & Permissions' && (
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Roles & Permissions</h2>
          <p className="text-gray-400">Configure roles and their permissions here.</p>
        </div>
      )}
      {activeTab === 'System Settings' && (
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">System Settings</h2>
          <p className="text-gray-400">Configure system-wide settings here.</p>
        </div>
      )}
      {activeTab === 'Notifications' && (
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <p className="text-gray-400">Manage notification preferences here.</p>
        </div>
      )}
      {activeTab === 'Audit Logs' && (
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Audit Logs</h2>
          <p className="text-gray-400">View system audit logs here.</p>
        </div>
      )}
    </div>
  );
};

export default Settings;
