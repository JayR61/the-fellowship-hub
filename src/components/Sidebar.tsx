
import React from 'react';
import { 
  Home, Users, DollarSign, Calendar, UserCheck, 
  MessageSquare, Shield, BarChart3, FolderOpen, 
  Settings, ChevronLeft, ChevronRight, Church
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
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'members', label: 'Members', icon: Users },
    { id: 'financial', label: 'Financial', icon: DollarSign },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'ministry', label: 'Ministry Teams', icon: UserCheck },
    { id: 'communications', label: 'Communications', icon: MessageSquare },
    { id: 'checkin', label: 'Check-In', icon: Shield },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'resources', label: 'Resources', icon: FolderOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-white shadow-xl transition-all duration-300 z-50",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className={cn("flex items-center space-x-3", collapsed && "justify-center")}>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Church className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-gray-800">Fellowship Hub</h1>
              <p className="text-xs text-gray-500">Church Management</p>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 hover:bg-gray-100 rounded-md transition-colors"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
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
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600",
                    collapsed ? "justify-center" : "space-x-3"
                  )}
                >
                  <Icon className={cn("w-5 h-5", collapsed ? "mx-auto" : "")} />
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
            <p className="text-xs text-gray-600 text-center">
              © 2024 Fellowship Hub<br />
              Church Management System
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
