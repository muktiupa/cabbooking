import React, { useState } from 'react';

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState('CAR'); // State for active tab
  const [activeOption, setActiveOption] = useState('withDriver'); // State for active option (With Driver/Self Drive)

  // Function to handle tab selection
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveOption('withDriver'); // Reset to 'With Driver' when switching tabs
  };

  return (
    <div>
      {/* Booking Tabs */}
      <div className="flex justify-around gap-4 mt-4 bg-white shadow-sm p-4 rounded-lg ">
        {['CAR', 'SUV', 'TRAVELER'].map((type, index) => (
          <div
            key={index}
            onClick={() => handleTabChange(type)}
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

      {/* Booking Options */}
      <form className="bg-white shadow-md p-4 rounded-lg mt-6">
        <div className="flex gap-4 mb-4">
          <button
            type="button"
            className={`flex-1 py-2 rounded ${
              activeOption === 'withDriver'
                ? 'bg-[#34cc9c] text-white'
                : 'border'
            }`}
            onClick={() => setActiveOption('withDriver')}
          >
            With Driver
          </button>
          <button
            type="button"
            className={`flex-1 py-2 rounded ${
              activeOption === 'selfDrive'
                ? 'bg-[#34cc9c] text-white'
                : 'border'
            } ${
              activeTab === 'TRAVELER' ? 'cursor-not-allowed opacity-50' : ''
            }`}
            onClick={() => activeTab !== 'TRAVELER' && setActiveOption('selfDrive')}
            disabled={activeTab === 'TRAVELER'}
          >
            Self Drive
          </button>
        </div>
        <input
          className="w-full border mb-4 p-2 rounded"
          placeholder="Pickup Location"
        />
        <input
          className="w-full border mb-4 p-2 rounded"
          placeholder="Number of Passengers"
        />
        <div className='flex gap-4'>
        <input
          className="w-[49%] border mb-4 p-2 rounded"
          type="date"
          placeholder="Select Starting Date"
        />
        <input
          className="w-[49%] ml-4 border mb-4 p-2 rounded"
          type="date"
          placeholder="Select End Date"
        />
        </div>
        <select className="w-full border mb-4 p-2 rounded">
          <option>Maruti Dzire XL</option>
          <option>Maruti i20</option>
          <option>Maruti Omni</option>
        </select>
      </form>
    </div>
  );
};

export default BookingForm;
