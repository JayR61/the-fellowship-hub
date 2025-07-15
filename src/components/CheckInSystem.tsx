
import React, { useState } from 'react';
import { 
  Shield, UserCheck, Baby, Users, Clock, 
  QrCode, Search, AlertTriangle, CheckCircle, XCircle 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const CheckInSystem = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkInMode, setCheckInMode] = useState('children');

  const checkInStats = [
    {
      title: "Today's Check-ins",
      value: "234",
      change: "Children's Ministry",
      icon: UserCheck,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Children Present",
      value: "87",
      change: "Currently checked in",
      icon: Baby,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Volunteers",
      value: "12",
      change: "On duty today",
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Security Alerts",
      value: "0",
      change: "All clear",
      icon: Shield,
      color: "from-red-500 to-red-600"
    }
  ];

  const recentCheckIns = [
    {
      id: 1,
      childName: "Emma Johnson",
      parentName: "Sarah Johnson",
      checkInTime: "9:45 AM",
      room: "Nursery A",
      status: "Checked In",
      age: "2 years",
      allergies: "None",
      emergencyContact: "(555) 234-5678"
    },
    {
      id: 2,
      childName: "Noah Davis",
      parentName: "Mike Davis",
      checkInTime: "9:52 AM",
      room: "Preschool B",
      status: "Checked In",
      age: "4 years",
      allergies: "Peanuts",
      emergencyContact: "(555) 345-6789"
    },
    {
      id: 3,
      childName: "Olivia Smith",
      parentName: "John Smith",
      checkInTime: "10:05 AM",
      room: "Elementary",
      status: "Checked Out",
      age: "7 years",
      allergies: "None",
      emergencyContact: "(555) 123-4567"
    },
    {
      id: 4,
      childName: "Liam Martinez",
      parentName: "Jessica Martinez",
      checkInTime: "10:12 AM",
      room: "Kids Church",
      status: "Checked In",
      age: "9 years",
      allergies: "Lactose intolerant",
      emergencyContact: "(555) 456-7890"
    }
  ];

  const childrenRooms = [
    {
      id: 1,
      name: "Nursery A",
      ageRange: "0-18 months",
      capacity: 12,
      current: 8,
      volunteers: 3,
      status: "Available"
    },
    {
      id: 2,
      name: "Nursery B",
      ageRange: "18-36 months",
      capacity: 15,
      current: 12,
      volunteers: 3,
      status: "Available"
    },
    {
      id: 3,
      name: "Preschool A",
      ageRange: "3-4 years",
      capacity: 20,
      current: 18,
      volunteers: 4,
      status: "Nearly Full"
    },
    {
      id: 4,
      name: "Preschool B",
      ageRange: "3-4 years",
      capacity: 20,
      current: 15,
      volunteers: 4,
      status: "Available"
    },
    {
      id: 5,
      name: "Elementary",
      ageRange: "5-10 years",
      capacity: 30,
      current: 25,
      volunteers: 5,
      status: "Available"
    },
    {
      id: 6,
      name: "Kids Church",
      ageRange: "6-12 years",
      capacity: 40,
      current: 32,
      volunteers: 6,
      status: "Available"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Checked In':
        return 'bg-green-100 text-green-800';
      case 'Checked Out':
        return 'bg-gray-100 text-gray-800';
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Nearly Full':
        return 'bg-yellow-100 text-yellow-800';
      case 'Full':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Checked In':
        return <CheckCircle className="w-4 h-4" />;
      case 'Checked Out':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Check-In System</h1>
          <p className="text-gray-600 mt-1">Secure check-in for children's ministry and events</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <QrCode className="w-4 h-4 mr-2" />
            QR Scanner
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <UserCheck className="w-4 h-4 mr-2" />
            Quick Check-In
          </Button>
        </div>
      </div>

      {/* Check-In Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {checkInStats.map((stat, index) => {
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

      {/* Check-In Mode Selection */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold text-gray-900">Check-In Mode:</h3>
            <div className="flex space-x-2">
              <Button 
                variant={checkInMode === 'children' ? 'default' : 'outline'}
                onClick={() => setCheckInMode('children')}
              >
                <Baby className="w-4 h-4 mr-2" />
                Children's Ministry
              </Button>
              <Button 
                variant={checkInMode === 'general' ? 'default' : 'outline'}
                onClick={() => setCheckInMode('general')}
              >
                <Users className="w-4 h-4 mr-2" />
                General Event
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Room Status */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Room Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {childrenRooms.map((room) => (
                <div key={room.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{room.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(room.status)}`}>
                      {room.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{room.ageRange}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Capacity:</span>
                      <span className="font-medium">{room.current}/{room.capacity}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          room.current / room.capacity > 0.8 ? 'bg-red-500' : 
                          room.current / room.capacity > 0.6 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${(room.current / room.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Volunteers:</span>
                      <span className="font-medium">{room.volunteers}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search by child name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <Button className="w-full justify-start h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                  <UserCheck className="w-5 h-5 mr-3" />
                  Check In Child
                </Button>
                <Button className="w-full justify-start h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                  <XCircle className="w-5 h-5 mr-3" />
                  Check Out Child
                </Button>
                <Button className="w-full justify-start h-12 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                  <AlertTriangle className="w-5 h-5 mr-3" />
                  Emergency Alert
                </Button>
                <Button className="w-full justify-start h-12 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  <QrCode className="w-5 h-5 mr-3" />
                  Print Labels
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Check-Ins */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>Recent Check-Ins</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCheckIns.map((checkIn) => (
              <div key={checkIn.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {checkIn.childName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{checkIn.childName}</h4>
                    <p className="text-sm text-gray-600">Parent: {checkIn.parentName}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <span>Age: {checkIn.age}</span>
                      <span>Room: {checkIn.room}</span>
                      <span>Time: {checkIn.checkInTime}</span>
                    </div>
                    {checkIn.allergies !== 'None' && (
                      <div className="flex items-center space-x-1 mt-1">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-red-600">Allergies: {checkIn.allergies}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(checkIn.status)}`}>
                    {getStatusIcon(checkIn.status)}
                    <span>{checkIn.status}</span>
                  </span>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
