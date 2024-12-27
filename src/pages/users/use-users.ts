import { useState, startTransition } from 'react'
import { fetchUsers } from '../../shared/api'
import { createUserAction, deleteUserAction } from './actions'

const defaultUsersPromises = fetchUsers()

export function useUsers() {
  const [usersPromise, setUsersPromises] = useState(defaultUsersPromises)
  const refetchUsers = () => startTransition(() => setUsersPromises(fetchUsers))

  // return [usersPromise, refetchUser] as const

  return {
    createUserAction: createUserAction({ refetchUsers }),
    deleteUserAction: deleteUserAction({ refetchUsers }),
    usersPromise
  } as const
}
