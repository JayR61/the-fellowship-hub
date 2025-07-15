
import React, { useState } from 'react';
import { 
  Calendar, Plus, Clock, MapPin, Users, 
  ChevronLeft, ChevronRight, Filter, Search 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    {
      id: 1,
      title: "Sunday Morning Service",
      date: "2024-01-14",
      time: "10:00 AM",
      duration: "90 minutes",
      location: "Main Sanctuary",
      attendees: 450,
      type: "Service",
      description: "Weekly worship service with communion",
      recurring: "Weekly"
    },
    {
      id: 2,
      title: "Bible Study Group",
      date: "2024-01-17",
      time: "7:00 PM",
      duration: "60 minutes",
      location: "Fellowship Hall",
      attendees: 85,
      type: "Study",
      description: "Study of the Book of Romans",
      recurring: "Weekly"
    },
    {
      id: 3,
      title: "Youth Group Meeting",
      date: "2024-01-19",
      time: "6:30 PM",
      duration: "120 minutes",
      location: "Youth Center",
      attendees: 32,
      type: "Youth",
      description: "Games, worship, and life discussion",
      recurring: "Weekly"
    },
    {
      id: 4,
      title: "Community Outreach",
      date: "2024-01-20",
      time: "9:00 AM",
      duration: "240 minutes",
      location: "Downtown Food Bank",
      attendees: 25,
      type: "Outreach",
      description: "Serving meals to the community",
      recurring: "Monthly"
    },
    {
      id: 5,
      title: "Church Council Meeting",
      date: "2024-01-21",
      time: "7:30 PM",
      duration: "90 minutes",
      location: "Conference Room",
      attendees: 12,
      type: "Meeting",
      description: "Monthly leadership meeting",
      recurring: "Monthly"
    }
  ];

  const eventTypes = [
    { name: "Service", color: "bg-blue-100 text-blue-800" },
    { name: "Study", color: "bg-green-100 text-green-800" },
    { name: "Youth", color: "bg-purple-100 text-purple-800" },
    { name: "Outreach", color: "bg-orange-100 text-orange-800" },
    { name: "Meeting", color: "bg-gray-100 text-gray-800" }
  ];

  const getEventTypeColor = (type: string) => {
    const eventType = eventTypes.find(et => et.name === type);
    return eventType ? eventType.color : "bg-gray-100 text-gray-800";
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Event Calendar</h1>
          <p className="text-gray-600 mt-1">Manage church events and schedules</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button 
              onClick={() => setViewMode('month')}
              className={`px-3 py-2 text-sm ${viewMode === 'month' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            >
              Month
            </button>
            <button 
              onClick={() => setViewMode('week')}
              className={`px-3 py-2 text-sm ${viewMode === 'week' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}
            >
              Week
            </button>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Calendar Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h2 className="text-xl font-semibold text-gray-900">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h2>
              <Button variant="outline" size="sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Event Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
              <Clock className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Attendees</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Recurring Events</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Events List */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                      {event.recurring && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {event.recurring}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time} ({event.duration})</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} expected</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Duplicate
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
