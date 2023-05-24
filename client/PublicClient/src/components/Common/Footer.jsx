import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: '#f5f5f5' }}
      className="container-fluid p-5 "
    >
      <div className="row mt-5">
        <div className="col-md-4">
          <h2>About Us</h2>
          <p style={{ width: '80%' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="col-md-4">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
                <span className="ml-2">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
                <span className="ml-2">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
                <span className="ml-2">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4>Contact Us</h4>
          <p>
            123 Main St
            <br />
            Anytown, USA 12345
            <br />
            <a href="tel:123-456-7890">123-456-7890</a>
            <br />
            <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
