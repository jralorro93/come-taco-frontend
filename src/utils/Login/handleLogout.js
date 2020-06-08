const handleLogout = () => {
    localStorage.removeItem('token')
    setCurrentUser(null)
  }
  export default handleLogout