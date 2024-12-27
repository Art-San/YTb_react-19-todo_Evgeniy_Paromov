import { use, Suspense, useActionState } from 'react'
import { User } from '../../shared/api'
import { ErrorBoundary } from 'react-error-boundary'
import { CreateUserAction, DeleteUserAction } from './actions'
import { useUsers } from './use-users'

export function UsersPage() {
  const { usersPromise, createUserAction, deleteUserAction } = useUsers()
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
            usersPromise={usersPromise}
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
  const [state, dispatch, isPending] = useActionState(createUserAction, {
    email: ''
  })

  return (
    <form className=" flex gap-2" action={dispatch}>
      <input
        type="email"
        name="email"
        className=" border p-2 rounded"
        disabled={isPending}
        defaultValue={state.email}
        placeholder="введите email"
      />

      <button
        disabled={isPending}
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
      >
        {'add'}
      </button>
      {state.error && <div className=" text-red-400">{state.error}</div>}
    </form>
  )
}

export function UsersList({
  usersPromise,
  deleteUserAction
}: {
  usersPromise: Promise<User[]>
  deleteUserAction: DeleteUserAction
}) {
  const users = use(usersPromise)

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
  const [state, handleDelete, isPending] = useActionState(deleteUserAction, {})

  return (
    <div className=" border p-2 m-2 rounded bg-gray-100 flex gap-2">
      {user.email}
      <form action={handleDelete} className=" ml-auto">
        <input type="hidden" name="id" value={user.id} />
        <button
          className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
          disabled={isPending}
        >
          Delete
          {state.error && <div className=" text-red-400">{state.error}</div>}
        </button>
      </form>
    </div>
  )
}
