const handleLogin = ( email, password, setCurrentUser, localStorage, history) => {
    fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
    .then(res => res.json())
    .then(user => {
        localStorage.setItem('token', user.jwt)
        setCurrentUser(user.user, () => history.push('/'))
    })
}
export default handleLogin