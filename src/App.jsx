import React, { useEffect, useState } from 'react'
import useCrud from './hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import './App.css'

const App = () => {
  const [users, getUsers, createUsers, deleteUsers, updateUsers] = useCrud('/users/')
  
  const [userSelected, setUserSelected] = useState()
  const [formIsOpen, setFormIsOpen] = useState(false)

  useEffect(() => {
    getUsers()  
  }, [])

  console.log(users)

  const handleOpenForm = () => {
    setFormIsOpen(true)
  }
  
  return (
    <div>
      
      <header className='header__app'>
      <h1>App React: Crud - Users</h1>
      <button className='btn__open-form' onClick={handleOpenForm} >Create new User</button>
      </header>
      <FormUser 
        createUsers={createUsers}
        userSelected={userSelected}
        updateUsers={updateUsers}
        setUserSelected={setUserSelected}
        formIsOpen={formIsOpen}
        setFormIsOpen={setFormIsOpen}
      />

      <div className='user__container'>
        {
          users?.map(user => (
            <UserCard
              key = {user.id}
              user={user}
              deleteUsers={deleteUsers}
              setUserSelected={setUserSelected}
              setFormIsOpen={setFormIsOpen}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App