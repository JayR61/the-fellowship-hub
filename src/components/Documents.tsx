import React, { useState } from 'react';
import { 
  FileText, Upload, Download, Search, Filter, 
  Plus, Eye, Edit, Trash2, FolderPlus, Folder
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Documents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const documents = [
    { id: 1, name: 'Church Constitution', type: 'PDF', size: '2.4 MB', category: 'Legal', date: '2024-01-15' },
    { id: 2, name: 'Annual Report 2023', type: 'DOCX', size: '1.8 MB', category: 'Reports', date: '2024-01-10' },
    { id: 3, name: 'Sunday Service Order', type: 'PDF', size: '245 KB', category: 'Liturgy', date: '2024-01-07' },
  ];

  const categories = ['All', 'Legal', 'Reports', 'Liturgy', 'Sermons', 'Meeting Minutes'];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-muted-foreground mt-1">Manage church documents and files</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <FolderPlus className="w-4 h-4 mr-2" />
            New Folder
          </Button>
          <Button size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Upload Document
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
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

      {/* Categories */}
      <div className="flex space-x-2">
        {categories.map((category) => (
          <Button key={category} variant="outline" size="sm" className="rounded-full">
            {category}
          </Button>
        ))}
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {documents.map((doc) => (
          <Card key={doc.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{doc.name}</h3>
                  <p className="text-sm text-muted-foreground">{doc.type} • {doc.size}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium">{doc.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Modified:</span>
                  <span className="font-medium">{doc.date}</span>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Storage Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Storage Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Used: 15.2 GB</span>
              <span>Available: 84.8 GB</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '15.2%' }}></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};