import React, { useState } from 'react';
import PictureCard from '../../components/pictureCards/pictureCards';
import EmailSubscriptions from '../../components/emailSubscriptions/emailSubscriptions';
import './about.css'



const About = () => {


  return (
    <>
      <div className='hero-container' >
        <div className='aboutus-container'>
          <div className='abouttext-container'>
            <p>About Us</p>
            <hr className='about-line' />
            <span>At PengeAko, we're all about serving up delicious, mouthwatering burgers and more. Our mission is simple: to provide you with fast food that's packed with flavor and made with quality ingredients.
              From our juicy, handcrafted beef patties to our selection of gourmet toppings and artisanal buns, every bite at Burger Bliss is a taste sensation. But we're not just about burgers – we also offer crispy chicken sandwiches, vegetarian options, refreshing salads, and more.</span>
            <br></br>
            <span>Fast, friendly service is our priority, ensuring you can enjoy a satisfying meal without the wait. So whether you're on the go or looking for a great place to gather with friends and family, join us at Burger Bliss for a fast food experience that will leave you craving more.
              Welcome to the Burger Bliss family – where taste and quality come together in every bite.</span>
          </div>

        </div>
        <div className='socialicons-container'>
          <div className='icons'>
            <i className="fa-solid fa-medal"></i>
            <p> 20<small>+</small></p>
            <span>Years Experience</span>
          </div>
          <div className='icons'>
            <i className="fa-solid fa-burger"></i>
            <p> 30<small>+</small></p>
            <span>Menu Variant</span>
          </div>
          <div className='icons'>
            <i className="fa-solid fa-store"></i>
            <p> 35<small>+</small></p>
            <span>Restaurant Branches</span>
          </div>

        </div>
      </div>
      <div className='abt-testimonials-container'>
        <div className='testi-container'>
          <h3>
            Savor the Flavor, Quick and Savvy:<br></br>
            Fast Food Bliss, Served Up Flashy!
          </h3>
          <hr className='testimonials-line'></hr>
          <p>
            "At PengeAko, your well-being is our top priority. We genuinely care about each customer, aiming to create a satisfying and inclusive dining experience. Join us and let us make your visit a trulyc delightful one. Thank you for trusting us."
          </p>
          <img className='signature' src='https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fbackgrounds%20or%20ads%2Fsignature%20(1).png?alt=media&token=78c02793-1f54-4c82-83de-0067a13b5a3f' />
          <span>- Luke Skywalker, CEO

          </span>

        </div>
        <div className='testimonials-imagecontainer'>
          <img src='https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fbackgrounds%20or%20ads%2Faboutsecondbackground.jpg?alt=media&token=b93b1d3f-8b40-4ccd-8e6b-d2b74b228b1c' alt='IceCream Background' />
        </div>
      </div>
      <div className='chefs-container'>
        <div className='chef-header'>
          <h3>Our Best Chefs</h3>
          <hr className='chefs-line'></hr>
        </div>

        <div className='chefs-cardcontainer'>
          <div>
            <PictureCard
              image="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fpeople%2Fchef1.jpg?alt=media&token=44081cdb-aed0-43ef-93dc-ac67d315b9ae"
              name="Jackie Chan" />
          </div>
          <div>
            <PictureCard
              image="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fpeople%2Fcheftwo.jpg?alt=media&token=361688bc-271e-48a5-aace-2a855dd82dff"
              name="Mark SuckerBarg" />
          </div>
          <div>
            <PictureCard
              image="https://firebasestorage.googleapis.com/v0/b/pengeako-862f8.appspot.com/o/Images%2Fpeople%2Fcheffour.jpg?alt=media&token=82d940a7-0030-479f-a960-bb39ccd0dcac"
              name="Chef Boy" />
          </div>
        </div>
        <div className='email-subscriptions-container'>
          <div className='subs-text-container'>
            <h3>BE THE FIRST TO GET EXCLUSIVE UPDATES </h3>
          </div>
          <div className='email-form-container'>
            <EmailSubscriptions />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;