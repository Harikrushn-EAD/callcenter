import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import AppStatistic from '../Statistic'

const modalExamplesBreadcrumbs: Array<PageLink> = [
  {
    title: 'Modal Examples',
    path: '/modal_examples',
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

const ModalExamples = () => {
  return (
    <>
      <AppStatistic />
      <PageTitle breadcrumbs={modalExamplesBreadcrumbs}>Modals</PageTitle>
      <div>ModalExamples</div>
    </>
  )
}

export default ModalExamples
