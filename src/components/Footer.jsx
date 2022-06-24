import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__nav">
        <p>LOGO</p>
        <ul>
          <li><a href="#work">WORK</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#stories">STORIES</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#careers">CAREERS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
      <div className="footer__info">
        <ul>
          <li className="gray">Chamber of Commerce: 63464101</li>
          <li className="gray">VAT: NL 8552.47.502.B01</li>
          <li className="gray">Terms and conditions</li>
        </ul>
      </div>
    </div>
  )
}

