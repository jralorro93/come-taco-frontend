const handleSignup = (email, password, firstName, lastName, setCurrentUser, localStorage, history) => {
    fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          first_name: firstName,
          last_name: lastName
        })
    })
    .then(res => res.json())
    .then(user => {
        localStorage.setItem('token', user.jwt)
        setCurrentUser(user.user)
        history.push('/')
    })
}

export default handleSignup