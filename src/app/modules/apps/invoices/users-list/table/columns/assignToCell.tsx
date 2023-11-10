import {FC} from 'react'

type Props = {
  roles: string[]
}

const AssignToCell: FC<Props> = ({roles}) => (
  <div className='d-flex  flex-wrap'>
    {roles.map((role) => (
      <div className='badge badge-light-success fw-bolder p-4 m-2'>{role}</div>
    ))}
  </div>
)

export {AssignToCell}
