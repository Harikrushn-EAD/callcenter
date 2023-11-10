import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import AppStatistic from '../Statistic'
import {InvoicesListWrapper} from './users-list/InvoicesList'

const invoicesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Invoices Management',
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

const InvoicesPage = () => {
  return (
    <>
      <AppStatistic />
      <PageTitle breadcrumbs={invoicesBreadcrumbs}>Roles list</PageTitle>
      <InvoicesListWrapper />
    </>
  )
}

export default InvoicesPage
