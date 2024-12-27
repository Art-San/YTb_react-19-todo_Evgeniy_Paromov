import { createUser, deleteUser } from '../../shared/api'

export type CreateActionState = {
  error?: string
  email: string
}

export type CreateUserAction = (
  state: CreateActionState,
  formData: FormData
) => Promise<CreateActionState>

export function createUserAction({
  refetchUsers
}: {
  refetchUsers: () => void
}): CreateUserAction {
  return async (_, formData) => {
    const email = formData.get('email') as string

    if (email === 'Art@San.ru') {
      return {
        error: 'Email занят',
        email
      }
    }

    try {
      const user = {
        email,
        id: crypto.randomUUID()
      }

      await createUser(user)

      refetchUsers()

      return {
        email: ''
      }
    } catch {
      return {
        email,
        error: 'Error while creating user'
      }
    }
  }
}

type DeleteUserActionState = {
  error?: string
}

export type DeleteUserAction = (
  state: DeleteUserActionState,
  formData: FormData
) => Promise<DeleteUserActionState>

export function deleteUserAction({
  refetchUsers
}: {
  refetchUsers: () => void
}): DeleteUserAction {
  return async (_, formData) => {
    const id = formData.get('id') as string
    try {
      await deleteUser(id)
      refetchUsers()
      return {}
    } catch {
      return {
        error: 'Error while deleting user'
      }
    }
  }
}
