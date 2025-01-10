import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto px-6 sm:px-12">
        <p className="text-center text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Cat Blog by Bisal Shafiq. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
