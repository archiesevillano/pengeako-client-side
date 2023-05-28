import './careerPage.css';
import React, { useState, useEffect } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import jobData from '../../components/data/jobData';
import PageFooter from "../../components/pageFooter/pageFooter";

const CareerPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      const filtered = jobData.filter(
        job =>
          job.jobTitle.toLowerCase().includes(searchInput.toLowerCase()) ||
          job.jobDescription.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredJobs(filtered);
    }, 700);

    return () => clearTimeout(delayTimer);
  }, [searchInput]);

  const handleSearchInputChange = event => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    const filtered = jobData.filter(
      job =>
        job.jobTitle.toLowerCase().includes(searchInput.toLowerCase()) ||
        job.jobDescription.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <>
      <div className='careerpage-container'>
        <div className='careertext-container'>
          <h3>CAREERS</h3>
          <hr className='career-line' />
          <p>Experience the opportunity to be a part of the premier fast food restaurant in the world by joining our extraordinary team!</p>
          <span>JOIN OUR TEAM!</span>
        </div>
      </div>
      <div className='careerjob-container'>

        <div className={`job-posting ${filteredJobs.length > 0 ? 'center' : ''}`}>
          <div className='text-search-container'>
            <div className='jobposting-text'>
              <p>JOB POSTING:</p>
            </div>
            <div className='jobposting-search'>
              
              <input
                type='text'
                value={searchInput}
                onChange={handleSearchInputChange}
                placeholder='Search Job'
              />
            </div>
          </div>
          <div className='jobcards-container'>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  jobTitle={job.jobTitle}
                  jobDescription={job.jobDescription}
                  requirements={job.requirements}
                />
              ))
            ) : (
              <div className='no-job-found'>
                <p>No Job Found</p>
              </div>
            )}
          </div>
        </div>
        
      </div>
      <div className='ftr-container'>
      <PageFooter />
      </div>
      
      
    </>
  );
};

export default CareerPage;
