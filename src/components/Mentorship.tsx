import React, { useState } from 'react';
import { 
  Users, Calendar, Clock, Star,
  Plus, Search, Filter, MessageSquare, 
  Video, Phone, Eye, MoreVertical
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Updated Mentorship Component  
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
    { id: 1, name: 'Pastor John Smith', specialties: ['Leadership', 'Theology'], mentees: 8, rating: 4.9, status: 'Available' },
    { id: 2, name: 'Elder Mary Williams', specialties: ['Counseling', 'Youth'], mentees: 12, rating: 4.8, status: 'Busy' },
    { id: 3, name: 'Deacon Robert Brown', specialties: ['Music', 'Worship'], mentees: 6, rating: 4.7, status: 'Available' },
  ];

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mentorship</h1>
          <p className="text-muted-foreground mt-1">Manage mentoring relationships and sessions</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            View Reports
          </Button>
          <Button className="bg-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Schedule Session
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Mentors</p>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-green-600 mt-1">Available</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Mentees</p>
                <p className="text-2xl font-bold text-foreground">26</p>
                <p className="text-sm text-green-600 mt-1">+3 this month</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Sessions This Month</p>
                <p className="text-2xl font-bold text-foreground">15</p>
                <p className="text-sm text-green-600 mt-1">+5 from last month</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Upcoming Sessions</p>
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-sm text-muted-foreground mt-1">Next 7 days</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
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
            placeholder="Search mentors, mentees, or sessions..."
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
        {/* Upcoming Sessions */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-foreground">Upcoming Sessions</CardTitle>
            <Button variant="ghost" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mentorshipSessions.map((session) => (
                <div key={session.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-foreground">{session.topic}</h3>
                    <Badge variant={session.status === 'Scheduled' ? 'default' : 'secondary'}>
                      {session.status}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mentor:</span>
                      <span className="text-foreground">{session.mentor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mentee:</span>
                      <span className="text-foreground">{session.mentee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date & Time:</span>
                      <span className="text-foreground">{session.date} at {session.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span className="text-foreground">{session.type}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Message
                    </Button>
                    {session.type === 'Virtual' && (
                      <Button variant="outline" size="sm" className="flex-1">
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
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-foreground">Active Mentors</CardTitle>
            <Button variant="ghost" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="border border-border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-foreground">{mentor.name}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-foreground">{mentor.rating}</span>
                      </div>
                      <Badge variant={mentor.status === 'Available' ? 'default' : 'secondary'}>
                        {mentor.status}
                      </Badge>
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
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="w-4 h-4 mr-1" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mentorship Statistics */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Mentorship Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
            <div className="text-center">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Mentorship progress charts will be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};