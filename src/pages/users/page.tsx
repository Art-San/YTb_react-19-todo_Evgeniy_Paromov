import { use, useState, Suspense } from 'react'
import { User, createUser, fetchUsers } from '../../shared/api'

const defaultUsersPromises = fetchUsers()

export function UsersPage() {
  const [usersPromise, setUsersPromises] = useState(defaultUsersPromises)
  const refetchUser = () => {
    setUsersPromises(fetchUsers)
  }

  return (
    <main className=" container mx-auto p-4 pt-10 flex flex-col gap-4">
      <div className=" text-3xl font-bold underline mb-10">UserPage</div>
      <CreateUserForm refetchUser={refetchUser} />
      <Suspense fallback={'Loading...'}>
        <UsersList usersPromise={usersPromise} />
      </Suspense>
    </main>
  )
}

export function CreateUserForm({ refetchUser }: { refetchUser: () => void }) {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createUser({
      email,
      id: crypto.randomUUID()
    })
    refetchUser()
    setEmail('')
  }
  return (
    <form className=" flex gap-2" onSubmit={handleSubmit}>
      <input
        type="email"
        className=" border p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="введите email"
      />

      <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        add
      </button>
    </form>
  )
}

export function UsersList({ usersPromise }: { usersPromise: Promise<User[]> }) {
  const users = use(usersPromise)
  // console.log(123, users)
  return (
    <div className=" flex flex-col">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}

export function UserCard({ user }: { user: User }) {
  return (
    <div className=" border p-2 m-2 rounded bg-gray-100 flex gap-2">
      {user.email}
      <button
        className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto"
        type="button"
      >
        delete
      </button>
    </div>
  )
}
