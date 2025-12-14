import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './CertificatePreview.css';

const CertificatePreview = ({ data }) => {
  const certificateRef = useRef(null);

  const handleDownloadPDF = async () => {
    const element = certificateRef.current;
    
    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });
      
      const imgData = canvas.toDataURL('image/png');
      
      // A4 dimensions in landscape
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`certificate-${data.certificateNumber}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Show error in a more user-friendly way
      const errorMsg = document.createElement('div');
      errorMsg.style.cssText = 'position:fixed;top:20px;right:20px;background:#f44336;color:white;padding:16px 24px;border-radius:8px;box-shadow:0 4px 6px rgba(0,0,0,0.1);z-index:9999;';
      errorMsg.textContent = 'Failed to generate PDF. Please try again.';
      document.body.appendChild(errorMsg);
      setTimeout(() => errorMsg.remove(), 3000);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="certificate-preview-container">
      <div className="certificate-wrapper" ref={certificateRef}>
        <div className="certificate">
          {/* Corner Decorations */}
          <div className="corner-decoration corner-top-left"></div>
          <div className="corner-decoration corner-top-right"></div>
          <div className="corner-decoration corner-bottom-left"></div>
          <div className="corner-decoration corner-bottom-right"></div>
          
          {/* Border Frame */}
          <div className="certificate-border">
            <div className="certificate-content">
              {/* Header */}
              <div className="certificate-header">
                <div className="institution-logo">🎓</div>
                <h1 className="institution-name">{data.institutionName}</h1>
              </div>

              {/* Title */}
              <div className="certificate-title">
                <h2>CERTIFICATE</h2>
                <h3>OF COMPLETION</h3>
              </div>

              {/* Divider Line */}
              <div className="gold-divider">
                <div className="divider-ornament">❖</div>
              </div>

              {/* Presentation Text */}
              <p className="presentation-text">This certificate is proudly presented to</p>

              {/* Participant Name */}
              <div className="participant-name">
                <h1>{data.participantName}</h1>
                <div className="name-underline"></div>
              </div>

              {/* Achievement Description */}
              <p className="achievement-text">
                {data.additionalDetails}
              </p>

              {/* Course Title */}
              <div className="course-section">
                <div className="course-title">
                  <span className="course-label">Program:</span>
                  <span className="course-name">{data.courseTitle}</span>
                </div>
              </div>

              {/* Footer Section */}
              <div className="certificate-footer">
                <div className="footer-item">
                  <div className="seal">
                    <div className="seal-circle">
                      <div className="seal-inner">
                        <span className="seal-icon">★</span>
                      </div>
                    </div>
                  </div>
                  <p className="completion-date">{formatDate(data.completionDate)}</p>
                  <p className="date-label">Date of Completion</p>
                </div>

                <div className="footer-item">
                  <div className="signature-line"></div>
                  <p className="signature-name">Director</p>
                  <p className="signature-title">Authorized Signature</p>
                </div>

                <div className="footer-item">
                  <div className="seal">
                    <div className="seal-circle">
                      <div className="seal-inner">
                        <span className="seal-icon">✓</span>
                      </div>
                    </div>
                  </div>
                  <p className="certificate-id">{data.certificateNumber}</p>
                  <p className="id-label">Certificate ID</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-actions">
        <button className="btn btn-primary" onClick={handleDownloadPDF}>
          📥 Download PDF
        </button>
      </div>
    </div>
  );
};

export default CertificatePreview;
