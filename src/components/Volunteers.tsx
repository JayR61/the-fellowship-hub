import React, { useState } from 'react';
import { 
  Heart, Users, Calendar, Clock, 
  Plus, Search, Filter, UserCheck, 
  Mail, Phone, MapPin, Award
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export const Volunteers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const volunteers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
      phone: '(555) 123-4567',
      roles: ['Sunday School', 'Youth Group'],
      hoursThisMonth: 24,
      totalHours: 156,
      joinDate: '2023-06-15',
      availability: 'Weekends',
      skills: ['Teaching', 'Music']
    },
    {
      id: 2,
      name: 'Mike Davis',
      email: 'mike@email.com',
      phone: '(555) 987-6543',
      roles: ['Worship Team', 'Tech Support'],
      hoursThisMonth: 18,
      totalHours: 89,
      joinDate: '2023-09-10',
      availability: 'Sundays',
      skills: ['Sound Engineering', 'Guitar']
    },
  ];

  const volunteerOpportunities = [
    {
      id: 1,
      title: 'Sunday School Teacher',
      department: 'Children\'s Ministry',
      description: 'Teach children ages 6-10 during Sunday morning service',
      requirements: ['Background check', 'Teaching experience preferred'],
      timeCommitment: '2 hours/week',
      urgency: 'High'
    },
    {
      id: 2,
      title: 'Worship Team Vocalist',
      department: 'Music Ministry',
      description: 'Lead congregation in worship during Sunday services',
      requirements: ['Musical ability', 'Regular attendance'],
      timeCommitment: '4 hours/week',
      urgency: 'Medium'
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Volunteers</h1>
          <p className="text-muted-foreground mt-1">Manage volunteer recruitment and coordination</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add Opportunity
          </Button>
          <Button>
            <UserCheck className="w-4 h-4 mr-2" />
            Register Volunteer
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Active Volunteers</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">1,248</p>
                <p className="text-sm text-muted-foreground">Hours This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Open Positions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Award className="w-8 h-8 text-yellow-600" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Recognition Due</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search volunteers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Volunteers List */}
        <Card>
          <CardHeader>
            <CardTitle>Active Volunteers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {volunteers.map((volunteer) => (
                <div key={volunteer.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{volunteer.name}</h3>
                    <div className="text-sm text-muted-foreground">
                      {volunteer.hoursThisMonth}h this month
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{volunteer.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{volunteer.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Available: {volunteer.availability}</span>
                    </div>
                  </div>

                  <div className="mt-3 space-y-2">
                    <div>
                      <span className="text-sm font-medium">Roles: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {volunteer.roles.map((role) => (
                          <Badge key={role} variant="outline" className="text-xs">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Skills: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {volunteer.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm">
                      <UserCheck className="w-4 h-4 mr-1" />
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-1" />
                      Contact
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Volunteer Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle>Open Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {volunteerOpportunities.map((opportunity) => (
                <div key={opportunity.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{opportunity.title}</h3>
                    <Badge className={getUrgencyColor(opportunity.urgency)}>
                      {opportunity.urgency} Priority
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p><strong>Department:</strong> {opportunity.department}</p>
                    <p><strong>Time Commitment:</strong> {opportunity.timeCommitment}</p>
                    <p className="text-muted-foreground">{opportunity.description}</p>
                  </div>

                  <div className="mt-3">
                    <span className="text-sm font-medium">Requirements:</span>
                    <ul className="text-sm text-muted-foreground mt-1 ml-4">
                      {opportunity.requirements.map((req, index) => (
                        <li key={index} className="list-disc">{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm">
                      Edit Position
                    </Button>
                    <Button size="sm">
                      Find Volunteers
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};