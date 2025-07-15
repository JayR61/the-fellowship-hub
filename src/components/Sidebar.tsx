import React, { useState, useEffect } from 'react';
import { 
  Home, Users, DollarSign, Calendar, UserCheck, 
  MessageSquare, Shield, BarChart3, FolderOpen, 
  Settings, ChevronLeft, ChevronRight, Church, 
  FileText, GraduationCap, Heart, Briefcase, 
  Share2, Lock, Unlock
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentView, 
  setCurrentView, 
  collapsed, 
  setCollapsed 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [expandedOnHover, setExpandedOnHover] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'members', label: 'Members', icon: Users },
    { id: 'financial', label: 'Financial', icon: DollarSign },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'ministry', label: 'Ministry Teams', icon: UserCheck },
    { id: 'communications', label: 'Communications', icon: MessageSquare },
    { id: 'checkin', label: 'Check-In', icon: Shield },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'mentorship', label: 'Mentorship', icon: GraduationCap },
    { id: 'volunteers', label: 'Volunteers', icon: Heart },
    { id: 'programmes', label: 'Programmes', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'resources', label: 'Resources', icon: FolderOpen },
    { id: 'social-media', label: 'Social Media', icon: Share2 },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Handle hover behavior
  useEffect(() => {
    if (!isLocked) {
      if (isHovered && collapsed) {
        setExpandedOnHover(true);
      } else if (!isHovered && expandedOnHover) {
        setExpandedOnHover(false);
      }
    }
  }, [isHovered, collapsed, isLocked]);

  const shouldShowExpanded = (!collapsed && !isLocked) || (isLocked && !collapsed) || expandedOnHover;

  return (
    <div 
      className={cn(
        "fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border shadow-xl transition-all duration-300 z-50",
        shouldShowExpanded ? "w-64" : "w-16"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <div className={cn("flex items-center space-x-3", !shouldShowExpanded && "justify-center")}>
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center">
            <Church className="w-5 h-5 text-primary-foreground" />
          </div>
          {shouldShowExpanded && (
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">Fellowship Hub</h1>
              <p className="text-xs text-muted-foreground">Church Management</p>
            </div>
          )}
        </div>
        {shouldShowExpanded && (
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsLocked(!isLocked)}
              className="p-1 hover:bg-sidebar-accent rounded-md transition-colors"
              title={isLocked ? "Unlock sidebar" : "Lock sidebar"}
            >
              {isLocked ? <Lock className="w-4 h-4 text-primary" /> : <Unlock className="w-4 h-4 text-muted-foreground" />}
            </button>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 hover:bg-sidebar-accent rounded-md transition-colors"
            >
              {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentView(item.id)}
                  className={cn(
                    "w-full flex items-center px-3 py-2.5 text-left rounded-lg transition-all duration-200",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-lg" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-primary",
                    !shouldShowExpanded ? "justify-center" : "space-x-3"
                  )}
                  title={!shouldShowExpanded ? item.label : undefined}
                >
                  <Icon className={cn("w-5 h-5", !shouldShowExpanded ? "mx-auto" : "")} />
                  {shouldShowExpanded && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {shouldShowExpanded && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-sidebar-accent rounded-lg p-3">
            <p className="text-xs text-muted-foreground text-center">
              © 2024 Fellowship Hub<br />
              Church Management System
            </p>
          </div>
        </div>
      )}
    </div>
  );
};