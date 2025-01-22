import React from 'react';
import Footer from './Footer';

const BookingSummary = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="font-bold text-lg mb-4">Booking Summary</h3>
      <p className="text-sm text-gray-600">Vehicle Type: <span>Vehicle Type</span></p>
      <p className="text-sm text-gray-600">Date: <span>Date</span></p>
      <p className="text-sm text-gray-600">Passengers: <span>1</span></p>
      <p className="text-sm text-gray-600">Base Price: <span>1450.00</span></p>
      
      <div className="mt-4">
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          Add Service/Product One - Rs 250.00
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Add Service/Product Two - Rs 250.00
        </label>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">GST & Convenience Fee: 0.00</p>
        <p className="text-sm text-gray-600">Discount Apply: 0.00</p>
        <p className="font-bold text-lg mt-2">Grand Total: 000.00</p>
      </div>
      <Footer />
    </div>
  );
};

export default BookingSummary;
