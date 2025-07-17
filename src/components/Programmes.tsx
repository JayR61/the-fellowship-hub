import React, { useState } from 'react';
import { 
  Briefcase, Calendar, Users, Clock, 
  Plus, Search, Filter, Play, 
  Pause, CheckCircle, AlertCircle, Eye
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
    <div className="p-6 space-y-6 bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Programmes</h1>
          <p className="text-muted-foreground mt-1">Manage church programs and courses</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            View Reports
          </Button>
          <Button className="bg-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            New Programme
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Programmes</p>
                <p className="text-2xl font-bold text-foreground">12</p>
                <p className="text-sm text-green-600 mt-1">+2 this quarter</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Participants</p>
                <p className="text-2xl font-bold text-foreground">247</p>
                <p className="text-sm text-green-600 mt-1">+15% increase</p>
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
                <p className="text-sm text-muted-foreground">Completed This Year</p>
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-sm text-green-600 mt-1">Success rate 95%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Needs Attention</p>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-orange-600 mt-1">Review required</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-orange-600" />
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

      {/* Programmes List */}
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-foreground">Active Programmes</CardTitle>
          <Button variant="ghost" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {programmes.map((programme) => (
              <div key={programme.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-foreground">{programme.name}</h3>
                      <Badge className={getStatusColor(programme.status)}>
                        {programme.status}
                      </Badge>
                      <Badge className={getCategoryColor(programme.category)}>
                        {programme.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {programme.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-muted-foreground">Coordinator:</span>
                    <p className="font-medium text-foreground">{programme.coordinator}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <p className="font-medium text-foreground">
                      {programme.startDate} - {programme.endDate}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Participants:</span>
                    <p className="font-medium text-foreground">
                      {programme.participants}/{programme.maxParticipants}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Budget:</span>
                    <p className="font-medium text-foreground">
                      ${programme.spent.toLocaleString()}/${programme.budget.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground">{programme.progress}%</span>
                  </div>
                  <Progress value={programme.progress} className="h-2" />
                </div>

                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      Schedule
                    </Button>
                    <Button variant="outline" size="sm">
                      <Users className="w-4 h-4 mr-1" />
                      Participants
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Programme Schedule Calendar */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Programme Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Programme schedule calendar will be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};