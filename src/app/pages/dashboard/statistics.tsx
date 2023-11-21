import React from 'react'
import {CardsWidget17} from '../../../_metronic/partials/widgets'

const MainStatistics = () => {
  return (
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
      {/* begin::Col */}
      {/* <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget7
          className='h-md-100 mb-5 mb-xl-10'
          description='Appointments'
          subTitle="Today's Customers"
          icon={false}
          stats={357}
          labelColor='dark'
          textColor='gray-300'
        />
      </div> */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget17
          className='h-md-100 mb-5 mb-xl-10'
          uniuqId={4}
          text={{
            one: '50',
            two: '3.2% (Percentage of Call Transferred)',
            three: 'Call transferred to staff',
            four: 'Avg call length by AI',
            five: 'Avg call length by Staff',
            six: 'Call Completed',
            seven: '10',
            eight: '15',
            nine: '10,480',
          }}
        />
      </div>
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget17
          className='h-md-100 mb-5 mb-xl-10'
          uniuqId={1}
          text={{
            one: '69,700',
            two: '2.2% (AI Calls)',
            three: 'Total Call Recieved',
            four: 'Answered by AI',
            five: 'Answered by Staff',
            six: 'Not Answered',
            seven: '7,660',
            eight: '2,820',
            nine: '45,257',
          }}
        />
      </div>
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget17
          className='h-md-100 mb-5 mb-xl-10'
          uniuqId={2}
          text={{
            one: '700',
            two: '2.2% (AI Booked)',
            three: 'Total Call Booked',
            four: 'Booked by AI',
            five: 'Booked by Staff',
            six: 'Not Booked',
            seven: '600',
            eight: '100',
            nine: '357',
          }}
        />
      </div>
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        <CardsWidget17
          className='h-md-100 mb-5 mb-xl-10'
          uniuqId={3}
          text={{
            one: '60',
            two: '2.2% (Percentage of Bookings Cancelled)',
            three: 'Total Cancellations',
            four: 'Cancelled by AI',
            five: 'Cancelled by Staff',
            // six: 'Not Answered',
            seven: '50',
            eight: '10',
            // nine: '45,257',
          }}
        />
      </div>
    </div>
  )
}

export default MainStatistics
