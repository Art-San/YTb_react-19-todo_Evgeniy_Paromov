// import { useOptimistic, use } from "react";
// import { User } from "../../shared/api";
// import { createUserAction, deleteUserAction } from "./actions";
// import { useUsersGlobal } from "../../entities/user";

// export function useUsers() {
//   const { refetchUsers, usersPromise } = useUsersGlobal();

//   const [createdUsers, optimisticCreate] = useOptimistic(
//     [] as User[],
//     (createdUsers, user: User) => [...createdUsers, user]
//   );

//   const [deletedUsersIds, optimisticDelete] = useOptimistic(
//     [] as string[],
//     (deletedUsers, id: string) => deletedUsers.concat(id)
//   );

//   const useUsersList = () => {
//     const users = use(usersPromise);

//     return users
//       .concat(createdUsers)
//       .filter((user) => !deletedUsersIds.includes(user.id));
//   };

//   return {
//     createUserAction: createUserAction({ refetchUsers, optimisticCreate }),
//     deleteUserAction: deleteUserAction({ refetchUsers, optimisticDelete }),
//     useUsersList,
//   } as const;
// }

// import { createUser, deleteUser, User } from "../../shared/api";

// export type CreateActionState = {
//   error?: string;
//   email: string;
// };

// export type CreateUserAction = (
//   state: CreateActionState,
//   formData: FormData
// ) => Promise<CreateActionState>;

// export function createUserAction({
//   refetchUsers,
//   optimisticCreate,
// }: {
//   refetchUsers: () => void;
//   optimisticCreate: (user: User) => void;
// }): CreateUserAction {
//   return async (_, formData) => {
//     const email = formData.get("email") as string;

//     if (email === "admin@gmail.com") {
//       return {
//         error: "Admin account is not allowed",
//         email,
//       };
//     }

//     try {
//       const user = {
//         email,
//         id: crypto.randomUUID(),
//       };
//       optimisticCreate(user);
//       await createUser(user);

//       refetchUsers();

//       return {
//         email: "",
//       };
//     } catch {
//       return {
//         email,
//         error: "Error while creating user",
//       };
//     }
//   };
// }

// type DeleteUserActionState = {
//   error?: string;
// };

// export type DeleteUserAction = (
//   state: DeleteUserActionState,
//   formData: FormData
// ) => Promise<DeleteUserActionState>;

// export function deleteUserAction({
//   refetchUsers,
//   optimisticDelete,
// }: {
//   refetchUsers: () => void;
//   optimisticDelete: (id: string) => void;
// }): DeleteUserAction {
//   return async (_, formData) => {
//     const id = formData.get("id") as string;
//     try {
//       optimisticDelete(id);
//       await deleteUser(id);
//       refetchUsers();
//       return {};
//     } catch {
//       return {
//         error: "Error while deleting user",
//       };
//     }
//   };
// }

// import { Suspense, useActionState, useOptimistic, useRef } from "react";
// import { ErrorBoundary } from "react-error-boundary";
// import { CreateUserAction, DeleteUserAction } from "./actions";
// import { useUsers } from "./use-users";
// import { Link } from "react-router-dom";

// type User = {
//   id: string;
//   email: string;
// };

// export function UsersPage() {
//   const { useUsersList, createUserAction, deleteUserAction } = useUsers();
//   return (
//     <main className="container mx-auto p-4 pt-10 flex flex-col gap-4">
//       <h1 className="text-3xl font-bold underline">Users</h1>
//       <CreateUserForm createUserAction={createUserAction} />
//       <ErrorBoundary
//         fallbackRender={(e) => (
//           <div className="text-red-500">
//             Something went wrong:{JSON.stringify(e)}{" "}
//           </div>
//         )}
//       >
//         <Suspense fallback={<div>Loading...</div>}>
//           <UsersList
//             deleteUserAction={deleteUserAction}
//             useUsersList={useUsersList}
//           />
//         </Suspense>
//       </ErrorBoundary>
//     </main>
//   );
// }

// export function CreateUserForm({
//   createUserAction,
// }: {
//   createUserAction: CreateUserAction;
// }) {
//   const [state, dispatch] = useActionState(createUserAction, {
//     email: "",
//   });

//   const [optimisticState, setOptimisticState] = useOptimistic(state);
//   const form = useRef<HTMLFormElement>(null);
//   return (
//     <form
//       className="flex gap-2"
//       ref={form}
//       action={(formData: FormData) => {
//         setOptimisticState({ email: "" });
//         dispatch(formData);
//         form.current?.reset();
//       }}
//     >
//       <input
//         name="email"
//         type="email"
//         className="border p-2 rounded"
//         defaultValue={optimisticState.email}
//       />
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
//         type="submit"
//       >
//         Add
//       </button>
//       {optimisticState.error && (
//         <div className="text-red-500">{optimisticState.error}</div>
//       )}
//     </form>
//   );
// }

// export function UsersList({
//   deleteUserAction,
//   useUsersList,
// }: {
//   useUsersList: () => User[];
//   deleteUserAction: DeleteUserAction;
// }) {
//   const users = useUsersList();
//   return (
//     <div className="flex flex-col">
//       {users.map((user) => (
//         <UserCard
//           key={user.id}
//           user={user}
//           deleteUserAction={deleteUserAction}
//         />
//       ))}
//     </div>
//   );
// }

// export function UserCard({
//   user,
//   deleteUserAction,
// }: {
//   user: User;
//   deleteUserAction: DeleteUserAction;
// }) {
//   const [state, handleDelete] = useActionState(deleteUserAction, {});

//   return (
//     <div className="border p-2 m-2 rounded bg-gray-100 flex gap-2">
//       {user.email}

//       <form className="ml-auto">
//         <input type="hidden" name="id" value={user.id} />
//         <Link
//           to={`/${user.id}/tasks`}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
//         >
//           Tasks
//         </Link>
//         <button
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
//           formAction={handleDelete}
//         >
//           Delete
//           {state.error && <div className="text-red-500">{state.error}</div>}
//         </button>
//       </form>
//     </div>
//   );
// }
