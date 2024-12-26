import { use, useState, Suspense, useTransition, startTransition } from 'react'
import { User, createUser, deleteUser, fetchUsers } from '../../shared/api'

const defaultUsersPromises = fetchUsers()

export function UsersPage() {
  const [usersPromise, setUsersPromises] = useState(defaultUsersPromises)
  const refetchUser = () => startTransition(() => setUsersPromises(fetchUsers))

  // Первый вар
  // const refetchUser = () => {
  //   setUsersPromises(fetchUsers)
  // }

  return (
    <main className=" container mx-auto p-4 pt-10 flex flex-col gap-4">
      <div className=" text-3xl font-bold underline mb-10">UserPage</div>
      <CreateUserForm refetchUser={refetchUser} />
      <Suspense fallback={'Loading...'}>
        <UsersList usersPromise={usersPromise} refetchUser={refetchUser} />
      </Suspense>
    </main>
  )
}

export function CreateUserForm({ refetchUser }: { refetchUser: () => void }) {
  const [email, setEmail] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      await createUser({
        email,
        id: crypto.randomUUID()
      })
      refetchUser()
      setEmail('')

      // Первый вар
      // startTransition(() => {
      //   refetchUser()
      //   setEmail('')
      // })
    })
  }
  return (
    <form className=" flex gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        className=" border p-2 rounded"
        value={email}
        disabled={isPending}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="введите email"
      />

      <button
        disabled={isPending}
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
      >
        {'add'}
      </button>
    </form>
  )
}

export function UsersList({
  usersPromise,
  refetchUser
}: {
  usersPromise: Promise<User[]>
  refetchUser: () => void
}) {
  const users = use(usersPromise)
  // console.log(123, users)
  return (
    <div className=" flex flex-col">
      {users.map((user) => (
        <UserCard key={user.id} user={user} refetchUser={refetchUser} />
      ))}
    </div>
  )
}

export function UserCard({
  user,
  refetchUser
}: {
  user: User
  refetchUser: () => void
}) {
  const [isPending, startTransition] = useTransition()

  const handleDel = async (id: string) => {
    startTransition(async () => {
      await deleteUser(id)
      refetchUser()
    })
  }

  // Первый вар
  // const handleDel = async (id: string) => {
  //   startTransition(async () => {
  //     await deleteUser(id)
  //     startTransition(() => refetchUser())
  //   })
  // }

  return (
    <div className=" border p-2 m-2 rounded bg-gray-100 flex gap-2">
      {user.email}
      <button
        type="button"
        onClick={() => handleDel(user.id)}
        disabled={isPending}
        className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
      >
        delete
      </button>
    </div>
  )
}
