
import './Footer.scss';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="col">
          <h3>Portfolio</h3>
          <p>Made with <span style={{ color: '#BA6573' }}>❤</span> by Ana Bennett</p>
        </div>
        <div className="col social">
          <a href="https://codepen.io/Juxtopposed" target="_blank" rel="noopener noreferrer">
            <img src="https://assets.codepen.io/9051928/codepen_1.png" alt="CodePen" />
          </a>
          <a href="https://twitter.com/juxtopposed" target="_blank" rel="noopener noreferrer">
            <img src="https://assets.codepen.io/9051928/x.png" alt="Twitter" />
          </a>
          <a href="https://youtube.com/@juxtopposed" target="_blank" rel="noopener noreferrer">
            <img src="https://assets.codepen.io/9051928/youtube_1.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
