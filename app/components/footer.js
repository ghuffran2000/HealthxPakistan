import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#253239] text-gray-300 py-4 px-2 mt-24">
      <div className="mx-10 grid md:grid-cols-4 gap-4 mt-12">
        {/* Left Section */}
        <div>
          <img src="/footer logo.png" alt="Healthx Logo" className="w-[55%] mb-4" />
          <h2 className="text-3xl text-white font-semibold">Healthcare Solutions<br /> For All</h2>
          <p className="text-[12px] mt-2 text-white font-thin">AUSTIN, Texas, Jan. 11, 2024 — Ambiq@</p>
          <div className="flex space-x-2 mt-12">
            <a href="#">
              <img src="/facebook.png" alt="Facebook" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="#">
              <img src="/linkdin.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="#">
              <img src="/twitter.png" alt="Twitter" className="w-6 h-6 hover:opacity-80" />
            </a>
            <a href="#">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6 hover:opacity-80" />
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="ml-20">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="text-[#9E9E9E]">About us</a></li>
            <li><a href="#" className="text-[#9E9E9E]">FAQs</a></li>
            <li><a href="#" className="text-[#9E9E9E]">News and Media</a></li>
            <li><a href="#" className="text-[#9E9E9E]">Contact us</a></li>
            <li><a href="#" className="text-[#9E9E9E]">Digital Videos</a></li>
          </ul>
        </div>

        {/* Middle Section - Resources */}
        <div className="ml-6">
          <h3 className="text-lg font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="text-[#9E9E9E]">Individuals & Families</a></li>
            <li><a href="#" className="text-[#9E9E9E]">Corporate Health Solutions</a></li>
            <li><a href="#" className="text-[#9E9E9E]">Health Insurance</a></li>
            <li><a href="#" className="text-[#9E9E9E]">Government Health Initiative</a></li>
          </ul>
        </div>

        {/* Right Section - Our Information */}
        <div>
          <h3 className="text-lg font-semibold text-white">Our Information</h3>
          <div className="mt-4 flex items-start space-x-2 text-sm">
            <img src="/sms.png" alt="Email" className="w-5 h-5" />
            <p className="text-sm">
              <a href="mailto:info@healthxpakistan.com" className="text-[#9E9E9E]">info@healthxpakistan.com</a>
            </p>
          </div>
          <div className="mt-2 flex items-start space-x-2">
            <img src="/call.png" alt="Phone" className="w-5 h-5" />
            <p className="text-sm">
              <a href="tel:02138282433" className="text-[#9E9E9E]">021 382 824 33</a>
            </p>
          </div>
          <div className="mt-2 flex items-start space-x-2">
            <img src="/location.png" alt="Location" className="w-5 h-5" />
            <p className="text-sm text-[#9E9E9E]">
              Address: 4th floor, Elegant tower, plot no BC-2, Khayaban-e- Iqbal, Block no 5, KDA Scheme No 5, Clifton, Karachi, Pakistan
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="container mx-auto mt-12 pt-10 flex flex-col md:flex-row justify-center items-center space-x-[25%] border-t border-gray-700">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white ">Join our newsletter</h3>
          <p className="text-sm mt-1">Keep up to date with everything Reflect</p>
        </div>
        <form className="mt-4 md:mt-0 flex w-full max-w-xs">
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded-l-md focus:outline-none w-full"
          />
          <button className="bg-[#E9501D] text-white p-2 rounded-r-md w-[120px]">
            Subscribe
          </button>
        </form>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-8 text-center border-t border-gray-700 pt-4">
        <div className="flex justify-between">
          <div className="space-x-4">
            <a href="#" className="text-white">Terms & Conditions</a>
            <a href="#" className="text-white">Privacy Policy</a>
          </div>
          <p className="text-sm text-right text-white">
            &copy; {new Date().getFullYear()} Healthx Pakistan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
