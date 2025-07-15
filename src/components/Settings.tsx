
import React, { useState } from 'react';
import { 
  Settings as SettingsIcon, Church, Users, Bell, 
  Shield, Database, Palette, Globe, Save 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const settingsTabs = [
    { id: 'general', name: 'General', icon: SettingsIcon },
    { id: 'church', name: 'Church Info', icon: Church },
    { id: 'users', name: 'User Settings', icon: Users },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'backup', name: 'Backup & Data', icon: Database },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'integration', name: 'Integrations', icon: Globe }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">System Name</label>
                  <Input defaultValue="Fellowship Hub" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time Zone</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>Eastern Time (ET)</option>
                    <option>Central Time (CT)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Pacific Time (PT)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>USD ($)</option>
                    <option>EUR (€)</option>
                    <option>GBP (£)</option>
                    <option>CAD ($)</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'church':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Church Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Church Name</label>
                  <Input defaultValue="Fellowship Community Church" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <Textarea defaultValue="123 Main Street, City, State 12345" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input defaultValue="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input defaultValue="info@fellowshipcc.org" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                  <Input defaultValue="https://www.fellowshipcc.org" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mission Statement</label>
                  <Textarea defaultValue="To know Christ and make Him known through worship, fellowship, and service." />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive email notifications for important events</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">SMS Notifications</h4>
                    <p className="text-sm text-gray-600">Receive SMS notifications for urgent matters</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">New Member Alerts</h4>
                    <p className="text-sm text-gray-600">Get notified when new members join</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Financial Alerts</h4>
                    <p className="text-sm text-gray-600">Receive alerts for large donations or expenses</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Event Reminders</h4>
                    <p className="text-sm text-gray-600">Get reminders for upcoming events</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Auto-Lock Session</h4>
                    <p className="text-sm text-gray-600">Automatically lock after 30 minutes of inactivity</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password Requirements</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-gray-600">Minimum 8 characters</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-gray-600">Require uppercase letters</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-gray-600">Require numbers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-gray-600">Require special characters</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'backup':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Backup & Data Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Automatic Backups</h4>
                    <p className="text-sm text-gray-600">Automatically backup data daily</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Backup Retention</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>30 days</option>
                    <option>90 days</option>
                    <option>1 year</option>
                    <option>Forever</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <Button>Create Backup Now</Button>
                  <Button variant="outline">Restore from Backup</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>Auto (System)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full cursor-pointer border-2 border-blue-800"></div>
                    <div className="w-8 h-8 bg-green-600 rounded-full cursor-pointer"></div>
                    <div className="w-8 h-8 bg-purple-600 rounded-full cursor-pointer"></div>
                    <div className="w-8 h-8 bg-red-600 rounded-full cursor-pointer"></div>
                    <div className="w-8 h-8 bg-orange-600 rounded-full cursor-pointer"></div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Compact Mode</h4>
                    <p className="text-sm text-gray-600">Reduce spacing for more content</p>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'integration':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Integration Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Email Service</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Connected</span>
                  </div>
                  <p className="text-sm text-gray-600">Connected to SendGrid for email delivery</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">SMS Service</h4>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Not Connected</span>
                  </div>
                  <p className="text-sm text-gray-600">Connect to Twilio for SMS messaging</p>
                  <Button size="sm" className="mt-2">Connect</Button>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Payment Processor</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Connected</span>
                  </div>
                  <p className="text-sm text-gray-600">Connected to Stripe for online donations</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Calendar Integration</h4>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Not Connected</span>
                  </div>
                  <p className="text-sm text-gray-600">Sync with Google Calendar or Outlook</p>
                  <Button size="sm" className="mt-2">Connect</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Configure your church management system</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      {/* Settings Navigation */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 overflow-x-auto">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? 'default' : 'outline'}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Settings Content */}
      {renderTabContent()}
    </div>
  );
};
