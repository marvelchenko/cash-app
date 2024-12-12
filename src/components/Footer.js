import React from 'react';
import { data } from '../components/Data';
import { FaInstagram, FaSnapchat, FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative text-black h-screen w-full">
      {/* Background Image */}
      <img
        src={data[0].footer}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col  items-center px-4 md:px-10">
        {/* Section: Headline and Download */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-10 md:mt-20 mb-10">
          {/* Headline */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-bold text-2xl md:text-3xl mb-4">
              Do more with <br /> your money
            </h3>
            <div className="flex items-center border-2 border-black rounded-md p-2">
              <p className="text-sm font-semibold text-center mr-4">
                Download <br /> Cash App
              </p>
              <div className="w-12 h-12 md:w-16 md:h-16 border bg-white rounded-md overflow-hidden">
                <img
                  src={data[0].barCode}
                  alt="QR Code"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Links Section */}
          <ul className="text-center md:text-left space-y-2 text-sm md:text-base">
            <li>Learn more</li>
            <li>Legal</li>
            <li>Licenses</li>
            <li>Security</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Help</li>
            <li>Support</li>
            <li>Status</li>
          </ul>

          {/* Social and Contact */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            {/* Social Media */}
            <div>
              <h3 className="font-bold mb-2">Stay in Touch</h3>
              <div className="flex gap-4">
                <FaXTwitter size={20} />
                <FaInstagram size={20} />
                <FaSnapchat size={20} />
              </div>
              <div className="flex gap-4 mt-2">
                <FaFacebook size={20} />
                <FaTiktok size={20} />
                <FaLinkedin size={20} />
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-2">Contact Us</h3>
              <p className="text-sm">
                1 (800) 969-1940 <br />
                9am - 7pm EST, <br />
                Monday to Friday
              </p>
            </div>
          </div>
        </div>

        {/* Legal Text Section */}
        <div className="text-sm space-y-4 text-center md:text-left md:pl-20">
          <p>
            *Cash App is a financial platform, not a bank. Banking services are
            provided by Cash App's bank partner(s). Debit cards are issued by
            Sutton Bank.
          </p>
          <p>
            **Brokerage services by Cash App Investing LLC, member{' '}
            <span className="font-bold">FINRA/SIPC</span>. See our{' '}
            <span className="font-bold">BrokerCheck</span>. Investing involves
            risk; you may lose money. Bitcoin trading is offered by Cash App.
            Cash App Investing does not trade bitcoin and is not a member of
            FINRA or SIPC. See the Bitcoin and Cash App Investing disclosures
            for additional information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
