import React, {useState} from 'react'
import {formatDate} from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {D} from '@fullcalendar/core/internal-common'

const EventsCalanderComponents = () => {
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateSelect = (selectInfo: {
    view: {calendar: any}
    startStr: any
    endStr: any
    allDay: any
  }) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: currentEvents.length + 1,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }

  const handleEventClick = (clickInfo: {event: {title: any; remove: () => void}}) => {
    alert(clickInfo.event.title)
  }

  const handleEvents = (events: React.SetStateAction<never[]>) => {
    setCurrentEvents(events)
  }

  return (
    <div>
      <div className='d-flex justify-content-end'>
        <div className='me-4'>
          <select
            name='status'
            data-control='select2'
            data-hide-search='true'
            className='form-select form-select-sm form-select-white w-95px mb-4'
            defaultValue='Service Type'
          >
            <option value='Service Type'>Service Type</option>
          </select>
        </div>
        <div className='me-4'>
          <select
            name='status'
            data-control='select2'
            data-hide-search='true'
            className='form-select form-select-sm form-select-white w-95px mb-4'
            defaultValue='Staff'
          >
            <option value='Staff'>Staff</option>
          </select>
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        initialView='dayGridMonth'
        editable={true}
        selectable={true}
        selectMirror={true}
        navLinks={true}
        dayMaxEvents={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventsSet={handleEvents as any}
      />
    </div>
  )
}

export default EventsCalanderComponents
