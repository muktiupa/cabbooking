import React, { useState } from 'react';

const BookingTabs = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('CAR');

  // Function to handle tab click
  const handleTabClick = (type) => {
    setActiveTab(type);
  };

  return (
    <div className="flex justify-center gap-4 mt-4">
      {['CAR', 'SUV', 'TRAVELER'].map((type, index) => (
        <div
          key={index}
          onClick={() => handleTabClick(type)}
          className={`px-4 py-2 cursor-pointer ${
            activeTab === type
              ? 'border-b-2 border-green-500 text-green-500'
              : 'border-b-2 border-transparent text-gray-700'
          }`}
        >
          <h3 className="text-lg font-bold">{type}</h3>
          <p className="text-sm text-gray-500">
            Up to {index === 0 ? 4 : index === 1 ? 6 : 12} Person
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookingTabs;
