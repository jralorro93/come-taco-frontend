const handleLogout = (localStorage, setCurrentUser) => {
    localStorage.removeItem('token')
    setCurrentUser()
}
export default handleLogout