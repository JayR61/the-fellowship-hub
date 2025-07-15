
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { MemberManagement } from '@/components/MemberManagement';
import { FinancialManagement } from '@/components/FinancialManagement';
import { EventCalendar } from '@/components/EventCalendar';
import { MinistryTeams } from '@/components/MinistryTeams';
import { Communications } from '@/components/Communications';
import { CheckInSystem } from '@/components/CheckInSystem';
import { Reports } from '@/components/Reports';
import { ResourceManagement } from '@/components/ResourceManagement';
import { UserManagement } from '@/components/UserManagement';
import { Settings } from '@/components/Settings';

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'members':
        return <MemberManagement />;
      case 'financial':
        return <FinancialManagement />;
      case 'calendar':
        return <EventCalendar />;
      case 'ministry':
        return <MinistryTeams />;
      case 'communications':
        return <Communications />;
      case 'checkin':
        return <CheckInSystem />;
      case 'reports':
        return <Reports />;
      case 'resources':
        return <ResourceManagement />;
      case 'users':
        return <UserManagement />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar 
        currentView={currentView}
        setCurrentView={setCurrentView}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <div className="h-full overflow-auto">
          {renderCurrentView()}
        </div>
      </main>
    </div>
  );
};

export default Index;
