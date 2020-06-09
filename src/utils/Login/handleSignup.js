import axios from 'axios'

const handleSignup = (email, password, first_name, last_name, setCurrentUser, localStorage, history) => {
  axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: { email, password, first_name, last_name },
    url: 'http://localhost:3000/api/v1/users'
  })
    .then( res => {
      localStorage.setItem('token', res.data.jwt)
      setCurrentUser(res.data.user.user)
      history.push('/')
    })
}

export default handleSignup