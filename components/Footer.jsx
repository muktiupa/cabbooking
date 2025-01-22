import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <button className="bg-[#34cc9c] text-white py-2 px-6 w-full rounded shadow-md">Book Now</button>
      <button className="bg-yellow-500 text-white py-2 px-6 w-full rounded shadow-md">Enquiry Now</button>
    </div>
  );
};

export default Footer;
