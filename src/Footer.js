import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 footer-header">
            <h6><strong>Thanks to:</strong></h6>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-lg-3 credit">
            <a href="https://www.insiten.com/"
              target="_blank"
              rel="noopener noreferrer">
              Insiten
            </a>
          </div>

          <div className="col-6 col-lg-3 credit">
            <a href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer">
              React.js
            </a>
          </div>
          
          <div className="col-6 col-lg-3 credit">
            <a href="https://www.shopify.com/tools/business-name-generator"
              target="_blank"
              rel="noopener noreferrer">
              Shopify
            </a>
          </div>

          <div className="col-6 col-lg-3 credit">
            <a href="https://fontawesome.com/license" 
              target="_blank" 
              rel="noopener noreferrer">
              Font Awesome
            </a>
          </div>

          <div className="col-6 col-lg-3 credit">
            <a href="https://coolors.co" 
              target="_blank" 
              rel="noopener noreferrer">
              Coolors
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;