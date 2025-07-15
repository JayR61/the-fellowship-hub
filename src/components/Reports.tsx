
import React, { useState } from 'react';
import { 
  BarChart3, TrendingUp, Calendar, Users, 
  DollarSign, Download, Filter, PieChart 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('attendance');
  const [timeRange, setTimeRange] = useState('month');

  const reportTypes = [
    { id: 'attendance', name: 'Attendance Reports', icon: Users },
    { id: 'financial', name: 'Financial Reports', icon: DollarSign },
    { id: 'growth', name: 'Growth Analytics', icon: TrendingUp },
    { id: 'ministry', name: 'Ministry Reports', icon: BarChart3 }
  ];

  const reportStats = [
    {
      title: "Average Attendance",
      value: "425",
      change: "+8.5% vs last month",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Growth Rate",
      value: "12.5%",
      change: "Year over year",
      icon: TrendingUp,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Total Donations",
      value: "$45,678",
      change: "+15.2% vs last month",
      icon: DollarSign,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Active Ministries",
      value: "8",
      change: "All running smoothly",
      icon: BarChart3,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const attendanceData = [
    { date: "2024-01-07", service: "Sunday Morning", attendance: 445 },
    { date: "2024-01-07", service: "Sunday Evening", attendance: 234 },
    { date: "2024-01-14", service: "Sunday Morning", attendance: 467 },
    { date: "2024-01-14", service: "Sunday Evening", attendance: 256 },
    { date: "2024-01-21", service: "Sunday Morning", attendance: 423 },
    { date: "2024-01-21", service: "Sunday Evening", attendance: 189 }
  ];

  const financialData = [
    { category: "Tithes & Offerings", amount: 28500, percentage: 62.4 },
    { category: "Special Donations", amount: 8200, percentage: 17.9 },
    { category: "Fundraising Events", amount: 5800, percentage: 12.7 },
    { category: "Other Income", amount: 3178, percentage: 7.0 }
  ];

  const growthMetrics = [
    { metric: "New Members", current: 12, previous: 8, change: "+50%" },
    { metric: "Baptisms", current: 6, previous: 4, change: "+50%" },
    { metric: "Small Groups", current: 18, previous: 15, change: "+20%" },
    { metric: "Volunteer Signups", current: 23, previous: 19, change: "+21%" }
  ];

  const ministryPerformance = [
    { ministry: "Worship Team", participation: 95, satisfaction: 92, growth: "+5%" },
    { ministry: "Children's Ministry", participation: 87, satisfaction: 94, growth: "+12%" },
    { ministry: "Youth Ministry", participation: 78, satisfaction: 89, growth: "+8%" },
    { ministry: "Community Outreach", participation: 82, satisfaction: 96, growth: "+15%" }
  ];

  const renderReportContent = () => {
    switch (selectedReport) {
      case 'attendance':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendanceData.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{record.service}</h4>
                        <p className="text-sm text-gray-600">{new Date(record.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">{record.attendance}</p>
                        <p className="text-sm text-gray-600">attendees</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      case 'financial':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Income Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {financialData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{item.category}</span>
                        <span className="text-gray-600">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-500">${item.amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      case 'growth':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Growth Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {growthMetrics.map((metric, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">{metric.metric}</h4>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{metric.current}</p>
                          <p className="text-sm text-gray-600">This month</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg text-gray-600">{metric.previous}</p>
                          <p className="text-sm text-green-600 font-medium">{metric.change}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      case 'ministry':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Ministry Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ministryPerformance.map((ministry, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{ministry.ministry}</h4>
                        <span className="text-sm text-green-600 font-medium">{ministry.growth}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Participation Rate</span>
                          <span className="font-medium">{ministry.participation}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${ministry.participation}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Satisfaction Score</span>
                          <span className="font-medium">{ministry.satisfaction}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${ministry.satisfaction}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive insights into church performance</p>
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
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Report Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportStats.map((stat, index) => {
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
                <p className="text-xs text-green-600 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Report Type Selection */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 overflow-x-auto">
            {reportTypes.map((type) => {
              const Icon = type.icon;
              return (
                <Button
                  key={type.id}
                  variant={selectedReport === type.id ? 'default' : 'outline'}
                  onClick={() => setSelectedReport(type.id)}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  <span>{type.name}</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Report Content */}
      {renderReportContent()}

      {/* Quick Report Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Report Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              <BarChart3 className="w-8 h-8 mb-2" />
              <span>Attendance Report</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
              <DollarSign className="w-8 h-8 mb-2" />
              <span>Financial Summary</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
              <TrendingUp className="w-8 h-8 mb-2" />
              <span>Growth Analysis</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              <PieChart className="w-8 h-8 mb-2" />
              <span>Custom Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
