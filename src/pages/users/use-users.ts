import { useState, startTransition } from 'react'
import { fetchUsers } from '../../shared/api'

const defaultUsersPromises = fetchUsers()

export function useUsers() {
  const [usersPromise, setUsersPromises] = useState(defaultUsersPromises)
  const refetchUser = () => startTransition(() => setUsersPromises(fetchUsers))

  return [usersPromise, refetchUser] as const
}
