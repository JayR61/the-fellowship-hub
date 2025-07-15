
import React, { useState } from 'react';
import { 
  DollarSign, TrendingUp, TrendingDown, PieChart, 
  Plus, Download, Calendar, CreditCard, Receipt 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const FinancialManagement = () => {
  const [timeRange, setTimeRange] = useState('month');

  const financialStats = [
    {
      title: "Total Income",
      value: "$45,678",
      change: "+12.5%",
      icon: TrendingUp,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Total Expenses",
      value: "$32,140",
      change: "-5.2%",
      icon: TrendingDown,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Net Balance",
      value: "$13,538",
      change: "+18.7%",
      icon: DollarSign,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Recurring Donors",
      value: "234",
      change: "+8 this month",
      icon: CreditCard,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "Donation",
      description: "Sunday Service Collection",
      amount: 2340.00,
      date: "2024-01-14",
      category: "Tithes & Offerings",
      method: "Cash"
    },
    {
      id: 2,
      type: "Expense",
      description: "Facility Maintenance",
      amount: -450.00,
      date: "2024-01-13",
      category: "Building & Maintenance",
      method: "Check"
    },
    {
      id: 3,
      type: "Donation",
      description: "Online Donation - John Smith",
      amount: 250.00,
      date: "2024-01-13",
      category: "Tithes & Offerings",
      method: "Online"
    },
    {
      id: 4,
      type: "Expense",
      description: "Music Equipment",
      amount: -850.00,
      date: "2024-01-12",
      category: "Ministry Equipment",
      method: "Credit Card"
    }
  ];

  const categoryBreakdown = [
    { name: "Tithes & Offerings", amount: 28500, percentage: 62.4 },
    { name: "Special Donations", amount: 8200, percentage: 17.9 },
    { name: "Fundraising Events", amount: 5800, percentage: 12.7 },
    { name: "Other Income", amount: 3178, percentage: 7.0 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Management</h1>
          <p className="text-gray-600 mt-1">Track donations, expenses, and church finances</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <p className={`text-xs mt-1 ${stat.title === 'Total Expenses' ? 'text-green-600' : 'text-green-600'}`}>
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Receipt className="w-5 h-5" />
              <span>Recent Transactions</span>
            </CardTitle>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      transaction.type === 'Donation' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {transaction.type === 'Donation' ? (
                        <TrendingUp className="w-6 h-6" />
                      ) : (
                        <TrendingDown className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{transaction.description}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>{transaction.category}</span>
                        <span>•</span>
                        <span>{transaction.method}</span>
                        <span>•</span>
                        <span>{new Date(transaction.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`text-lg font-semibold ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Income Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="w-5 h-5" />
              <span>Income Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryBreakdown.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-600">{category.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">${category.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Financial Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
              <Plus className="w-8 h-8 mb-2" />
              <span>Record Donation</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700">
              <TrendingDown className="w-8 h-8 mb-2" />
              <span>Add Expense</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              <Receipt className="w-8 h-8 mb-2" />
              <span>Generate Report</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
              <Download className="w-8 h-8 mb-2" />
              <span>Export Data</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
