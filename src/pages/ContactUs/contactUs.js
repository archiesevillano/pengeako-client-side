import React, { useState } from 'react';
import TextField from '../../components/TextField/textField';
import AppButton from '../../components/AppButton/appButton';
import './contactUs.css';
import PageFooter from '../../components/pageFooter/pageFooter';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here ( send data to server)
    console.log('Form submitted:', { name, email, subject, message });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };


  return (
    <>
    <div className='contacthero-container'>
      <div className='contactus-container'>
        <div className='contact-form-icon'>
          <div className='texticon-container'>
            <h3>CONTACT US</h3>
            <hr className='contactus-line' />
            <div className='your-details-container'>
              <span>YOUR DETAILS</span>
            </div>

            <div className='icons-Container'>
              <div className='topicons'>
                <div className='iconscontainer'>
                  <i className="fa-solid fa-phone"></i>
                  <div className='text-container'>
                    <p>PHONE</p>
                    <span>+63 8623600</span>
                  </div>
                </div>
                <div className='iconscontainer'>
                  <i className="fa-solid fa-map"></i>
                  <div className='text-container'>
                    <p>MAIN OFFICE</p>
                    <span>69th St.</span>
                  </div>
                </div>
              </div>
              <div className='lowicon'>
                <div className='iconscontainer'>
                  <i class="fa-solid fa-envelope"></i>
                  <div className='text-container'>
                    <p>EMAIL</p>
                    <span>pengeako@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className='contactus-form' onSubmit={handleSubmit}>
            <div className='inputcontainer'>
              <label htmlFor="name">Name:</label>
              <TextField
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                action={(value) => setName(value)}
              />
            </div>
            <div className='inputcontainer'>
              <label htmlFor="email">Email:</label>
              <TextField
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                action={(value) => setEmail(value)}

              />
            </div>
            <div className='inputcontainer'>
              <label htmlFor="subject">Subject:</label>
              <TextField
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                action={(value) => setSubject(value)} 
              />
            </div>
            <div className='inputcontainer contactmessage'>
              <label htmlFor="message">Message:</label>

              <TextField
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                action={(value) => setMessage(value)}
                
              ></TextField>
            </div>
            <div className='contactusbtn-container'>
              <AppButton type="submit" label={'Submit'}></AppButton>
            </div>
          </form>
        </div>
      </div>
      <div className='icecreamImg-container'>
        <img src='https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fbackgrounds%20or%20ads%2Fcontact%20us.png?alt=media&token=f92b19a6-6554-4e71-a17b-c1a2f33ba936' alt='Ice Cream' />
      </div>
      
    </div>
    <div >
    <PageFooter />
    </div>
    </>
  );
};


export default ContactPage
