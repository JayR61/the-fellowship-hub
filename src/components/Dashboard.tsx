import React, { useState } from 'react';
import { 
  Users, DollarSign, Calendar, TrendingUp, 
  UserPlus, Heart, Clock, AlertCircle, CheckSquare,
  FileText, Moon, Sun, Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, 
  PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';

// Add Member Modal Component
const AddMemberModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-card p-6 rounded-lg w-96 max-w-md mx-4">
        <h3 className="text-lg font-semibold mb-4">Add New Member</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter full name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter email address" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input type="tel" className="w-full p-2 border rounded-md" placeholder="Enter phone number" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <textarea className="w-full p-2 border rounded-md" rows={3} placeholder="Enter address"></textarea>
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-6">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Add Member</Button>
        </div>
      </div>
    </div>
  );
};

export const Dashboard = () => {
  const { theme, setTheme } = useTheme();
  const [showAddMember, setShowAddMember] = useState(false);

  const stats = [
    {
      title: "Total Tasks",
      value: "0",
      change: "(0 Completed)",
      icon: CheckSquare,
      color: "text-primary"
    },
    {
      title: "Members",
      value: "0",
      change: "(0 Active)",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Balance",
      value: "R 0.00",
      change: "Current balance (0% +73.1%)",
      icon: DollarSign,
      color: "text-primary"
    },
    {
      title: "Programmes",
      value: "0",
      change: "Active programmes (0 active)",
      icon: Calendar,
      color: "text-primary"
    }
  ];

  // Sample data for charts (will be replaced with real data)
  const monthlyRevenueData = [
    { month: 'Jan', Income: 0, Expenses: 0 },
    { month: 'Feb', Income: 0, Expenses: 0 },
    { month: 'Mar', Income: 0, Expenses: 0 },
    { month: 'Apr', Income: 0, Expenses: 0 },
    { month: 'May', Income: 0, Expenses: 0 },
    { month: 'Jun', Income: 0, Expenses: 0 },
    { month: 'Jul', Income: 0, Expenses: 0 },
    { month: 'Aug', Income: 0, Expenses: 0 },
    { month: 'Sep', Income: 0, Expenses: 0 },
    { month: 'Oct', Income: 0, Expenses: 0 },
    { month: 'Nov', Income: 0, Expenses: 0 },
    { month: 'Dec', Income: 0, Expenses: 0 },
  ];

  const weeklyActivityData = [
    { day: 'Mon', Tasks: 0, Documents: 0 },
    { day: 'Tue', Tasks: 0, Documents: 0 },
    { day: 'Wed', Tasks: 0, Documents: 0 },
    { day: 'Thu', Tasks: 0, Documents: 0 },
    { day: 'Fri', Tasks: 0, Documents: 0 },
    { day: 'Sat', Tasks: 0, Documents: 0 },
    { day: 'Sun', Tasks: 0, Documents: 0 },
  ];

  const taskStatusData = [
    { name: 'Completed', value: 0, color: '#22c55e' },
    { name: 'In Progress', value: 0, color: '#f59e0b' },
    { name: 'Pending', value: 0, color: '#ef4444' },
  ];

  const financialOverviewData = [
    { name: 'Income', value: 0, color: '#22c55e' },
    { name: 'Expenses', value: 0, color: '#ef4444' },
  ];

  const recentActivities = [
    { type: "Task", description: "Task 'Task 1' was in-progress", time: "Just now", icon: CheckSquare },
  ];

  const upcomingEvents = [
    { title: "Task 1", time: "Tomorrow", date: "1 assignee", attendees: "1 assignee" },
  ];

  return (
    <div className="p-6 space-y-6 bg-background text-foreground min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">New Vision of God Church</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        <Button variant="default" size="sm" className="bg-primary text-primary-foreground">Overview</Button>
        <Button variant="ghost" size="sm">Tasks</Button>
        <Button variant="ghost" size="sm">Finance</Button>
        <Button variant="ghost" size="sm">Team</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold mt-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Revenue Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span>Monthly Revenue</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">Income and expenses over the past 6 months</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="Income" stroke="#22c55e" strokeWidth={2} />
                <Line type="monotone" dataKey="Expenses" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Task Status Donut Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Task Status</CardTitle>
            <p className="text-sm text-muted-foreground">Current task distribution</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={taskStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {taskStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Activity */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Weekly Activity</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">Tasks and documents created</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={weeklyActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Area type="monotone" dataKey="Tasks" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="Documents" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Financial Overview */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <p className="text-sm text-muted-foreground">Income vs Expenses</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={financialOverviewData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="value" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Activity and Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5" />
              <span>Recent Activity</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">Latest actions and updates</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.type}</p>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Upcoming Events</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">Deadlines and meetings</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                  <h4 className="font-medium">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.date} at {event.time}</p>
                  <p className="text-xs text-muted-foreground">{event.attendees}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modals */}
      <AddMemberModal isOpen={showAddMember} onClose={() => setShowAddMember(false)} />
    </div>
  );
};