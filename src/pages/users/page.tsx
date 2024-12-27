import { useOptimistic, Suspense, useActionState, useRef } from 'react'
import { User } from '../../shared/api'
import { ErrorBoundary } from 'react-error-boundary'
import { CreateUserAction, DeleteUserAction } from './actions'
import { useUsers } from './use-users'
import { Link } from 'react-router'

export function UsersPage() {
  const { useUsersList, createUserAction, deleteUserAction } = useUsers()
  return (
    <main className=" container mx-auto p-4 pt-10 flex flex-col gap-4">
      <div className=" text-3xl font-bold underline mb-10">UserPage</div>
      <CreateUserForm createUserAction={createUserAction} />
      <ErrorBoundary
        fallbackRender={(e) => (
          <div className=" text-red-300">
            Something went wrong: {JSON.stringify(e)}{' '}
          </div>
        )}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <UsersList
            useUsersList={useUsersList}
            deleteUserAction={deleteUserAction}
          />
        </Suspense>
      </ErrorBoundary>
    </main>
  )
}

export function CreateUserForm({
  createUserAction
}: {
  createUserAction: CreateUserAction
}) {
  const [state, dispatch] = useActionState(createUserAction, {
    email: ''
  })

  const [optimisticState, setOptimisticState] = useOptimistic(state)
  const form = useRef<HTMLFormElement>(null)

  return (
    <form
      className=" flex gap-2"
      ref={form}
      action={(formData: FormData) => {
        setOptimisticState({ email: '' })
        dispatch(formData)
        form.current?.reset()
      }}
    >
      <input
        type="email"
        name="email"
        className=" border p-2 rounded"
        defaultValue={optimisticState.email}
        placeholder="введите email"
      />

      <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400">
        {'add'}
      </button>
      {optimisticState.error && (
        <div className=" text-red-400">{optimisticState.error}</div>
      )}
    </form>
  )
}

export function UsersList({
  deleteUserAction,
  useUsersList
}: {
  useUsersList: () => User[]
  deleteUserAction: DeleteUserAction
}) {
  const users = useUsersList()

  return (
    <div className=" flex flex-col">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUserAction={deleteUserAction}
        />
      ))}
    </div>
  )
}

export function UserCard({
  user,
  deleteUserAction
}: {
  user: User
  deleteUserAction: DeleteUserAction
}) {
  const [state, handleDelete] = useActionState(deleteUserAction, {})

  return (
    <div className=" border p-2 m-2 rounded bg-gray-100 flex gap-2">
      {user.email}
      <form className="ml-auto">
        <input type="hidden" name="id" value={user.id} />
        <Link
          to={`/${user.id}/tasks`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
        >
          Tasks
        </Link>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
          formAction={handleDelete}
        >
          Delete
          {state.error && <div className="text-red-500">{state.error}</div>}
        </button>
      </form>
    </div>
  )
}
