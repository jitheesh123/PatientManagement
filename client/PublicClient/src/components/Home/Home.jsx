import React, { useState } from 'react';
import Home from '../Home/FirstSectionWithBg';
import AboutUs from '../Home/AboutUs';
import Services from '../Home/Services';
import VerifyConsultationCertificate from '../Home/VerifyConsultationCertificate';
import Testimonials from '../Home/Testimonials';
import ContactUs from './ContactUs/ContactUs';

// Main App component
const MainHome = () => {
  return (
    <div className="app">
      <Home />
      <AboutUs />
      <Services />
      <div className="container contact-form " id="certificates">
        <VerifyConsultationCertificate />
      </div>
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default MainHome;
