import React, { useState } from 'react';

const BookingForm = ({ data, onBookingUpdate }) => {
  const [withDriver, setWithDriver] = useState(false);
  const [selfDrive, setSelfDrive] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [numPassengers, setNumPassengers] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const handleCheckboxChange = (option) => {
    if (!selectedVehicle) return; // Ensure a vehicle is selected first

    if (option === 'withDriver') {
      setWithDriver(true);
      setSelfDrive(false);
      setCalculatedPrice(selectedVehicle.baseprice); // Set price for with driver
      updateBookingSummary('withDriver');
    } else if (option === 'selfDrive') {
      setSelfDrive(true);
      setWithDriver(false);
      setCalculatedPrice(selectedVehicle.selfdrive); // Set price for self-drive
      updateBookingSummary('selfDrive');
    }
  };

  const handleVehicleChange = (vehicleType) => {
    const vehicle = data.find((v) => v.type === vehicleType);
    setSelectedVehicle(vehicle);
    setWithDriver(false);
    setSelfDrive(false);
    setCalculatedPrice(0); // Reset price until user selects "With Driver" or "Self Drive"
    updateBookingSummary();
  };

  const handleInputChange = () => {
    updateBookingSummary();
  };

  const updateBookingSummary = (option) => {
    onBookingUpdate({
      vehicleType: selectedVehicle?.type,
      basePrice:
        option === 'withDriver'
          ? selectedVehicle?.baseprice
          : option === 'selfDrive'
          ? selectedVehicle?.selfdrive
          : 0,
      numPassengers,
      startDate,
      endDate,
      withDriver: option === 'withDriver',
      selfDrive: option === 'selfDrive',
    });
  };

  return (
    <form className="bg-white shadow-md p-4 rounded-lg mt-6">
      <div className="flex gap-4 mb-4">
        {selectedVehicle && (
          <>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={withDriver}
                onChange={() => handleCheckboxChange('withDriver')}
              />
              With Driver
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selfDrive}
                onChange={() => handleCheckboxChange('selfDrive')}
              />
              Self Drive
            </label>
          </>
        )}
      </div>

      <input
        className="w-full border mb-4 p-2 rounded"
        placeholder="Pickup Location"
        value={pickupLocation}
        onChange={(e) => {
          setPickupLocation(e.target.value);
          handleInputChange();
        }}
      />
      <input
        className="w-full border mb-4 p-2 rounded"
        placeholder="Number of Passengers"
        value={numPassengers}
        onChange={(e) => {
          setNumPassengers(e.target.value);
          handleInputChange();
        }}
      />
      <div className="flex gap-4">
        <input
          className="w-[49%] border mb-4 p-2 rounded"
          type="date"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
            handleInputChange();
          }}
        />
        <input
          className="w-[49%] ml-4 border mb-4 p-2 rounded"
          type="date"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
            handleInputChange();
          }}
        />
      </div>

      <select
        className="w-full border mb-4 p-2 rounded"
        onChange={(e) => handleVehicleChange(e.target.value)}
      >
        <option value="" disabled>
          Select Vehicle
        </option>
        {data && data.length > 0 ? (
          data.map((vehicle, index) => (
            <option key={index} value={vehicle.type}>
              {vehicle.type} - ₹{vehicle.baseprice} per {vehicle.calculation}
            </option>
          ))
        ) : (
          <option disabled>No vehicles available</option>
        )}
      </select>

      {selectedVehicle && (
        <div className="text-sm text-gray-700 mt-4">
          <p>
            Selected Vehicle: <strong>{selectedVehicle.type}</strong>
          </p>
          <p>
            Base Price: <strong>₹{selectedVehicle.baseprice}</strong> (With
            Driver)
          </p>
          <p>
            Self-Drive Price: <strong>₹{selectedVehicle.selfdrive}</strong>
          </p>
          <p>
            Booking Option:{' '}
            <strong>
              {withDriver ? 'With Driver' : selfDrive ? 'Self Drive' : 'None'}
            </strong>
          </p>
          <p>
            Calculated Price:{' '}
            <strong>₹{calculatedPrice > 0 ? calculatedPrice : 'N/A'}</strong>
          </p>
        </div>
      )}
    </form>
  );
};

export default BookingForm;
