import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-12 footer-header">
          <h6>Credits:</h6>
        </div>
      </div>

      <div className="row">
        <div className="col-3">React</div>
        <div className="col-3">Create-React-App</div>
        <div className="col-3">Font Awesome</div>
        <div className="col-3">Insiten</div>
      </div>
    </footer>
  );
}

export default Footer;