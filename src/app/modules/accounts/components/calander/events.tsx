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

  function renderEventContent(eventInfo: {
    timeText:
      | boolean
      | React.ReactChild
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined
    event: {
      title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
    }
  }) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  function renderSidebarEvent(event: {
    id: React.Key | null | undefined
    start: D
    title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
  }) {
    return (
      <li key={event.id}>
        <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
        <i>{event.title}</i>
      </li>
    )
  }

  return (
    <div>
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
        dayMaxEvents={true}
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents as any} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
      />
    </div>
  )
}

export default EventsCalanderComponents
