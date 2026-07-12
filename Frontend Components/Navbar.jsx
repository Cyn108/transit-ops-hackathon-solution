import React from 'react';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <header className="bg-primary border-b border-gray-700 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        <input type="text" placeholder="Search..." className="bg-transparent ml-2 outline-none" />
      </div>
      <div className="flex items-center space-x-4">
        <BellIcon className="w-5 h-5 text-gray-400" />
        <div className="flex items-center">
          <span className="text-sm">Admin</span>
          <img src="https://via.placeholder.com/32" alt="Profile" className="w-8 h-8 rounded-full ml-2" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

