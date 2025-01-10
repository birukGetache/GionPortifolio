import React from 'react';
import { FaInstagram, FaTelegramPlane, FaLinkedin , FaPhone , FaEnvelope } from 'react-icons/fa';
import Map from './Map';
const Footer = () => {
  const footerLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
  ];

  return (
    <footer className=" text-white py-12 border-gray-700" style={{borderTopWidth:"3px"}}>
      <div className="container mx-auto px-4">
        {/* Section 1: Logo and Description */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="w-24 h-24 rounded-full" />
            <p className="text-lg text-gray-300">
              Your trusted partner for innovative solutions. We deliver excellence in every project.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Gion. All rights reserved.
            </p>
          </div>
        </div>

        {/* Section 2: Links (Mapping through items) */}
        <div className='grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-3 mb-10'>
        <div className="grid gap-6 mb-12 h-full p-10 rounded-md bg-white bg-opacity-10">
          <p className="text-gray-800 hover:text-white">Quick Links</p>
          {footerLinks.map((link, index) => (
            <div key={index}>
              <ul >
                <li>
                  <a href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className='box-border rounded-md overflow-hidden w-full h-96'>
  <Map />
</div>




        <div className='bg-white bg-opacity-10 rounded-md flex flex-col items-start p-10 text-white justify-center'>
        <div className='flex'>
    <FaPhone size={20} />
    <a href="tel:0983446134" className="ml-2">
      0983446134
    </a>
  </div>
  <div className="mt-2 flex">
    <FaEnvelope size={20}/>
    <a href="mailto:nahomkeneni4@gmail.com" className="ml-2">
      nahomkeneni4@gmail.com
    </a>
  </div>  
        </div>
        </div>
        {/* Section 3: Form */}
        <div className="bg-gray-700 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-center text-gray-300 mb-6">Subscribe to Our Socail Media Pages</h3>
        <div className='grid grid-cols-3 gap-10 place-items-center mx-auto max-w-32'>
         <a><FaInstagram size={40}/></a>
         <a><FaTelegramPlane size={40}/></a>
         <a><FaLinkedin size={40}/></a>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
