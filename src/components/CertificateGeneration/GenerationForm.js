import React, { useState } from 'react';
import CertificatePreview from './CertificatePreview';
import './GenerationForm.css';

const GenerationForm = ({ onCertificateGenerated }) => {
  const [formData, setFormData] = useState({
    participantName: '',
    courseTitle: '',
    completionDate: new Date().toISOString().split('T')[0],
    certificateNumber: `CERT-${Date.now()}`,
    institutionName: 'Professional Learning Institute',
    additionalDetails: 'has successfully completed the program with outstanding performance and dedication.',
  });

  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.participantName.trim()) {
      newErrors.participantName = 'Participant name is required';
    }
    if (!formData.courseTitle.trim()) {
      newErrors.courseTitle = 'Course/Program title is required';
    }
    if (!formData.completionDate) {
      newErrors.completionDate = 'Completion date is required';
    }
    if (!formData.institutionName.trim()) {
      newErrors.institutionName = 'Institution name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePreview = () => {
    if (validateForm()) {
      setShowPreview(true);
    }
  };

  const handleSave = () => {
    if (validateForm()) {
      const certificate = {
        ...formData,
        generatedAt: new Date().toISOString(),
      };
      onCertificateGenerated(certificate);
      // Reset form
      setFormData({
        participantName: '',
        courseTitle: '',
        completionDate: new Date().toISOString().split('T')[0],
        certificateNumber: `CERT-${Date.now()}`,
        institutionName: 'Professional Learning Institute',
        additionalDetails: 'has successfully completed the program with outstanding performance and dedication.',
      });
      setShowPreview(false);
    }
  };

  return (
    <div className="generation-container">
      <div className="generation-header">
        <h1>Generate Certificate</h1>
        <p>Fill in the details to create a professional certificate</p>
      </div>

      <div className="generation-layout">
        <div className="form-section">
          <div className="form-card">
            <h2>Certificate Details</h2>
            
            <div className="form-group">
              <label htmlFor="participantName">Participant Name *</label>
              <input
                type="text"
                id="participantName"
                name="participantName"
                value={formData.participantName}
                onChange={handleChange}
                placeholder="Enter full name"
                className={errors.participantName ? 'error' : ''}
              />
              {errors.participantName && (
                <span className="error-message">{errors.participantName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="courseTitle">Course/Program Title *</label>
              <input
                type="text"
                id="courseTitle"
                name="courseTitle"
                value={formData.courseTitle}
                onChange={handleChange}
                placeholder="Enter course or program title"
                className={errors.courseTitle ? 'error' : ''}
              />
              {errors.courseTitle && (
                <span className="error-message">{errors.courseTitle}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="completionDate">Completion Date *</label>
                <input
                  type="date"
                  id="completionDate"
                  name="completionDate"
                  value={formData.completionDate}
                  onChange={handleChange}
                  className={errors.completionDate ? 'error' : ''}
                />
                {errors.completionDate && (
                  <span className="error-message">{errors.completionDate}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="certificateNumber">Certificate Number</label>
                <input
                  type="text"
                  id="certificateNumber"
                  name="certificateNumber"
                  value={formData.certificateNumber}
                  onChange={handleChange}
                  placeholder="Auto-generated"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="institutionName">Institution/Organization Name *</label>
              <input
                type="text"
                id="institutionName"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                placeholder="Enter institution name"
                className={errors.institutionName ? 'error' : ''}
              />
              {errors.institutionName && (
                <span className="error-message">{errors.institutionName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="additionalDetails">Additional Details</label>
              <textarea
                id="additionalDetails"
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleChange}
                placeholder="Enter achievement description"
                rows="4"
              />
            </div>

            <div className="form-actions">
              <button className="btn btn-primary" onClick={handlePreview}>
                ��️ Preview
              </button>
              <button className="btn btn-secondary" onClick={handleSave}>
                💾 Save
              </button>
            </div>
          </div>
        </div>

        <div className="preview-section">
          <div className="preview-card">
            <h2>Preview</h2>
            {showPreview ? (
              <CertificatePreview data={formData} />
            ) : (
              <div className="preview-placeholder">
                <div className="placeholder-icon">📜</div>
                <p>Fill in the form and click "Preview" to see your certificate</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerationForm;
