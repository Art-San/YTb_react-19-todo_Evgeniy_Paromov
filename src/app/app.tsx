import { Route } from 'react-router'
import { Routes } from 'react-router'
import { UsersPage } from '../pages/users'
import { TodoListPage } from '../pages/todo-list'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/:userId/tasks" element={<TodoListPage />} />
    </Routes>
  )
}
