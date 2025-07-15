
import React, { useState } from 'react';
import { 
  Users, UserPlus, Crown, Star, Heart, 
  Music, Baby, Zap, Book, Handshake 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const MinistryTeams = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const ministries = [
    {
      id: 1,
      name: "Worship Team",
      description: "Leading congregation in worship through music and songs",
      leader: "Sarah Johnson",
      members: 12,
      volunteers: 8,
      icon: Music,
      color: "from-purple-500 to-purple-600",
      meetings: "Sundays 9:00 AM",
      nextEvent: "Sunday Service - Jan 14"
    },
    {
      id: 2,
      name: "Children's Ministry",
      description: "Nurturing and teaching children in faith and values",
      leader: "Mike Davis",
      members: 18,
      volunteers: 15,
      icon: Baby,
      color: "from-green-500 to-green-600",
      meetings: "Sundays 10:00 AM",
      nextEvent: "Kids Church - Jan 14"
    },
    {
      id: 3,
      name: "Youth Ministry",
      description: "Engaging teenagers in faith, fellowship, and fun activities",
      leader: "Jessica Martinez",
      members: 25,
      volunteers: 6,
      icon: Zap,
      color: "from-orange-500 to-orange-600",
      meetings: "Fridays 6:30 PM",
      nextEvent: "Youth Night - Jan 19"
    },
    {
      id: 4,
      name: "Adult Bible Study",
      description: "Deep study of scripture and spiritual growth for adults",
      leader: "Pastor John Smith",
      members: 45,
      volunteers: 4,
      icon: Book,
      color: "from-blue-500 to-blue-600",
      meetings: "Wednesdays 7:00 PM",
      nextEvent: "Romans Study - Jan 17"
    },
    {
      id: 5,
      name: "Community Outreach",
      description: "Serving the community and spreading God's love",
      leader: "Mary Wilson",
      members: 20,
      volunteers: 12,
      icon: Heart,
      color: "from-red-500 to-red-600",
      meetings: "Saturdays 9:00 AM",
      nextEvent: "Food Bank - Jan 20"
    },
    {
      id: 6,
      name: "Hospitality Team",
      description: "Welcoming guests and providing fellowship opportunities",
      leader: "Robert Brown",
      members: 15,
      volunteers: 10,
      icon: Handshake,
      color: "from-teal-500 to-teal-600",
      meetings: "Sundays 8:30 AM",
      nextEvent: "Welcome Table - Jan 14"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Worship Leader",
      email: "sarah.johnson@email.com",
      phone: "(555) 234-5678",
      skills: ["Vocals", "Piano", "Guitar"],
      availability: "Sundays, Wednesdays",
      joinDate: "2021-03-15"
    },
    {
      id: 2,
      name: "Mike Davis",
      role: "Children's Director",
      email: "mike.davis@email.com",
      phone: "(555) 345-6789",
      skills: ["Teaching", "Crafts", "Games"],
      availability: "Sundays, Saturdays",
      joinDate: "2020-08-20"
    },
    {
      id: 3,
      name: "Jessica Martinez",
      role: "Youth Pastor",
      email: "jessica.martinez@email.com",
      phone: "(555) 456-7890",
      skills: ["Counseling", "Event Planning", "Sports"],
      availability: "Fridays, Sundays",
      joinDate: "2022-01-10"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Ministry Teams</h1>
          <p className="text-gray-600 mt-1">Organize volunteers and manage ministry teams</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Volunteer
        </Button>
      </div>

      {/* Ministry Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Ministries</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Volunteers</p>
                <p className="text-2xl font-bold text-gray-900">135</p>
              </div>
              <UserPlus className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Team Leaders</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
              <Crown className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">New This Month</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
              <Star className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ministry Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ministries.map((ministry) => {
          const Icon = ministry.icon;
          return (
            <Card key={ministry.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${ministry.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
                <CardTitle className="text-lg">{ministry.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">{ministry.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Team Leader:</span>
                    <span className="font-medium text-gray-900">{ministry.leader}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Members:</span>
                    <span className="font-medium text-gray-900">{ministry.members} total</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Volunteers:</span>
                    <span className="font-medium text-gray-900">{ministry.volunteers} active</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Meetings:</span>
                    <span className="font-medium text-gray-900">{ministry.meetings}</span>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500">Next Event:</p>
                    <p className="text-sm font-medium text-gray-900">{ministry.nextEvent}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Team Members Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Team Leaders</span>
            <Button variant="outline" size="sm">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Leader
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                        <span>{member.email}</span>
                        <span>{member.phone}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span>Skills: {member.skills.join(', ')}</span>
                        <span>Available: {member.availability}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
