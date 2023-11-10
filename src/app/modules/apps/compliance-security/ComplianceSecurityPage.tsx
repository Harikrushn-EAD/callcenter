import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import AppStatistic from '../Statistic'
import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {ComplianceSecurityWrapper} from './users-list/ComplianceSecuritysList'
import {ComplianceSecurityAction} from './users-list/action/complianceSecurityAction'

const complianceSecurityBreadcrumbs: Array<PageLink> = [
  {
    title: 'Compliance Security ',
    path: '/app/compliance_security',
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

const ComplianceSecurityPage = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path='add'
          element={
            <>
              <PageTitle breadcrumbs={complianceSecurityBreadcrumbs}>
                Compliance Security Add
              </PageTitle>
              <ComplianceSecurityAction />
            </>
          }
        />
        <Route
          index
          element={
            <>
              <AppStatistic />
              <PageTitle breadcrumbs={complianceSecurityBreadcrumbs}>
                Compliance Security list
              </PageTitle>
              <ComplianceSecurityWrapper />
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default ComplianceSecurityPage
