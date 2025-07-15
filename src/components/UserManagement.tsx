
import React, { useState } from 'react';
import { 
  Users, UserPlus, Shield, Key, Settings, 
  Search, Filter, Edit, Trash2, Eye 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');

  const userStats = [
    {
      title: "Total Users",
      value: "23",
      change: "System access",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Administrators",
      value: "3",
      change: "Full access",
      icon: Shield,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Staff Members",
      value: "8",
      change: "Limited access",
      icon: Key,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Volunteers",
      value: "12",
      change: "Basic access",
      icon: UserPlus,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const users = [
    {
      id: 1,
      name: "Pastor John Smith",
      email: "john.smith@fellowshiphub.com",
      role: "Administrator",
      permissions: ["Full Access", "User Management", "Financial Reports"],
      lastLogin: "2024-01-14",
      status: "Active",
      department: "Leadership"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@fellowshiphub.com",
      role: "Staff",
      permissions: ["Member Management", "Event Planning", "Communications"],
      lastLogin: "2024-01-14",
      status: "Active",
      department: "Worship"
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike.davis@fellowshiphub.com",
      role: "Staff",
      permissions: ["Children's Ministry", "Check-in System", "Resources"],
      lastLogin: "2024-01-13",
      status: "Active",
      department: "Children's Ministry"
    },
    {
      id: 4,
      name: "Jessica Martinez",
      email: "jessica.martinez@fellowshiphub.com",
      role: "Staff",
      permissions: ["Youth Ministry", "Event Planning", "Communications"],
      lastLogin: "2024-01-12",
      status: "Active",
      department: "Youth Ministry"
    },
    {
      id: 5,
      name: "Robert Brown",
      email: "robert.brown@fellowshiphub.com",
      role: "Volunteer",
      permissions: ["Event Check-in", "Basic Reports"],
      lastLogin: "2024-01-10",
      status: "Active",
      department: "Hospitality"
    }
  ];

  const rolePermissions = {
    "Administrator": [
      "Full System Access",
      "User Management",
      "Financial Management",
      "System Settings",
      "All Reports",
      "Data Export"
    ],
    "Staff": [
      "Member Management",
      "Event Planning",
      "Communications",
      "Ministry Management",
      "Basic Reports"
    ],
    "Volunteer": [
      "Event Check-in",
      "Basic Member View",
      "Resource Access",
      "Limited Reports"
    ]
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Administrator':
        return 'bg-red-100 text-red-800';
      case 'Staff':
        return 'bg-blue-100 text-blue-800';
      case 'Volunteer':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role.toLowerCase() === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-1">Manage system users and permissions</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Add New User
        </Button>
      </div>

      {/* User Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat, index) => {
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
                <p className="text-xs text-gray-600 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <select 
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  <option value="all">All Roles</option>
                  <option value="administrator">Administrator</option>
                  <option value="staff">Staff</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Users List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>System Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div key={user.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                          <span>Department: {user.department}</span>
                          <span>Last Login: {new Date(user.lastLogin).toLocaleDateString()}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {user.permissions.slice(0, 3).map((permission, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              {permission}
                            </span>
                          ))}
                          {user.permissions.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                              +{user.permissions.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.status}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Role Permissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Role Permissions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {Object.entries(rolePermissions).map(([role, permissions]) => (
                <div key={role} className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(role)}`}>
                      {role}
                    </span>
                  </h4>
                  <div className="space-y-1">
                    {permissions.map((permission, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>{permission}</span>
                      </div>
                    ))}
                  </div>
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
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              <UserPlus className="w-8 h-8 mb-2" />
              <span>Add User</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
              <Shield className="w-8 h-8 mb-2" />
              <span>Manage Roles</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
              <Key className="w-8 h-8 mb-2" />
              <span>Reset Password</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              <Settings className="w-8 h-8 mb-2" />
              <span>Security Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
