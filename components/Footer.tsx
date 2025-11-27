import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E3A5F] text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          <div className="md:w-1/3">
            <h3 className="text-2xl font-bold font-poppins mb-2">
              Interex<span className="text-[#4A9B9B]">Industries</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Trusted chemical solutions for a better tomorrow.
            </p>
          </div>

          <div className="flex gap-6 md:gap-8 text-sm text-gray-300">
            <a href="#home" className="hover:text-[#4A9B9B] transition-colors">Home</a>
            <a href="#products" className="hover:text-[#4A9B9B] transition-colors">Products</a>
            <a href="#about" className="hover:text-[#4A9B9B] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#4A9B9B] transition-colors">Contact</a>
          </div>

          <div className="md:w-1/3 text-gray-400 text-sm md:text-right">
            <p>&copy; {new Date().getFullYear()} Interex Industries. All Rights Reserved.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;