import React from 'react'
import Header from '../components/Header'
import BookingForm from '../components/BookingForm'
import PhotoGallery from '../components/PhotoGallery'
import CarDetails from '@/components/CarDetails'
import BookingSummary from '@/components/BookingSummary'

function cabnow() {
  return (
    
<div>
      <Header />
      <div className='container mx-auto px-4'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="col-span-2">
          <BookingForm />
          <PhotoGallery />
          <CarDetails />
        </div>
        <div>
          <BookingSummary />
         
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default cabnow