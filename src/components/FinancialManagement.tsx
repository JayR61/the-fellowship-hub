
import React, { useState } from 'react';
import { 
  DollarSign, TrendingUp, TrendingDown, PieChart, 
  Plus, Download, Calendar, CreditCard, Receipt,
  Eye, MoreVertical
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Updated Financial Management Component
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
    <div className="p-6 space-y-6 bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Finance</h1>
          <p className="text-muted-foreground mt-1">Track donations, expenses, and church finances</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="text-muted-foreground">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Add Transaction
          </Button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold text-foreground">$45,678</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +12.5%
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Expenses</p>
                <p className="text-2xl font-bold text-foreground">$32,140</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingDown className="w-4 h-4 mr-1" />
                  -5.2%
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Net Balance</p>
                <p className="text-2xl font-bold text-foreground">$13,538</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +18.7%
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Recurring Donors</p>
                <p className="text-2xl font-bold text-foreground">234</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +8 this month
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-foreground">Recent Transactions</CardTitle>
            <Button variant="ghost" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      transaction.type === 'Donation' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {transaction.type === 'Donation' ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold text-sm ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">{new Date(transaction.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Income Breakdown */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Income Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryBreakdown.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-sm text-foreground">{category.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm text-foreground">${category.amount.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{category.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Summary Chart Placeholder */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Financial Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Chart visualization will be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
