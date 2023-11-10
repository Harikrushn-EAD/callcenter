import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {Settings} from '../../accounts/components/settings/Settings'
import AppStatistic from '../Statistic'

const settingsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Settings',
    path: '/settings',
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

const SettingPage = () => {
  return (
    <>
      <AppStatistic />
      <PageTitle breadcrumbs={settingsBreadcrumbs}>Settings</PageTitle>
      <Settings />
    </>
  )
}

export default SettingPage
