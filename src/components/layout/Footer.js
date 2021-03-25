import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-100 footer-wrap">
    <div className="flex -mx-3 ">
      <div className="flex-1 about-footer">
        <h2 className="text-lg font-semibold text-white">About Us</h2>
        <p className="mt-5 text-white">We're passionate about offering some <br/> of the best business growth services.</p>
      </div>
      <div className="flex-1 px-3 social-media-wrapper">
        <h2 className="text-lg font-semibold text-white">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
          <i className="fa fa-facebook"></i>
            <a className="ml-3 text-white" target="_blank" href="https://twitter.com/HuntaroSan">Facebook</a>
          </li>
          <li>
          <i className="fa fa-instagram"></i>
            <a className="ml-3 text-white" target="_blank" href="https://dev.to/changoman">Instagram</a>
          </li>
          <li>
          <i className="fa fa-linkedin"></i>
            <a className="ml-3 text-white" target="_blank" href="https://github.com/codebushi/gatsby-starter-lander">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
