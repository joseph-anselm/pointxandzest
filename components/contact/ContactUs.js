import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "@fortawesome/fontawesome-svg-core/styles.css";  
import { faLinkedin, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            {/* Contact details */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-gray-700"><b>Head Office:</b>2 Adaralegbe Street, Ajah Lagos</p>
                <p className="text-gray-700"><b>Branch Office:</b>44 Olisa Street, Ijebu Ode. Ogun</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-gray-700">info@pointxandzest.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-gray-700">+2348032501608</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-gray-700">www.pointxandzest.com</p>
              </div>
            </div>
            {/* Follow Us */}
            <h3 className="text-xl mt-14">Follow Us</h3>
            <div className="md:w-1/2 flex items-start justify-left">
              <FontAwesomeIcon icon={faLinkedin} spin border className="mr-4 text-lg" />
              <FontAwesomeIcon icon={faFacebook} spin border className="text-lg mr-4" />
              <FontAwesomeIcon icon={faTwitter} spin spinReverse className="text-lg mr-4" />
              <FontAwesomeIcon icon={faInstagram} spin spinReverse className="text-lg mr-4" />
              <FontAwesomeIcon icon={faYoutube} spin spinReverse className="text-lg mr-4" />
            </div>
          </div>
          {/* Contact form */}
          <div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500" />
              <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"></textarea>
              <button type="submit" className="bg-[#37B6FF] text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


