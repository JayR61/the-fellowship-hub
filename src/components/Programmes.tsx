import React, { useState } from 'react';
import { 
  Briefcase, Calendar, Users, Clock, 
  Plus, Search, Filter, Play, 
  Pause, CheckCircle, AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export const Programmes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const programmes = [
    {
      id: 1,
      name: 'Youth Leadership Development',
      description: 'A 6-month program to develop leadership skills in young adults',
      startDate: '2024-01-15',
      endDate: '2024-07-15',
      coordinator: 'Pastor Smith',
      participants: 25,
      maxParticipants: 30,
      status: 'Active',
      progress: 35,
      budget: 5000,
      spent: 1750,
      category: 'Youth'
    },
    {
      id: 2,
      name: 'Marriage Enrichment Course',
      description: 'Weekly sessions for married couples to strengthen relationships',
      startDate: '2024-02-01',
      endDate: '2024-05-01',
      coordinator: 'Elder Johnson',
      participants: 18,
      maxParticipants: 20,
      status: 'Active',
      progress: 60,
      budget: 2000,
      spent: 800,
      category: 'Family'
    },
    {
      id: 3,
      name: 'Financial Stewardship Workshop',
      description: 'Biblical principles of money management and stewardship',
      startDate: '2024-03-01',
      endDate: '2024-04-15',
      coordinator: 'Deacon Williams',
      participants: 40,
      maxParticipants: 50,
      status: 'Planning',
      progress: 10,
      budget: 1500,
      spent: 200,
      category: 'Education'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Planning': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'On Hold': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Youth': return 'bg-purple-100 text-purple-800';
      case 'Family': return 'bg-pink-100 text-pink-800';
      case 'Education': return 'bg-blue-100 text-blue-800';
      case 'Outreach': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Programmes</h1>
          <p className="text-muted-foreground mt-1">Manage church programs and courses</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Programme
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Active Programmes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">247</p>
                <p className="text-sm text-muted-foreground">Total Participants</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Completed This Year</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Needs Attention</p>
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
            placeholder="Search programmes..."
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

      {/* Programmes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {programmes.map((programme) => (
          <Card key={programme.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{programme.name}</CardTitle>
                <div className="flex space-x-1">
                  <Badge className={getStatusColor(programme.status)}>
                    {programme.status}
                  </Badge>
                  <Badge className={getCategoryColor(programme.category)}>
                    {programme.category}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {programme.description}
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Coordinator:</span>
                  <span className="font-medium">{programme.coordinator}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">
                    {programme.startDate} - {programme.endDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Participants:</span>
                  <span className="font-medium">
                    {programme.participants}/{programme.maxParticipants}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Budget:</span>
                  <span className="font-medium">
                    ${programme.spent.toLocaleString()}/${programme.budget.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{programme.progress}%</span>
                </div>
                <Progress value={programme.progress} className="h-2" />
              </div>

              <div className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  Schedule
                </Button>
                <Button variant="outline" size="sm">
                  <Users className="w-4 h-4 mr-1" />
                  Participants
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Programme Calendar */}
      <Card>
        <CardHeader>
          <CardTitle>Programme Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-2 bg-muted rounded">{day}</div>
              ))}
            </div>
            <div className="text-center text-muted-foreground py-8">
              Calendar view will be implemented here
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};