// const handleSignup = (email, password, firstName, lastName, setCurrentUser, localStorage, history) => {
//     fetch('http://localhost:3000/api/v1/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//           first_name: firstName,
//           last_name: lastName
//         })
//     })
//     .then(res => res.json())
//     .then(user => {
//         localStorage.setItem('token', user.jwt)
//         setCurrentUser(user.user)
//         history.push('/')
//     })
// }
const handleSignup = (email, password, first_name, last_name) => {
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
      localStorage.setItem('token', res.data.user.jwt)
      setCurrentUser(res.data.user.user)
      props.history.push('/')
    })
}

export default handleSignup