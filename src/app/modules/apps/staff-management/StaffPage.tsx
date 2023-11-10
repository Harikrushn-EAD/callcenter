import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import AppStatistic from '../Statistic'
import {StaffListWrapper} from './users-list/StaffList'
import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {StaffAction} from './users-list/action/staffAction'

const staffBreadcrumbs: Array<PageLink> = [
  {
    title: 'Staff Management',
    path: '/app/staff',
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

const StaffPage = () => {
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
              <PageTitle breadcrumbs={staffBreadcrumbs}>Staff Add</PageTitle>
              <StaffAction />
            </>
          }
        />
        <Route
          index
          element={
            <>
              <AppStatistic />
              <PageTitle breadcrumbs={staffBreadcrumbs}>Staff list</PageTitle>
              <StaffListWrapper />
            </>
          }
        />
      </Route>
    </Routes>
  )
}

export default StaffPage
