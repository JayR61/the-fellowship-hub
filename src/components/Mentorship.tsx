import React, { useState } from 'react';
import { 
  GraduationCap, Users, Calendar, Clock, 
  Plus, Search, Filter, UserCheck, 
  MessageSquare, Video, Phone
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export const Mentorship = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mentorshipSessions = [
    {
      id: 1,
      mentor: 'Pastor John Smith',
      mentee: 'Sarah Johnson',
      topic: 'Leadership Development',
      date: '2024-01-20',
      time: '10:00 AM',
      status: 'Scheduled',
      type: 'In-Person'
    },
    {
      id: 2,
      mentor: 'Elder Mary Williams',
      mentee: 'Mike Davis',
      topic: 'Spiritual Growth',
      date: '2024-01-22',
      time: '2:00 PM',
      status: 'Completed',
      type: 'Virtual'
    },
  ];

  const mentors = [
    { id: 1, name: 'Pastor John Smith', specialties: ['Leadership', 'Theology'], mentees: 8, rating: 4.9 },
    { id: 2, name: 'Elder Mary Williams', specialties: ['Counseling', 'Youth'], mentees: 12, rating: 4.8 },
    { id: 3, name: 'Deacon Robert Brown', specialties: ['Music', 'Worship'], mentees: 6, rating: 4.7 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Mentorship Sessions</h1>
          <p className="text-muted-foreground mt-1">Manage mentoring relationships and sessions</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Schedule Session
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Active Mentors</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">26</p>
                <p className="text-sm text-muted-foreground">Mentees</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm text-muted-foreground">Sessions This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-8 h-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Upcoming Sessions</p>
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
            placeholder="Search sessions..."
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
        {/* Mentorship Sessions */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mentorshipSessions.map((session) => (
                <div key={session.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{session.topic}</h3>
                    <Badge className={getStatusColor(session.status)}>
                      {session.status}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><strong>Mentor:</strong> {session.mentor}</p>
                    <p><strong>Mentee:</strong> {session.mentee}</p>
                    <p><strong>Date:</strong> {session.date} at {session.time}</p>
                    <p><strong>Type:</strong> {session.type}</p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Message
                    </Button>
                    {session.type === 'Virtual' && (
                      <Button variant="outline" size="sm">
                        <Video className="w-4 h-4 mr-1" />
                        Join Call
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Mentors */}
        <Card>
          <CardHeader>
            <CardTitle>Active Mentors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{mentor.name}</h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-yellow-600">★</span>
                      <span className="text-sm">{mentor.rating}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {mentor.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {mentor.mentees} active mentees
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    <Button variant="outline" size="sm">
                      <UserCheck className="w-4 h-4 mr-1" />
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-1" />
                      Contact
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