
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
import { Documents } from '@/components/Documents';
import { Mentorship } from '@/components/Mentorship';
import { Volunteers } from '@/components/Volunteers';
import { Programmes } from '@/components/Programmes';
import { Projects } from '@/components/Projects';
import { SocialMedia } from '@/components/SocialMedia';
import { Tasks } from '@/components/Tasks';

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'tasks':
        return <Tasks />;
      case 'members':
        return <MemberManagement />;
      case 'financial':
        return <FinancialManagement />;
      case 'documents':
        return <Documents />;
      case 'mentorship':
        return <Mentorship />;
      case 'volunteers':
        return <Volunteers />;
      case 'programmes':
        return <Programmes />;
      case 'projects':
        return <Projects />;
      case 'resources':
        return <ResourceManagement />;
      case 'social-media':
        return <SocialMedia />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
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
