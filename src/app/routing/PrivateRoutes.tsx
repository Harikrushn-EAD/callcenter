import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const RolesPage = lazy(() => import('../modules/apps/role-management/RolesPage'))
  const CustomersPage = lazy(() => import('../modules/apps/customer-management/CustomersPage'))
  const SettingPage = lazy(() => import('../modules/apps/settings/index'))
  const StaffPage = lazy(() => import('../modules/apps/staff-management/StaffPage'))
  const EventCalander = lazy(() => import('../modules/apps/calander/index'))
  const InvoicesPage = lazy(() => import('../modules/apps/invoices/InvoicesPage'))
  const ModalExamples = lazy(() => import('../modules/apps/modal_examples'))
  const Authentications = lazy(() => import('../modules/apps/authentications'))
  const ComplianceSecurityPage = lazy(
    () => import('../modules/apps/compliance-security/ComplianceSecurityPage')
  )

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />

        <Route
          path='app/staff'
          element={
            <SuspensedView>
              <StaffPage />
            </SuspensedView>
          }
        />

        <Route
          path='app/staff/*'
          element={
            <SuspensedView>
              <StaffPage />
            </SuspensedView>
          }
        />

        <Route
          path='app/settings'
          element={
            <SuspensedView>
              <SettingPage />
            </SuspensedView>
          }
        />

        <Route
          path='app/calendar'
          element={
            <SuspensedView>
              <EventCalander />
            </SuspensedView>
          }
        />

        <Route
          path='app/compliance_security'
          element={
            <SuspensedView>
              <ComplianceSecurityPage />
            </SuspensedView>
          }
        />

        <Route
          path='app/compliance_security/*'
          element={
            <SuspensedView>
              <ComplianceSecurityPage />
            </SuspensedView>
          }
        />

        <Route
          path='customers/*'
          element={
            <SuspensedView>
              <CustomersPage />
            </SuspensedView>
          }
        />

        <Route
          path='roles_permissions/*'
          element={
            <SuspensedView>
              <RolesPage />
            </SuspensedView>
          }
        />

        <Route
          path='modal_examples'
          element={
            <SuspensedView>
              <ModalExamples />
            </SuspensedView>
          }
        />

        <Route
          path='authentications'
          element={
            <SuspensedView>
              <Authentications />
            </SuspensedView>
          }
        />

        <Route
          path='settings'
          element={
            <SuspensedView>
              <SettingPage />
            </SuspensedView>
          }
        />

        <Route
          path='invoice'
          element={
            <SuspensedView>
              <InvoicesPage />
            </SuspensedView>
          }
        />

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
