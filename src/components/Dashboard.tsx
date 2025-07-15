
import React from 'react';
import { 
  Users, DollarSign, Calendar, TrendingUp, 
  UserPlus, Heart, Clock, AlertCircle 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Dashboard = () => {
  const stats = [
    {
      title: "Total Members",
      value: "1,247",
      change: "+12 this month",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Monthly Donations",
      value: "$34,567",
      change: "+8.2% from last month",
      icon: DollarSign,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Events This Month",
      value: "23",
      change: "5 upcoming",
      icon: Calendar,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Growth Rate",
      value: "12.5%",
      change: "Year over year",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const recentActivities = [
    { type: "New Member", description: "Sarah Johnson joined the congregation", time: "2 hours ago", icon: UserPlus },
    { type: "Donation", description: "Anonymous donation of $500", time: "4 hours ago", icon: Heart },
    { type: "Event", description: "Youth Group meeting scheduled", time: "6 hours ago", icon: Calendar },
    { type: "Volunteer", description: "Mike Davis signed up for Sunday service", time: "8 hours ago", icon: Clock },
  ];

  const upcomingEvents = [
    { title: "Sunday Service", time: "10:00 AM", date: "Tomorrow", attendees: 450 },
    { title: "Bible Study", time: "7:00 PM", date: "Wednesday", attendees: 85 },
    { title: "Youth Group", time: "6:30 PM", date: "Friday", attendees: 32 },
    { title: "Community Outreach", time: "9:00 AM", date: "Saturday", attendees: 25 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening at your church.</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5" />
              <span>Recent Activities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.type}</p>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
                  <p className="text-xs text-gray-500">{event.attendees} expected attendees</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all">
              <UserPlus className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Add Member</span>
            </button>
            <button className="p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all">
              <DollarSign className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Record Donation</span>
            </button>
            <button className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
              <Calendar className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Schedule Event</span>
            </button>
            <button className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all">
              <Heart className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium">Send Message</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
