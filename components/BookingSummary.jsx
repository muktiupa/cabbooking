import React, { useState, useEffect } from "react";
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

  // Use calculated price based on the selection
  const effectiveBasePrice = selfDrive
    ? selfdrivePrice
    : withDriver
    ? basePrice
    : 0;

  // Additional charges
  const serviceOnePrice = 250;
  const serviceTwoPrice = 250;

  // GST calculation
  const gstAndFee = ((effectiveBasePrice + serviceOnePrice + serviceTwoPrice) * 0.18).toFixed(2);

  // State for selected services
  const [isServiceOneSelected, setServiceOneSelected] = useState(false);
  const [isServiceTwoSelected, setServiceTwoSelected] = useState(false);
  const [grandTotal, setGrandTotal] = useState(
    (effectiveBasePrice + parseFloat(gstAndFee)).toFixed(2)
  );

  // Recalculate grand total when services are selected/deselected
  useEffect(() => {
    const additionalServicesPrice = (isServiceOneSelected ? serviceOnePrice : 0) + (isServiceTwoSelected ? serviceTwoPrice : 0);
    const updatedGrandTotal = (
      effectiveBasePrice +
      additionalServicesPrice +
      parseFloat(gstAndFee)
    ).toFixed(2);
    setGrandTotal(updatedGrandTotal);
  }, [isServiceOneSelected, isServiceTwoSelected, effectiveBasePrice, gstAndFee]);

  // Determine the booking option
  const bookingOption = selfDrive
    ? "Self Drive"
    : withDriver
    ? "With Driver"
    : "Not Selected";

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
          <span className="font-semibold">{bookingOption}</span>
        </p>
        <p className="text-sm text-gray-600">
          Calculated Price: <strong>₹{effectiveBasePrice || 'N/A'}</strong>
        </p>
      </div>

      {/* Service Options */}
      <div className="mt-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isServiceOneSelected}
            onChange={() => setServiceOneSelected(!isServiceOneSelected)}
          />
          Service 1 (+₹250)
        </label>
        <br />
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isServiceTwoSelected}
            onChange={() => setServiceTwoSelected(!isServiceTwoSelected)}
          />
          Service 2 (+₹250)
        </label>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">
          GST (18%): <strong>₹{gstAndFee}</strong>
        </p>
        <p className="text-sm text-gray-600 font-semibold">
          Grand Total: ₹{grandTotal}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BookingSummary;
