import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, Upload, FolderPlus, Grid3X3, List, 
  File, FileText, Folder, Download, Eye, Edit, Trash2 
} from 'lucide-react';

export const Documents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Folders exactly as shown in the reference image
  const folders = [
    { name: 'Governance', count: 0 },
    { name: 'Worship & Services', count: 0 },
    { name: 'Ministries', count: 0 },
    { name: 'Finance', count: 0 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Documents</h1>
          <p className="text-muted-foreground">Manage and organize your church documents, files, and resources</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="bg-muted">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <FolderPlus className="w-4 h-4 mr-2" />
            New Folder
          </Button>
        </div>
      </div>

      {/* Search and View Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-muted border-0"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="default" size="sm" className="bg-primary">
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Folders Section */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Folders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {folders.map((folder) => (
            <Card key={folder.name} className="bg-card border-border hover:bg-muted/50 transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Folder className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-medium text-foreground">{folder.name}</h3>
                    <p className="text-sm text-muted-foreground">{folder.count} documents</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Documents Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-foreground">Recent Documents</h2>
          <span className="text-sm text-muted-foreground">0 documents</span>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 space-y-4">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium text-foreground mb-2">No documents found</h3>
            <p className="text-muted-foreground mb-6">
              Start by uploading your first document
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};