
import React, { useState } from 'react';
import { 
  FolderOpen, FileText, Music, Video, Image, 
  Download, Upload, Search, Filter, Star, Share2 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const ResourceManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resourceStats = [
    {
      title: "Total Resources",
      value: "2,847",
      change: "+45 this month",
      icon: FolderOpen,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Sermons",
      value: "234",
      change: "Audio & Video",
      icon: Music,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Documents",
      value: "1,156",
      change: "Bulletins & Forms",
      icon: FileText,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Media Files",
      value: "1,457",
      change: "Images & Videos",
      icon: Image,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const resourceCategories = [
    { id: 'all', name: 'All Resources', count: 2847 },
    { id: 'sermons', name: 'Sermons', count: 234 },
    { id: 'bulletins', name: 'Bulletins', count: 156 },
    { id: 'forms', name: 'Forms', count: 89 },
    { id: 'media', name: 'Media', count: 1457 },
    { id: 'documents', name: 'Documents', count: 567 },
    { id: 'music', name: 'Music', count: 234 },
    { id: 'presentations', name: 'Presentations', count: 110 }
  ];

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
    {
      id: 5,
      name: "Christmas Service Photos",
      type: "Images",
      format: "ZIP",
      size: "89.3 MB",
      uploadDate: "2024-01-10",
      downloads: 145,
      category: "Media",
      description: "Photo collection from Christmas service"
    }
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

  const filteredResources = recentResources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resource Management</h1>
          <p className="text-gray-600 mt-1">Manage sermons, documents, and media files</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Upload className="w-4 h-4 mr-2" />
          Upload Resource
        </Button>
      </div>

      {/* Resource Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resourceStats.map((stat, index) => {
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
                <p className="text-xs text-gray-600 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search resources by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  {resourceCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Resource Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {resourceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedCategory === category.id 
                      ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resource List */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recent Resources</span>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Star className="w-4 h-4 mr-2" />
                  Favorites
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Bulk Download
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        {getFileIcon(resource.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{resource.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            resource.type === 'Sermon' ? 'bg-green-100 text-green-800' :
                            resource.type === 'Document' ? 'bg-blue-100 text-blue-800' :
                            resource.type === 'Video' ? 'bg-red-100 text-red-800' :
                            resource.type === 'Form' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {resource.type}
                          </span>
                          <span>{resource.format}</span>
                          <span>{resource.size}</span>
                          <span>Uploaded: {new Date(resource.uploadDate).toLocaleDateString()}</span>
                          <span>{resource.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
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
      </div>

      {/* Quick Upload Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
              <Music className="w-8 h-8 mb-2" />
              <span>Upload Sermon</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              <FileText className="w-8 h-8 mb-2" />
              <span>Upload Document</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
              <Image className="w-8 h-8 mb-2" />
              <span>Upload Media</span>
            </Button>
            <Button className="p-6 h-auto flex-col bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              <Video className="w-8 h-8 mb-2" />
              <span>Upload Video</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
