import React, { useState } from 'react';
import CertificateCard from './CertificateCard';
import './CertificateHistory.css';

const CertificateHistory = ({ certificates }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCertificates = certificates.filter(cert =>
    cert.participantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.certificateNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="history-container">
      <div className="history-header">
        <div>
          <h1>Certificate History</h1>
          <p>View and manage all generated certificates</p>
        </div>
        <div className="history-stats">
          <span className="stat-badge">
            Total: <strong>{certificates.length}</strong>
          </span>
        </div>
      </div>

      <div className="history-controls">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by name, course, or certificate number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredCertificates.length > 0 ? (
        <div className="certificates-grid">
          {filteredCertificates.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">📂</div>
          <h3>No Certificates Found</h3>
          <p>
            {certificates.length === 0
              ? "You haven't generated any certificates yet."
              : 'No certificates match your search criteria.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default CertificateHistory;
