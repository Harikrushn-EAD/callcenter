import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import AppStatistic from '../Statistic'

const authenticationsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Authentications Management',
    path: '/authentications',
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

const Authentications = () => {
  return (
    <>
      <AppStatistic />
      <PageTitle breadcrumbs={authenticationsBreadcrumbs}>Authentications</PageTitle>
      <div>Authentications</div>
    </>
  )
}

export default Authentications
