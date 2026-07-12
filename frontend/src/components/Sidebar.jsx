import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, TruckIcon, UserGroupIcon, MapPinIcon, WrenchIcon, CurrencyDollarIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <div className="w-64 bg-primary border-r border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold flex items-center">
          <TruckIcon className="w-6 h-6 mr-2 text-secondary" />
          TransportOps
        </h1>
        <p className="text-xs text-gray-400 mt-1">Fleet & Transport Management</p>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard" className="flex items-center p-2 rounded hover:bg-gray-700">
              <HomeIcon className="w-5 h-5 mr-3" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/vehicles" className="flex items-center p-2 rounded hover:bg-gray-700">
              <TruckIcon className="w-5 h-5 mr-3" />
              Vehicles
            </Link>
          </li>
          <li>
            <Link to="/drivers" className="flex items-center p-2 rounded hover:bg-gray-700">
              <UserGroupIcon className="w-5 h-5 mr-3" />
              Drivers
            </Link>
          </li>
          <li>
            <Link to="/trips" className="flex items-center p-2 rounded hover:bg-gray-700">
              <MapPinIcon className="w-5 h-5 mr-3" />
              Trips
            </Link>
          </li>
          <li>
            <Link to="/maintenance" className="flex items-center p-2 rounded hover:bg-gray-700">
              <WrenchIcon className="w-5 h-5 mr-3" />
              Maintenance
            </Link>
          </li>
          <li>
            <Link to="/expenses" className="flex items-center p-2 rounded hover:bg-gray-700">
              <CurrencyDollarIcon className="w-5 h-5 mr-3" />
              Expenses
            </Link>
          </li>
          <li>
            <Link to="/reports" className="flex items-center p-2 rounded hover:bg-gray-700">
              <ChartBarIcon className="w-5 h-5 mr-3" />
              Reports
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center p-2 rounded hover:bg-gray-700">
              <CogIcon className="w-5 h-5 mr-3" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
