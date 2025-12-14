import React from 'react';
import './Sidebar.css';

const Sidebar = ({ currentView, onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'generate', label: 'Generate Certificate', icon: '📜' },
    { id: 'history', label: 'History', icon: '📚' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">🎓</div>
        <h1 className="logo-text">CertGen</h1>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item ${currentView === item.id ? 'active' : ''}`}
                onClick={() => onNavigate(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <p className="version">Version 1.0.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;
