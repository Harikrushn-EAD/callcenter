// @ts-nocheck
import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../core/_models'

const customersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Customer' className='min-w-125px' />
    ),
    id: 'name',
    Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Customer ID' className='min-w-125px' />
    ),
    accessor: 'id',
    Cell: ({...props}) => <>cus_9s6XKzkNRiz8i3</>,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Phone #' className='min-w-125px' />
    ),
    accessor: 'role',
    Cell: ({...props}) => <>+1 402-302-0093</>,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='CAll Date' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='CAll Length' className='min-w-125px' />
    ),
    id: 'last_login',
    Cell: ({...props}) => <>5m 43s</>,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Status' className='min-w-125px' />
    ),
    id: 'two_steps',
    Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-center min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {customersColumns}
