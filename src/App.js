import React, { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import GenerationForm from './components/CertificateGeneration/GenerationForm';
import CertificateHistory from './components/CertificateHistory/CertificateHistory';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [certificates, setCertificates] = useState([]);

  const handleCertificateGenerated = (certificate) => {
    setCertificates([certificate, ...certificates]);
    setCurrentView('history');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard certificates={certificates} onNavigate={setCurrentView} />;
      case 'generate':
        return <GenerationForm onCertificateGenerated={handleCertificateGenerated} />;
      case 'history':
        return <CertificateHistory certificates={certificates} />;
      default:
        return <Dashboard certificates={certificates} onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="app">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <div className="app-main">
        <Header />
        <main className="app-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
