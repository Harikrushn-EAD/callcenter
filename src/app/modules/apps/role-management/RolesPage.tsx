import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import AppStatistic from '../Statistic'
import {RolesListWrapper} from './users-list/RolesList'
import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {RolesAction} from './users-list/action/rolesAction'

const rolesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Roles Management',
    path: '/roles_permissions',
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

const RolesPage = () => {
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
              <PageTitle breadcrumbs={rolesBreadcrumbs}>Roles Add</PageTitle>
              <RolesAction />
            </>
          }
        />
        <Route
          path='list'
          element={
            <>
              <AppStatistic />
              <PageTitle breadcrumbs={rolesBreadcrumbs}>Roles list</PageTitle>
              <RolesListWrapper />
            </>
          }
        />
        <Route index element={<Navigate to='/customers/list' />} />
      </Route>
    </Routes>
  )
  return <></>
}

export default RolesPage
