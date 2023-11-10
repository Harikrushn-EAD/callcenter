import {useEffect} from 'react'
import {StaffActionFormWrapper} from './staffActionFormWrapper'

const StaffAction = () => {
  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [])

  return (
    <>
      <div className='row g-5 g-xl-8'>
        <div className='col-12 m-0'>
          <div className=' mx-5 mx-xl-15 my-7'>
            <StaffActionFormWrapper />
          </div>
        </div>
      </div>
    </>
  )
}

export {StaffAction}
