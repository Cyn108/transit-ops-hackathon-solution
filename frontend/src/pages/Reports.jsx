import React, { useEffect, useState } from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const Reports = () => {
  const [stats, setStats] = useState({
    totalTrips: 0,
    totalRevenue: 0,
    totalExpenses: 0,
    profit: 0,
  });
  const [fleetUtilization, setFleetUtilization] = useState([]);
  const [expenseBreakdown, setExpenseBreakdown] = useState([]);
  const [revenueVsExpenses, setRevenueVsExpenses] = useState([]);
  const [topDrivers, setTopDrivers] = useState([]);

  useEffect(() => {
    setStats({
      totalTrips: 204,
      totalRevenue: 1280000,
      totalExpenses: 340000,
      profit: 940000,
    });
    setFleetUtilization([
      { day: 'Mon', utilization: 75 },
      { day: 'Tue', utilization: 82 },
      { day: 'Wed', utilization: 78 },
      { day: 'Thu', utilization: 85 },
      { day: 'Fri', utilization: 90 },
      { day: 'Sat', utilization: 70 },
      { day: 'Sun', utilization: 65 },
    ]);
    setExpenseBreakdown([
      { name: 'Fuel', value: 45, amount: 153000 },
      { name: 'Maintenance', value: 20, amount: 68000 },
      { name: 'Driver Allowance', value: 15, amount: 51000 },
      { name: 'Toll', value: 10, amount: 34000 },
      { name: 'Others', value: 10, amount: 34000 },
    ]);
    setRevenueVsExpenses([
      { month: 'Jan', revenue: 1000000, expenses: 300000 },
      { month: 'Feb', revenue: 1100000, expenses: 320000 },
      { month: 'Mar', revenue: 1200000, expenses: 340000 },
      { month: 'Apr', revenue: 1300000, expenses: 360000 },
      { month: 'May', revenue: 1280000, expenses: 340000 },
      { month: 'Jun', revenue: 1350000, expenses: 380000 },
    ]);
    setTopDrivers([
      { id: 1, name: 'Rahul Sharma', trips: 28, onTime: 96, safetyScore: 95, rating: 4.8 },
      { id: 2, name: 'Arjun Reddy', trips: 24, onTime: 92, safetyScore: 88, rating: 4.7 },
      { id: 3, name: 'Suresh Babu', trips: 22, onTime: 90, safetyScore: 92, rating: 4.6 },
    ]);
  }, []);

  const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6'];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Reports & Analytics</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <span className="text-gray-400">01 May 2025 - 07 Jun 2025</span>
          <button className="bg-gray-700 px-4 py-2 rounded">Download Report</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Total Trips</h3>
          <p className="text-2xl font-bold">{stats.totalTrips}</p>
          <p className="text-green-400 text-sm">+12%</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Total Revenue</h3>
          <p className="text-2xl font-bold">₹{stats.totalRevenue.toLocaleString()}</p>
          <p className="text-green-400 text-sm">+10%</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Total Expenses</h3>
          <p className="text-2xl font-bold">₹{stats.totalExpenses.toLocaleString()}</p>
          <p className="text-red-400 text-sm">-4%</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-gray-400 text-sm">Profit</h3>
          <p className="text-2xl font-bold">₹{stats.profit.toLocaleString()}</p>
          <p className="text-green-400 text-sm">+22%</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Fleet Utilization (%)</h3>
          <BarChart width={500} height={300} data={fleetUtilization}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="day" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
            <Bar dataKey="utilization" fill="#10b981" />
          </BarChart>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Expense Breakdown</h3>
          <PieChart width={400} height={300}>
            <Pie data={expenseBreakdown} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
              {expenseBreakdown.map((entry, index) => (
                <Cell key={'cell-${index}'} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
            <Legend wrapperStyle={{ color: '#9ca3af' }} />
          </PieChart>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-4">Revenue vs Expenses</h3>
        <LineChart width={800} height={300} data={revenueVsExpenses}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
          <Legend wrapperStyle={{ color: '#9ca3af' }} />
          <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} name="Revenue" />
          <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
        </LineChart>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Top Performing Drivers</h3>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-4 text-left">Driver</th>
              <th className="p-4 text-left">Trips</th>
              <th className="p-4 text-left">On Time %</th>
              <th className="p-4 text-left">Safety Score</th>
              <th className="p-4 text-left">Rating</th>
            </tr>
          </thead>
          <tbody>
            {topDrivers.map((driver) => (
              <tr key={driver.id} className="border-b border-gray-700">
                <td className="p-4 flex items-center">
                  <img src="https://via.placeholder.com/32" alt="Driver" className="w-8 h-8 rounded-full mr-2" />
                  {driver.name}
                </td>
                <td className="p-4">{driver.trips}</td>
                <td className="p-4">{driver.onTime}%</td>
                <td className="p-4">{driver.safetyScore}%</td>
                <td className="p-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={'text-xl ${i < Math.floor(driver.rating) ? 'text-yellow-400' : 'text-gray-500'}'}>★</span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
