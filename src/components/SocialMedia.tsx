import React, { useState } from 'react';
import { 
  Share2, Calendar, Users, TrendingUp, 
  Plus, Search, Filter, Eye, 
  Heart, MessageCircle, Share, 
  Facebook, Twitter, Instagram, Youtube
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

export const SocialMedia = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newPost, setNewPost] = useState('');

  const socialPosts = [
    {
      id: 1,
      platform: 'Facebook',
      content: 'Join us this Sunday for our special youth service! 🙏 #YouthSunday #Fellowship',
      scheduledTime: '2024-01-21 09:00',
      status: 'Scheduled',
      engagement: { likes: 45, comments: 12, shares: 8 },
      reach: 1250
    },
    {
      id: 2,
      platform: 'Instagram',
      content: 'Beautiful sunset over our church grounds. God\'s creation never ceases to amaze! 📸',
      scheduledTime: '2024-01-20 18:30',
      status: 'Published',
      engagement: { likes: 89, comments: 15, shares: 23 },
      reach: 2100
    },
    {
      id: 3,
      platform: 'Twitter',
      content: 'Remember: "For where two or three gather in my name, there am I with them." - Matthew 18:20',
      scheduledTime: '2024-01-20 12:00',
      status: 'Published',
      engagement: { likes: 34, comments: 6, shares: 18 },
      reach: 850
    },
  ];

  const platforms = [
    { name: 'Facebook', icon: Facebook, followers: 2400, color: 'text-blue-600' },
    { name: 'Instagram', icon: Instagram, followers: 1800, color: 'text-pink-600' },
    { name: 'Twitter', icon: Twitter, followers: 950, color: 'text-blue-400' },
    { name: 'YouTube', icon: Youtube, followers: 1200, color: 'text-red-600' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Scheduled': return 'bg-blue-100 text-blue-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Facebook': return Facebook;
      case 'Instagram': return Instagram;
      case 'Twitter': return Twitter;
      case 'YouTube': return Youtube;
      default: return Share2;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Social Media</h1>
          <p className="text-muted-foreground mt-1">Manage church social media presence</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Post
        </Button>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <Card key={platform.name}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Icon className={`w-8 h-8 ${platform.color}`} />
                  <div>
                    <p className="font-medium">{platform.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {platform.followers.toLocaleString()} followers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold">4.2K</p>
                <p className="text-sm text-muted-foreground">Total Reach</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">168</p>
                <p className="text-sm text-muted-foreground">Total Likes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">33</p>
                <p className="text-sm text-muted-foreground">Comments</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Share className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">49</p>
                <p className="text-sm text-muted-foreground">Shares</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Create New Post */}
        <Card>
          <CardHeader>
            <CardTitle>Create New Post</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="What would you like to share?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              rows={4}
            />
            
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">Select Platforms</label>
                <div className="flex space-x-2 mt-2">
                  {platforms.map((platform) => {
                    const Icon = platform.icon;
                    return (
                      <Button key={platform.name} variant="outline" size="sm">
                        <Icon className="w-4 h-4 mr-1" />
                        {platform.name}
                      </Button>
                    );
                  })}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium">Schedule Time</label>
                <Input type="datetime-local" className="mt-2" />
              </div>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" className="flex-1">
                Save Draft
              </Button>
              <Button className="flex-1">
                Schedule Post
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Posts */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Posts</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-48"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {socialPosts.map((post) => {
                const PlatformIcon = getPlatformIcon(post.platform);
                return (
                  <div key={post.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <PlatformIcon className="w-4 h-4" />
                        <span className="font-medium">{post.platform}</span>
                      </div>
                      <Badge className={getStatusColor(post.status)}>
                        {post.status}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {post.content}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>Scheduled: {post.scheduledTime}</span>
                      <span>Reach: {post.reach.toLocaleString()}</span>
                    </div>
                    
                    {post.status === 'Published' && (
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span>{post.engagement.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4 text-blue-500" />
                          <span>{post.engagement.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share className="w-4 h-4 text-green-500" />
                          <span>{post.engagement.shares}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Calendar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Content Calendar</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-2 bg-muted rounded">{day}</div>
            ))}
          </div>
          <div className="text-center text-muted-foreground py-8">
            Interactive calendar view will be implemented here
          </div>
        </CardContent>
      </Card>
    </div>
  );
};