import { Route } from 'react-router'
import { Routes } from 'react-router'
import { UsersPage } from '../pages/users'
import { TodoListPage } from '../pages/todo-list'
import { UsersProvider } from '../entities/user'
import { UsersListPage } from '../pages/usersListPage'

export function App() {
  return (
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    // <UsersProvider>
    //   <Routes>
    //     <Route path="/" element={<UsersListPage />}></Route>
    //     {/* <Route path="/" element={<UsersPage />}></Route> */}
    //     {/* <Route path="/:userId/tasks" element={<TodoListPage />}></Route> */}
    //   </Routes>
    // </UsersProvider>
  )
}
