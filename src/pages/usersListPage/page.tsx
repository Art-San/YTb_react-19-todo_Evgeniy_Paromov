import React, { useState, useEffect } from 'react'
import { useUsers } from '../users/use-users'
// import { paginate } from '../../../utils/paginate'
// import Pagination from '../../common/Pagination'
// import GroupList from '../../common/GroupList'
// import PropTypes from 'prop-types'
// import api from '../../../api'
// import SearchStatus from '../../ui/SearchStatus'
// import UsersTable from '../../ui/UsersTable'
// import _ from 'lodash'

export function UsersListPage() {
  const { useUsersList } = useUsers()

  const users = useUsersList()

  //   const [users, setUsers] = useState()
  //   const [currentPage, setCurrentPage] = useState(1)
  //   const [professions, setProfessions] = useState()
  //   const [searchQuery, setSearchQuery] = useState('')
  //   const [selectedProf, setSelectedProf] = useState()
  //   const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })
  //   const pageSize = 8

  useEffect(() => {
    // api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  // const handleDelete = (userId) => {
  //     setUsers(users.filter((user) => user._id !== userId))
  // }

  // const handleToggleBookMark = (id) => {
  //     const newArray = users.map((user) => {
  //         if (user._id === id) {
  //             return { ...user, bookmark: !user.bookmark }
  //         }
  //         return user
  //     })
  //     return newArray
  // }

  // useEffect(() => {
  //     api.professions.fetchAll().then((data) => {
  //         setProfessions(data)
  //     })
  // }, [])

  // useEffect(() => {
  //     setCurrentPage(1)
  // }, [selectedProf, searchQuery])

  // const handleProfessionsSelect = (item) => {
  //     if (searchQuery !== '') setSearchQuery('')
  //     setSelectedProf(item)
  // }

  // const handleSearchQuery = ({ target }) => {
  //     setSelectedProf(undefined)
  //     setSearchQuery(target.value)
  // }

  // const handlePageChange = (pageIndex) => {
  //     setCurrentPage(pageIndex)
  // }

  // const handleSort = (item) => {
  //     setSortBy(item)
  // }

  if (users) {
    // const filteredUsers = searchQuery
    //     ? users.filter(
    //           (user) =>
    //               user.name
    //                   .toLowerCase()
    //                   .indexOf(searchQuery.toLowerCase()) !== -1
    //       )
    //     : selectedProf
    //     ? users.filter(
    //           (user) =>
    //               JSON.stringify(user.profession) ===
    //               JSON.stringify(selectedProf)
    //       )
    //     : users

    // const count = filteredUsers.length

    // const sortedUsers = _.orderBy(
    //     filteredUsers,
    //     [sortBy.path],
    //     [sortBy.order]
    // )

    // const userGroup = paginate(sortedUsers, currentPage, pageSize)

    // const clearFilter = () => {
    //     setSelectedProf()
    // }

    return (
      <div className="">
        <h1 className=" text-red">Ntrcn</h1>
        {/* {professions && (
          <div className="d-flex flex-column flex-shrink-0 p-3">
            <GroupList
                    selectedItem={selectedProf}
                    items={professions}
                    onItemSelect={handleProfessionsSelect}
                        />
            <button
              className="btn btn-secondary mt-2"
              onClick={clearFilter}
            >
              Сброс
            </button>
          </div>
        )} */}
        <div className=" flex">
          {/* <SearchStatus length={count} />
                    <input
                        type={'text'}
                        name="searchQuery"
                        onChange={handleSearchQuery}
                        value={searchQuery}
                        placeholder="Search..."
                    /> */}
          {/* {count > 0 && (
                        <UsersTable
                            users={userGroup}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )} */}
          <div className="d-flex justify-content-center">
            {/* <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                        /> */}
          </div>
        </div>
      </div>
    )
  }
  return 'Loading...'
}
