const handleLogout = (localStorage, dispatch) => {
    localStorage.removeItem('token')
    dispatch({type: 'LOGOUT_USER'})
  }
  export default handleLogout