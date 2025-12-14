import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h2>Certificate Generation System</h2>
          <p className="header-subtitle">Professional Certificate Creator</p>
        </div>
        <div className="header-actions">
          <div className="user-info">
            <div className="user-avatar">
              <span>👤</span>
            </div>
            <span className="user-name">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
