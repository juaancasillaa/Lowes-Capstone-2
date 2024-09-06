import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import FooterLogo from '../images/SPARK.png';

function Footer() {
  return (
    <>
      <FooterContainer>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <LogoContainer>
                  <img src={FooterLogo} alt="Spark Logo" />
                </LogoContainer>
                <h6>About</h6>
                <p className="text-justify">Spark is a dynamic web platform that fosters volunteerism within organizations. Employees can easily sign up for events, while admins manage them through a dedicated dashboard. With Google Maps integration, Spark helps volunteers find and participate in local community activities effortlessly. Explore how Spark simplifies event management and boosts engagement in your organization’s volunteer efforts.</p>
              </div>

              <div className="col-xs-6 col-md-3 resources-section">
                <h6 className='header-title'>Resources</h6>
                <ul className="footer-links-list">
                  <li><a className="atributte" href="https://www.passportjs.org/tutorials/password/prompt/">Passport.js</a></li>
                  <li><a className="atributte" href="https://fullcalendar.io/">FullCalendar API</a></li>
                  <li><a className="atributte" href="https://vercel.com/">DataBase powered by Vercel</a></li>
                  <li><a className="atributte" href="https://vercel.com/">Powered By Vercel</a></li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3 quick-links-section">
                <h6 className='header-title'>Quick Links</h6>
                <ul className="footer-links-list">
                  <li><a className="atributte" href="/">Home</a></li>
                  <li><a className="atributte" href="/about">About Us</a></li>
                  <li><a className="atributte" href="/events">Events</a></li>
                  <li><a className="atributte" href="/contact">Contact Us</a></li>
                  <li><a className="atributte" href="/login">LogIn</a></li>
                </ul>
              </div>
            </div>
            <hr/>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by  
                  <a className="atributte" href="/">Spark</a>.
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <SocialIcons>
                  <a className="atributte" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a className="atributte" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a className="atributte" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a className="atributte" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </SocialIcons>
              </div>
            </div>
          </div>
        </footer>
      </FooterContainer>
    </>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .site-footer {
    background-color: #98b66e;
    padding: 45px;
    font-size: 15px;
    line-height: 24px;
    color: white;
  }

  .site-footer hr {
    border-top-color: #bbb;
    opacity: 0.5;
  }

  .site-footer h6 {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px;
  }

  .site-footer .atributte {
    color: white !important;
  }

  .site-footer .atributte:hover {
    color: #F1ECE4 !important;
    text-decoration: none;
  }

  .header-title {
    padding-left: 80px;
  }

  .footer-links-list {
    padding-left: 80px;
    list-style: none;
  }

  .footer-links-list li {
    display: block;
  }

  .footer-links-list .atibutte:hover {
    color: #F1ECE4;
    text-decoration: none;
  }

  .copyright-text {
    margin: 0;
  }

  img {
    max-width: 150px; /* Adjust the size as needed */
  }

  .resources-section, .quick-links-section {
    margin-top: 80px; /* Adjust this value to move the sections down */
  }

  @media (max-width: 991px) {
    .site-footer [class^=col-] {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 767px) {
    .site-footer {
      padding-bottom: 0;
    }
    .site-footer .copyright-text {
      text-align: center;
    }

    .header-title {
      padding-left: 0;
    }

    .footer-links-list {
      padding-left: 0;
    }
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  text-align: center;
  margin-top: 10px;

  a {
    color: white;
    margin: 0 10px;
    font-size: 24px;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #F1ECE4;
  }
`;