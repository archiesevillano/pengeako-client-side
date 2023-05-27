
import React, { useState } from 'react';
import axios from 'axios';
import './JobCard.css';
import AppButton from '../AppButton/appButton';

const JobCard = ({ jobTitle, jobDescription, requirements }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleApplyNow = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Para sa backend mga master, request ng post. Triny ko gawin backend kaso di ko mapagkonek. Alam ko na kaya nyo to HAHAHAHA nagkakaproblem ako sa localhost

    //   multer for handling for data. Di ko talaga makonek sa back end
      await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Reset the selected file and close the modal
      setSelectedFile(null);
      setShowModal(false);
    } catch (error) {
      console.error('Error uploading file:', error);
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
        <div className="modal-overlay">
          <div className="modal">
            <h3>{jobTitle}</h3>
            <p>{jobDescription}</p>
            
            <span className='min-req'>Minimum Requirements:</span>
            <hr className='modal-line'></hr>
            <span>{requirements}</span>
            <label htmlFor="fileInput">Upload File:</label>
            <input type='file' id="fileInput" onChange={handleFileChange} />
            <div className='modalbtn-container'>
                <button className="close-button" onClick={handleCloseModal}>Close</button>
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobCard;



