import React, { useState } from 'react';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import PhotoGallery from '../components/PhotoGallery';
import CarDetails from '@/components/CarDetails';
import BookingSummary from '@/components/BookingSummary';

function CabNow({ data, base_url }) {
  const [bookingDetails, setBookingDetails] = useState({
    vehicleType: '',
    basePrice: 0,
    numPassengers: '',
    startDate: '',
    endDate: '',
    withDriver: false,
    selfDrive: false,
  }); // Initialize with an empty object or default values

  const handleBookingUpdate = (details) => {
    setBookingDetails(details);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Left section with booking form, photo gallery, and car details */}
          <div className="col-span-2">
            <BookingForm data={data} onBookingUpdate={handleBookingUpdate} />
            <PhotoGallery />
            <CarDetails />
          </div>

          {/* Right section with the booking summary */}
          <div>
            <BookingSummary bookingDetails={bookingDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CabNow;

export async function getServerSideProps(context) {
  const base_url = process.env.NEXT_PUBLIC_BASEURL;

  try {
    let headers = {
      'Accept-Encoding': 'compress',
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    };
    const res = await fetch('https://backend.encampadventures.com/api/v1/vehiclelist', { headers });
    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error('Expected data to be an array:', data);
      return {
        props: {
          data: [], // In case of error, return empty data array
        },
      };
    }

    return {
      props: {
        data, // Pass the fetched data to the component as props
        base_url, // Pass base_url if needed for other API calls
      },
    };
  } catch (err) {
    console.error('API request error:', err);
    return {
      props: {
        data: [], // Return an empty array in case of API error
      },
    };
  }
}
