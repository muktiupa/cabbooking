import React from "react";
import Footer from "./Footer";

const BookingSummary = ({ bookingDetails }) => {
  const {
    vehicleType = "N/A",
    basePrice = 0,
    selfDrive = false,
    withDriver = false,
    selfdrivePrice = 0,
    numPassengers = 0,
    startDate = "N/A",
    endDate = "N/A",
  } = bookingDetails;

  // Calculate the effective base fare based on the selection
  const effectiveBasePrice = selfDrive ? selfdrivePrice : basePrice;

  // Additional charges
  const serviceOnePrice = 250;
  const serviceTwoPrice = 250;
  const totalServices = serviceOnePrice + serviceTwoPrice;

  // GST and Grand Total Calculation
  const gstAndFee = (effectiveBasePrice * 0.18).toFixed(2); // Example GST calculation
  const grandTotal = (
    effectiveBasePrice +
    totalServices +
    parseFloat(gstAndFee)
  ).toFixed(2);

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="font-bold text-lg mb-4">Booking Summary</h3>
      <p className="text-sm text-gray-600">
        Vehicle Type: <span>{vehicleType}</span>
      </p>
      <p className="text-sm text-gray-600">
        Date: <span>{startDate} - {endDate}</span>
      </p>
      <p className="text-sm text-gray-600">
        Passengers: <span>{numPassengers}</span>
      </p>
      <p className="text-sm text-gray-600">
        Base Price: <span>₹{effectiveBasePrice}</span>
      </p>

      {/* Show Booking Option and Calculated Price */}
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Booking Option:{" "}
          <span className="font-semibold">
            {selfDrive ? "Self Drive" : "With Driver"}
          </span>
        </p>
        <p className="text-sm text-gray-600">
          Calculated Price:{" "}
          <span className="font-semibold">₹{selfDrive ? selfdrivePrice : basePrice}</span>
        </p>
      </div>

      {/* Add-on Services */}
      <div className="mt-4">
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          Add Service/Product One - ₹{serviceOnePrice}
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Add Service/Product Two - ₹{serviceTwoPrice}
        </label>
      </div>

      {/* GST and Grand Total */}
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          GST & Convenience Fee: ₹{gstAndFee}
        </p>
        <p className="text-sm text-gray-600">Discount Apply: ₹0.00</p>
        <p className="font-bold text-lg mt-2">Grand Total: ₹{grandTotal}</p>
      </div>
{/* <h2>test code</h2> */}
      <Footer />
    </div>
  );
};

export default BookingSummary;
