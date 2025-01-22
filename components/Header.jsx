import React from 'react';

const Header = () => {
  return (
    <header className="bg-cover bg-center h-48 flex w-full justify-center flex-col pl-8  text-white" style={{ backgroundImage: "url('/headerbg.png')" }}>
      <h1 className="text-4xl font-bold">Vehicle Booking</h1>
      <p className="text-lg">Book eco-friendly vehicles for your adventure in Ziro Valley</p>
    </header>
  );
};

export default Header;
