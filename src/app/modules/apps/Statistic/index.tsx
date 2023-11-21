import React from 'react'
import {StatisticsWidget} from '../../../../_metronic/partials/widgets/statistics/StatisticsWidget'
import MainStatistics from '../../../pages/dashboard/statistics'

const AppStatistic = () => {
  return <MainStatistics />
  return (
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-3'>
        <StatisticsWidget
          className='card-xl-stretch mb-xl-8'
          title='Session'
          number='4,567'
          per={29}
          description='Total Users'
        />
      </div>
      <div className='col-xl-3'>
        <StatisticsWidget
          className='card-xl-stretch mb-xl-8'
          title='Waiting Users'
          number='4,567'
          per={18}
          description='Last week analytics'
        />
      </div>
      <div className='col-xl-3'>
        <StatisticsWidget
          className='card-xl-stretch mb-xl-8'
          title='Active Users'
          number='19,860'
          per={-14}
          description='Last week analytics'
        />
      </div>
      <div className='col-xl-3'>
        <StatisticsWidget
          className='card-xl-stretch mb-xl-8'
          title='Completed Calls'
          number='50,337'
          per={42}
          description='Last week analytics'
        />
      </div>
    </div>
  )
}

export default AppStatistic
