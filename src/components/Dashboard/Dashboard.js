import React from 'react';
import './Dashboard.css';

const Dashboard = ({ certificates, onNavigate }) => {
  const stats = [
    {
      id: 1,
      label: 'Total Certificates',
      value: certificates.length,
      icon: '📜',
      color: 'navy',
    },
    {
      id: 2,
      label: 'Generated Today',
      value: certificates.filter(cert => {
        const today = new Date().toDateString();
        const certDate = new Date(cert.generatedAt).toDateString();
        return today === certDate;
      }).length,
      icon: '📅',
      color: 'gold',
    },
    {
      id: 3,
      label: 'Templates Available',
      value: 1,
      icon: '🎨',
      color: 'navy',
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="dashboard-subtitle">Welcome to your Certificate Generation System</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className={`stat-card stat-${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <button
            className="action-card"
            onClick={() => onNavigate('generate')}
          >
            <div className="action-icon">📜</div>
            <h3>Generate Certificate</h3>
            <p>Create a new professional certificate</p>
          </button>

          <button
            className="action-card"
            onClick={() => onNavigate('history')}
          >
            <div className="action-icon">📚</div>
            <h3>View History</h3>
            <p>Browse all generated certificates</p>
          </button>
        </div>
      </div>

      {certificates.length > 0 && (
        <div className="recent-certificates">
          <h2>Recent Certificates</h2>
          <div className="recent-list">
            {certificates.slice(0, 3).map((cert, index) => (
              <div key={index} className="recent-item">
                <div className="recent-info">
                  <h4>{cert.participantName}</h4>
                  <p>{cert.courseTitle}</p>
                </div>
                <div className="recent-date">
                  {new Date(cert.generatedAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
