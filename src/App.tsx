import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReportAnimalDialog } from './components/ReportAnimalDialog';
import { Toaster } from './components/ui/sonner';

// Pages
import { HomePage } from './components/pages/HomePage';
import { RegisterPage } from './components/pages/RegisterPage';
import { HowToHelpPage } from './components/pages/HowToHelpPage';
import { AdoptionPage } from './components/pages/AdoptionPage';
import { LoginPage } from './components/pages/LoginPage';
import { AdminDashboard } from './components/pages/AdminDashboard';

interface User {
  email: string;
  isAdmin: boolean;
  name: string;
}

export default function App() {
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<User | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    if (userData.isAdmin) {
      setCurrentPage('admin');
    } else {
      setCurrentPage('home');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  // If not logged in, show login page
  if (!user) {
    return (
      <div className="min-h-screen bg-white">
        <LoginPage onLogin={handleLogin} />
        <Toaster position="top-right" />
      </div>
    );
  }

  // If admin, show admin dashboard
  if (user.isAdmin) {
    return (
      <div className="min-h-screen bg-white">
        <AdminDashboard user={user} onLogout={handleLogout} />
        <Toaster position="top-right" />
      </div>
    );
  }

  // Regular user - show normal pages
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onReportAnimal={() => setReportDialogOpen(true)} />;
      case 'register':
        return <RegisterPage />;
      case 'help':
        return <HowToHelpPage />;
      case 'adoption':
        return <AdoptionPage />;
      default:
        return <HomePage onReportAnimal={() => setReportDialogOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onReportAnimal={() => setReportDialogOpen(true)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
      
      <ReportAnimalDialog 
        open={reportDialogOpen} 
        onOpenChange={setReportDialogOpen}
      />
      
      <Toaster position="top-right" />
    </div>
  );
}
