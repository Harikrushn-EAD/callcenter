/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {
  className: string
  title: string
  description: string
  number: string
  per: number
}

const StatisticsWidget: React.FC<Props> = ({className, title, description, number, per}) => {
  return (
    <div
      className={`card bgi-no-repeat ${className}`}
      style={{
        backgroundPosition: 'right top',
        backgroundSize: '30% auto',
      }}
    >
      {/* begin::Body */}
      <div className='card-body'>
        <a href='#' className='card-title fw-bold text-muted text-hover-primary fs-4'>
          {title}
        </a>

        <div className='fw-bold text-dark my-3 fs-1'>
          {number}{' '}
          <span className={per > 0 ? 'text-success fs-3' : 'text-danger fs-3'}>{`(${
            per > 0 ? '+' : ''
          }${per}%)`}</span>
        </div>

        <p
          className='text-dark-75 fw-semibold fs-4 m-0'
          dangerouslySetInnerHTML={{__html: description}}
        ></p>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {StatisticsWidget}
