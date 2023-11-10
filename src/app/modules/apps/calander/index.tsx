import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import EventsCalanderComponents from '../../accounts/components/calander/events'
import AppStatistic from '../Statistic'

const settingsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Events Calander',
    path: '/app/calendar',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const EventCalander = () => {
  return (
    <>
      <AppStatistic />
      <PageTitle breadcrumbs={settingsBreadcrumbs}>Events</PageTitle>
      <EventsCalanderComponents />
    </>
  )
}

export default EventCalander
