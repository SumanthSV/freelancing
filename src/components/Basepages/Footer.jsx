import React from 'react';

const Footer = () => {
  return (
    <footer footer className="bg-gray-200 h-screen pt-12 pb-4">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-gray-600 mb-2">Resources</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-gray-600 mb-2">Company</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <h5 className="uppercase text-gray-600 mb-2">Social Media</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <i className="fab fa-discord"></i> Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-600">
          &copy; 2024 Freelancing Faltform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;