import React, { useState, useRef } from 'react';
import axios from 'axios';
import './JobCard.css';
import AppButton from '../AppButton/appButton';
import CloseButton from '../CloseButton/closeButton';

const JobCard = ({ jobTitle, jobDescription, requirements }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const modalRef = useRef(null);

  const handleApplyNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };


  
  const handleClickOutsideModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  return (
    <div className="job-card">
      <h2 className="job-title">{jobTitle}</h2>
      <p className="job-description">{jobDescription}</p>

      <div className='btn-container'>
        <button className="apply-now-button" onClick={handleApplyNow}>Apply Now</button>
      </div>
      <hr className='job-card-line'></hr>

      {showModal && (
        <div className="jobmodal-overlay" onClick={handleClickOutsideModal}>
          <div className="jobmodal" ref={modalRef}>
            <h3>{jobTitle}</h3>
            <p>{jobDescription}</p>
            
            <span className='min-req'>Minimum Requirements:</span>
            <hr className='modal-line'></hr>
            <span>{requirements}</span>
            <label htmlFor="fileInput">Upload File:</label>
            <input type='file' id="fileInput" onChange={handleFileChange} />
            <div className='modalbtn-container'>
              <button className="close-button" onClick={handleCloseModal}>Close</button>
              <AppButton  type="submit" label={'Submit'}></AppButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobCard;
