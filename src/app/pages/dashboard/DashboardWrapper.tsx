/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useState} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
} from '../../../_metronic/partials/widgets'
import {CustomersListWrapper} from '../../modules/apps/customer-management/users-list/UsersList'
import MainStatistics from './statistics'

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <MainStatistics />
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gx-5 gx-xl-10'>
      <div id='kt_app_toolbar' className='app-toolbar py-3 py-lg-6'>
        <div
          id='kt_page_title'
          data-kt-swapper='true'
          data-kt-swapper-mode='prepend'
          data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
          className='page-title d-flex flex-wrap me-3 flex-column justify-content-center'
        >
          <h1 className='page-heading d-flex text-dark fw-bold fs-3 my-0 flex-column justify-content-center'>
            Appointments
          </h1>
        </div>
      </div>
      {/* begin::Col */}
      {/* <div className='col-xxl-6 mb-5 mb-xl-10'> */}
      {/* <app-new-charts-widget8 cssclassName="h-xl-100" chartHeight="275px" [chartHeightNumber]="275"></app-new-charts-widget8> */}
      {/* </div> */}
      {/* end::Col */}

      {/* begin::Col */}
      {/* <div className='col-xxl-6 mb-5 mb-xl-10'> */}
      {/* <app-cards-widget18 cssclassName="h-xl-100" image="./assets/media/stock/600x600/img-65.jpg"></app-cards-widget18> */}
      {/* </div> */}
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    {/* <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div> */}
    {/* end::Row */}

    {/* begin::Row */}
    {/* <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} /> */}
    {/* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */}
    {/* </div>
    </div> */}
    {/* end::Row */}

    {/* <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='150px'
        />
      </div>
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div> */}
  </>
)

const DashboardWrapper: FC = () => {
  const [filter, setFilter] = useState<string>('1')
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <div className='d-flex justify-content-end'>
        <div className='me-4'>
          <select
            name='status'
            data-control='select2'
            data-hide-search='true'
            className='form-select form-select-sm form-select-white w-95px mb-4'
            defaultValue='Month'
          >
            <option value='Month'>Month</option>
            <option value='Week'>Week</option>
            <option value='Day'>Day</option>
          </select>
        </div>
        {/* <div className='me-4'>
              <select
                name='status'
                data-control='select2'
                data-hide-search='true'
                className='form-select form-select-sm form-select-white w-95px'
                defaultValue='Week'
              >
                <option value='Week'>Week</option>
              </select>
            </div>
            <div className='mb-4'>
              <select
                name='status'
                data-control='select2'
                data-hide-search='true'
                className='form-select form-select-sm form-select-white w-95px'
                defaultValue='Day'
              >
                <option value='Day'>Day</option>
              </select>
            </div> */}
      </div>
      <DashboardPage />
      <CustomersListWrapper />
    </>
  )
}

export {DashboardWrapper}
