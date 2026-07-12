import React, { useEffect, useState } from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalVehicles: 0,
    activeTrips: 0,
    availableDrivers: 0,
    pendingMaintenance: 0,
    monthlyExpenses: 0,
    fleetUtilization: 0,
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [tripStatus, setTripStatus] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    setStats({
      totalVehicles: 120,
      activeTrips: 48,
      availableDrivers: 35,
      pendingMaintenance: 7,
      monthlyExpenses: 340000,
      fleetUtilization: 82,
    });
    setRecentActivities([
      { id: 1, activity: 'Trip #204 Started', time: '10 mins ago' },
      { id: 2, activity: 'Vehicle KA01AB1234 Returned', time: '25 mins ago' },
      { id: 3, activity: 'Maintenance Completed - KA02CD5678', time: '1 hour ago' },
      { id: 4, activity: 'Fuel Expense Added - ₹12,500', time: '2 hours ago' },
    ]);
    setTripStatus([
      { name: 'Completed', value: 156 },
      { name: 'In Progress', value: 48 },
      { name: 'Cancelled', value: 8 },
    ]);
    setMonthlyData([
      { month: 'Jan', expenses: 250000 },
      { month: 'Feb', expenses: 280000 },
      { month: 'Mar', expenses: 300000 },
      { month: 'Apr', expenses: 320000 },
      { month: 'May', expenses: 340000 },
      { month: 'Jun', expenses: 330000 },
    ]);
  }, []);

  const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Total Vehicles</h3>
          <p className="text-3xl font-bold">{stats.totalVehicles}</p>
          <p className="text-green-400 text-sm">+6 this month</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Active Trips</h3>
          <p className="text-3xl font-bold">{stats.activeTrips}</p>
          <p className="text-green-400 text-sm">+12 today</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Available Drivers</h3>
          <p className="text-3xl font-bold">{stats.availableDrivers}</p>
          <p className="text-green-400 text-sm">+5 today</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Pending Maintenance</h3>
          <p className="text-3xl font-bold">{stats.pendingMaintenance}</p>
          <p className="text-red-400 text-sm">+2 from yesterday</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Monthly Expenses</h3>
          <p className="text-3xl font-bold">₹{stats.monthlyExpenses.toLocaleString()}</p>
          <p className="text-red-400 text-sm">-4.5%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Fleet Utilization</h3>
          <p className="text-4xl font-bold mb-2">{stats.fleetUtilization}%</p>
          <p className="text-green-400 text-sm mb-4">+7%</p>
          <LineChart width={400} height={200} data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
            <Line type="monotone" dataKey="expenses" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Trips Status</h3>
          <PieChart width={400} height={200}>
            <Pie data={tripStatus} cx="50%" cy="50%" outerRadius={60} fill="#8884d8" dataKey="value" label>
              {tripStatus.map((entry, index) => (
                <Cell key={cell-${index}} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
            <Legend wrapperStyle={{ color: '#9ca3af' }} />
          </PieChart>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
        <ul className="space-y-2">
          {recentActivities.map((activity) => (
            <li key={activity.id} className="flex justify-between items-center p-2 rounded hover:bg-gray-700">
              <span>{activity.activity}</span>
              <span className="text-gray-400 text-sm">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
