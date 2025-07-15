
import React, { useState } from 'react';
import { 
  MessageSquare, Mail, Phone, Send, Users, 
  Megaphone, Calendar, Bell, FileText, Plus 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Communications = () => {
  const [selectedCommunicationType, setSelectedCommunicationType] = useState('email');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const communicationStats = [
    {
      title: "Messages Sent",
      value: "2,847",
      change: "+12% this month",
      icon: Send,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Email Subscribers",
      value: "1,156",
      change: "+8 new subscribers",
      icon: Mail,
      color: "from-green-500 to-green-600"
    },
    {
      title: "SMS Recipients",
      value: "843",
      change: "Active numbers",
      icon: Phone,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Open Rate",
      value: "78.5%",
      change: "+5.2% improvement",
      icon: Users,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const recentMessages = [
    {
      id: 1,
      type: "Email",
      subject: "Sunday Service Update",
      recipients: 1156,
      sent: "2024-01-12",
      status: "Delivered",
      openRate: "82%"
    },
    {
      id: 2,
      type: "SMS",
      subject: "Youth Group Reminder",
      recipients: 32,
      sent: "2024-01-11",
      status: "Delivered",
      openRate: "95%"
    },
    {
      id: 3,
      type: "Email",
      subject: "Community Outreach Volunteers Needed",
      recipients: 456,
      sent: "2024-01-10",
      status: "Delivered",
      openRate: "74%"
    },
    {
      id: 4,
      type: "Announcement",
      subject: "New Bible Study Series Starting",
      recipients: 1156,
      sent: "2024-01-09",
      status: "Published",
      openRate: "N/A"
    }
  ];

  const messageTemplates = [
    {
      id: 1,
      name: "Weekly Newsletter",
      type: "Email",
      description: "Weekly church updates and announcements"
    },
    {
      id: 2,
      name: "Event Reminder",
      type: "SMS",
      description: "Reminder for upcoming events"
    },
    {
      id: 3,
      name: "Welcome Message",
      type: "Email",
      description: "Welcome message for new members"
    },
    {
      id: 4,
      name: "Prayer Request",
      type: "Email",
      description: "Prayer request distribution"
    }
  ];

  const audienceGroups = [
    { name: "All Members", count: 1247, description: "All church members" },
    { name: "Ministry Leaders", count: 45, description: "Ministry team leaders" },
    { name: "Parents", count: 234, description: "Parents with children" },
    { name: "Youth (13-18)", count: 67, description: "Teenagers and youth" },
    { name: "Young Adults", count: 156, description: "Ages 18-35" },
    { name: "Volunteers", count: 189, description: "Active volunteers" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Communications</h1>
          <p className="text-gray-600 mt-1">Send messages, emails, and announcements to your congregation</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Message
        </Button>
      </div>

      {/* Communication Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {communicationStats.map((stat, index) => {
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
                <p className="text-xs text-green-600 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Message Composer */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>Compose Message</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Message Type Selection */}
            <div className="flex space-x-2">
              <Button 
                variant={selectedCommunicationType === 'email' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCommunicationType('email')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
              <Button 
                variant={selectedCommunicationType === 'sms' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCommunicationType('sms')}
              >
                <Phone className="w-4 h-4 mr-2" />
                SMS
              </Button>
              <Button 
                variant={selectedCommunicationType === 'announcement' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCommunicationType('announcement')}
              >
                <Megaphone className="w-4 h-4 mr-2" />
                Announcement
              </Button>
            </div>

            {/* Audience Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Send To:</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                {audienceGroups.map((group, index) => (
                  <option key={index} value={group.name}>
                    {group.name} ({group.count} members)
                  </option>
                ))}
              </select>
            </div>

            {/* Subject (for email) */}
            {selectedCommunicationType === 'email' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject:</label>
                <Input
                  placeholder="Enter email subject..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            )}

            {/* Message Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
              <Textarea
                placeholder={`Enter your ${selectedCommunicationType} message...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={selectedCommunicationType === 'sms' ? 4 : 8}
              />
              {selectedCommunicationType === 'sms' && (
                <p className="text-xs text-gray-500 mt-1">
                  {message.length}/160 characters
                </p>
              )}
            </div>

            {/* Schedule Options */}
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Send className="w-4 h-4 mr-2" />
                Send Now
              </Button>
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Templates & Quick Actions */}
        <div className="space-y-6">
          {/* Message Templates */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Message Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {messageTemplates.map((template) => (
                  <div key={template.id} className="p-3 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <h4 className="font-medium text-gray-900">{template.name}</h4>
                    <p className="text-sm text-gray-600">{template.description}</p>
                    <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                      template.type === 'Email' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {template.type}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Audience Groups */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Audience Groups</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {audienceGroups.slice(0, 4).map((group, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                    <div>
                      <p className="font-medium text-gray-900">{group.name}</p>
                      <p className="text-sm text-gray-600">{group.description}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{group.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Messages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5" />
            <span>Recent Messages</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <div key={message.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    message.type === 'Email' ? 'bg-blue-100 text-blue-600' :
                    message.type === 'SMS' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {message.type === 'Email' ? <Mail className="w-5 h-5" /> :
                     message.type === 'SMS' ? <Phone className="w-5 h-5" /> :
                     <Megaphone className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{message.subject}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{message.type}</span>
                      <span>{message.recipients} recipients</span>
                      <span>Sent: {new Date(message.sent).toLocaleDateString()}</span>
                      <span>Open Rate: {message.openRate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    message.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {message.status}
                  </span>
                  <Button variant="outline" size="sm">
                    View Details
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
