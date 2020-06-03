import React from 'react'

const handleLogout = (localStorage, setCurrentUser) => {
    localStorage.removeItem('token')
    setCurrentUser(null)
}
export default handleLogout