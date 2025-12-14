import React from 'react';
import './CertificateCard.css';

const CertificateCard = ({ certificate }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="certificate-card">
      <div className="card-header">
        <div className="card-icon">📜</div>
        <div className="card-status">
          <span className="status-badge">✓ Generated</span>
        </div>
      </div>

      <div className="card-body">
        <h3 className="participant">{certificate.participantName}</h3>
        <p className="course">{certificate.courseTitle}</p>
        
        <div className="card-details">
          <div className="detail-item">
            <span className="detail-label">Certificate ID:</span>
            <span className="detail-value">{certificate.certificateNumber}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Completion Date:</span>
            <span className="detail-value">{formatDate(certificate.completionDate)}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Generated:</span>
            <span className="detail-value">{formatDate(certificate.generatedAt)}</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <button className="btn-card" title="View Certificate">
          👁️ View
        </button>
        <button className="btn-card" title="Download PDF">
          📥 Download
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;
