import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import AppStatistic from '../Statistic'
import {CustomersListWrapper} from './users-list/UsersList'
import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {CustomerAction} from './users-list/action/customerAction'

const customersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Customers Management',
    path: '/customers/list',
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

const CustomersPage = () => {
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
              <PageTitle breadcrumbs={customersBreadcrumbs}>Customers Add</PageTitle>
              <CustomerAction />
            </>
          }
        />
        <Route
          path='list'
          element={
            <>
              <AppStatistic />
              <PageTitle breadcrumbs={customersBreadcrumbs}>Customers list</PageTitle>
              <CustomersListWrapper />
            </>
          }
        />
        <Route index element={<Navigate to='/customers/list' />} />
      </Route>
    </Routes>
  )
}

export default CustomersPage
