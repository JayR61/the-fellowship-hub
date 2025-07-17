import React, { useState } from 'react';
import { 
  FolderOpen, FileText, Music, Video, Image, 
  Download, Upload, Search, Filter, Star, Share2, Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export const ResourceManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const recentResources = [
    {
      id: 1,
      name: "Sunday Service - January 14, 2024",
      type: "Sermon",
      format: "MP3",
      size: "45.2 MB",
      uploadDate: "2024-01-14",
      downloads: 87,
      category: "Sermons",
      description: "Message on Faith and Trust"
    },
    {
      id: 2,
      name: "Weekly Bulletin - January 14",
      type: "Document",
      format: "PDF",
      size: "2.1 MB",
      uploadDate: "2024-01-14",
      downloads: 156,
      category: "Bulletins",
      description: "Order of service and announcements"
    },
    {
      id: 3,
      name: "Worship Team Practice",
      type: "Video",
      format: "MP4",
      size: "234.5 MB",
      uploadDate: "2024-01-13",
      downloads: 23,
      category: "Music",
      description: "Practice session recording"
    },
    {
      id: 4,
      name: "Children's Ministry Registration",
      type: "Form",
      format: "PDF",
      size: "1.8 MB",
      uploadDate: "2024-01-12",
      downloads: 67,
      category: "Forms",
      description: "Registration form for new families"
    },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'Sermon':
      case 'Music':
        return <Music className="w-5 h-5 text-green-600" />;
      case 'Video':
        return <Video className="w-5 h-5 text-red-600" />;
      case 'Images':
        return <Image className="w-5 h-5 text-purple-600" />;
      default:
        return <FileText className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Resources</h1>
          <p className="text-muted-foreground mt-1">Manage sermons, documents, and media files</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            View Reports
          </Button>
          <Button className="bg-primary text-primary-foreground">
            <Upload className="w-4 h-4 mr-2" />
            Upload Resource
          </Button>
        </div>
      </div>

      {/* Resource Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Resources</p>
                <p className="text-2xl font-bold text-foreground">2,847</p>
                <p className="text-sm text-green-600 mt-1">+45 this month</p>
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
                <p className="text-sm text-muted-foreground">Sermons</p>
                <p className="text-2xl font-bold text-foreground">234</p>
                <p className="text-sm text-muted-foreground mt-1">Audio & Video</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Documents</p>
                <p className="text-2xl font-bold text-foreground">1,156</p>
                <p className="text-sm text-muted-foreground mt-1">Bulletins & Forms</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Media Files</p>
                <p className="text-2xl font-bold text-foreground">1,457</p>
                <p className="text-sm text-muted-foreground mt-1">Images & Videos</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Image className="w-6 h-6 text-orange-600" />
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
            placeholder="Search resources by name or description..."
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

      {/* Resources List */}
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-foreground">Recent Resources</CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Star className="w-4 h-4 mr-2" />
              Favorites
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentResources.map((resource) => (
              <div key={resource.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      {getFileIcon(resource.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{resource.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                        <Badge variant={
                          resource.type === 'Sermon' ? 'default' :
                          resource.type === 'Document' ? 'secondary' :
                          resource.type === 'Video' ? 'destructive' :
                          'outline'
                        } className="text-xs">
                          {resource.type}
                        </Badge>
                        <span>{resource.format}</span>
                        <span>{resource.size}</span>
                        <span>Uploaded: {new Date(resource.uploadDate).toLocaleDateString()}</span>
                        <span>{resource.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Upload Actions */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Quick Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="p-6 h-auto flex-col bg-green-600 hover:bg-green-700 text-white">
              <Music className="w-8 h-8 mb-2" />
              <span>Upload Sermon</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-blue-600 hover:bg-blue-700 text-white">
              <FileText className="w-8 h-8 mb-2" />
              <span>Upload Document</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-purple-600 hover:bg-purple-700 text-white">
              <Image className="w-8 h-8 mb-2" />
              <span>Upload Media</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-orange-600 hover:bg-orange-700 text-white">
              <Video className="w-8 h-8 mb-2" />
              <span>Upload Video</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};