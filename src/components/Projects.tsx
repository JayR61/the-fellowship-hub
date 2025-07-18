import React, { useState } from 'react';
import { 
  FolderOpen, Calendar, Users, DollarSign, 
  Plus, Search, Filter, CheckCircle, 
  Clock, AlertTriangle, Target, Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

// Updated Projects Component
export const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      name: 'Church Renovation Project',
      description: 'Complete renovation of the main sanctuary and fellowship hall',
      startDate: '2024-01-01',
      endDate: '2024-06-30',
      manager: 'John Thompson',
      team: ['Mike Davis', 'Sarah Johnson', 'Robert Brown'],
      status: 'In Progress',
      priority: 'High',
      progress: 45,
      budget: 150000,
      spent: 67500,
      tasks: {
        total: 24,
        completed: 11,
        inProgress: 8,
        pending: 5
      },
      category: 'Infrastructure'
    },
    {
      id: 2,
      name: 'Community Outreach Program',
      description: 'Monthly food distribution and clothing drive for local families',
      startDate: '2024-02-01',
      endDate: '2024-12-31',
      manager: 'Mary Williams',
      team: ['David Lee', 'Jennifer Garcia', 'Tom Wilson'],
      status: 'Active',
      priority: 'Medium',
      progress: 25,
      budget: 25000,
      spent: 8500,
      tasks: {
        total: 18,
        completed: 4,
        inProgress: 6,
        pending: 8
      },
      category: 'Community'
    },
    {
      id: 3,
      name: 'Youth Center Construction',
      description: 'Building a new youth center with recreational facilities',
      startDate: '2024-03-15',
      endDate: '2025-01-15',
      manager: 'Pastor Smith',
      team: ['Elder Johnson', 'Deacon Williams'],
      status: 'Planning',
      priority: 'High',
      progress: 10,
      budget: 200000,
      spent: 15000,
      tasks: {
        total: 35,
        completed: 2,
        inProgress: 5,
        pending: 28
      },
      category: 'Construction'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      case 'On Hold': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground mt-1">Manage church projects and initiatives</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            View Reports
          </Button>
          <Button className="bg-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Projects</p>
                <p className="text-2xl font-bold text-foreground">15</p>
                <p className="text-sm text-green-600 mt-1">+3 this month</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-sm text-green-600 mt-1">This quarter</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Budget</p>
                <p className="text-2xl font-bold text-foreground">$375K</p>
                <p className="text-sm text-muted-foreground mt-1">Across all projects</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">At Risk</p>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-orange-600 mt-1">Need attention</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
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
            placeholder="Search projects..."
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

      {/* Projects List */}
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-foreground">Active Projects</CardTitle>
          <Button variant="ghost" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-foreground">{project.name}</h3>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                      <Badge className={getPriorityColor(project.priority)}>
                        {project.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-muted-foreground">Manager:</span>
                    <p className="font-medium text-foreground">{project.manager}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Timeline:</span>
                    <p className="font-medium text-foreground">
                      {project.startDate} - {project.endDate}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Team Size:</span>
                    <p className="font-medium text-foreground">{project.team.length + 1} members</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Budget:</span>
                    <p className="font-medium text-foreground">
                      ${(project.spent / 1000).toFixed(0)}K / ${(project.budget / 1000).toFixed(0)}K
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>

                <div className="grid grid-cols-4 gap-2 text-center text-sm mb-4">
                  <div className="p-2 bg-green-50 rounded">
                    <p className="font-semibold text-green-700">{project.tasks.completed}</p>
                    <p className="text-xs text-green-600">Done</p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="font-semibold text-blue-700">{project.tasks.inProgress}</p>
                    <p className="text-xs text-blue-600">In Progress</p>
                  </div>
                  <div className="p-2 bg-yellow-50 rounded">
                    <p className="font-semibold text-yellow-700">{project.tasks.pending}</p>
                    <p className="text-xs text-yellow-600">Pending</p>
                  </div>
                  <div className="p-2 bg-gray-50 rounded">
                    <p className="font-semibold text-gray-700">{project.tasks.total}</p>
                    <p className="text-xs text-gray-600">Total</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Target className="w-4 h-4 mr-1" />
                      Tasks
                    </Button>
                    <Button variant="outline" size="sm">
                      <Users className="w-4 h-4 mr-1" />
                      Team
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

      {/* Project Timeline */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Project Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/30 rounded-lg">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Project timeline chart will be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};