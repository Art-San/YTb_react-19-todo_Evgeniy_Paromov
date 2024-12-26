import { createUser, deleteUser } from '../../shared/api'

export type CreateActionState = {
  error?: string
  email: string
}

export function createUserAction({ refetchUser }: { refetchUser: () => void }) {
  return async (
    prevState: CreateActionState,
    // _: CreateActionState,
    formData: FormData
  ): Promise<CreateActionState> => {
    const email = formData.get('email') as string

    if (email === 'Art@San.ru') {
      return {
        error: 'Email занят',
        email
      }
    }
    try {
      await createUser({
        email: email,
        id: crypto.randomUUID()
      })
      refetchUser()

      return {
        email: ''
      }
    } catch (error) {
      return {
        email,
        error: `Error while creating user: ${error ? error : 'xz'}`
      }
    }
  }
}

type DeleteUserActionState = {
  error?: string
}

export function deleteUserAction({
  refetchUser,
  id
}: {
  refetchUser: () => void
  id: string
}) {
  return async (): Promise<DeleteUserActionState> => {
    try {
      await deleteUser(id)
      refetchUser()
      return {}
    } catch (error) {
      return {
        error: `Error while deleting user: ${error ? error : 'xz'}`
      }
    }
  }
}
