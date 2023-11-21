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
import { useNavigate } from 'react-router-dom'

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
      <UserCustomHeader tableProps={props} title='Call ID' className='min-w-125px' />
    ),
    id: 'callId',
    Cell: ({...props}) => <>call_9s6XKzkNRiz8i3</>,
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
      <UserCustomHeader tableProps={props} title='Phone #' className='min-w-150px' />
    ),
    accessor: 'role',
    Cell: ({...props}) => <>+1 402-302-0093</>,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='CAll Date' className='min-w-175px' />
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
      <UserCustomHeader tableProps={props} title='Action' className='text-center min-w-125px' />
    ),
    id: 'action',
    Cell: ({...props}) => (
      <UserActionsCell
        id={props.data[props.row.index].id}
        select={'Action'}
        action={{
          one: 'New app',
          two: 'Modified app',
          three: 'Cancelled app',
        }}
      />
    ),
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-center min-w-125px' />
    ),
    id: 'actions',
    Cell: ({...props}) => (
      <UserActionsCell
        id={props.data[props.row.index].id}
        select={'Actions'}
        action={{
          one: 'Edit',
          two: 'Delete',
        }}
      />
    ),
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Note' className='text-center min-w-125px' />
    ),
    id: 'note',
    Cell: ({...props}) => {
      const navigate = useNavigate()

      const openAddNotePage = () => {
        navigate('/notes/add')
      }
      
      return (
        <div className='d-flex justify-content-center'>
          <a className='menu-link cursor-pointer' onClick={openAddNotePage}>
          <span class='badge badge-light-primary fs-8 fw-bold'>Add note</span>
          </a>
        </div>
      )

    }
  },
]

export {customersColumns}
