import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import AppStatistic from '../Statistic'
import {CustomersListWrapper} from './users-list/UsersList'
import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {NotesAction} from './users-list/action/notesAction'

const customersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Notes Management',
    path: '/notes/list',
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

const NotesPage = () => {
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
              <PageTitle breadcrumbs={customersBreadcrumbs}>Notes Add</PageTitle>
              <NotesAction />
            </>
          }
        />
        <Route
          path='list'
          element={
            <>
              <AppStatistic />
              <PageTitle breadcrumbs={customersBreadcrumbs}>Notes list</PageTitle>
              <CustomersListWrapper />
            </>
          }
        />
        <Route index element={<Navigate to='/notes/list' />} />
      </Route>
    </Routes>
  )
}

export default NotesPage
