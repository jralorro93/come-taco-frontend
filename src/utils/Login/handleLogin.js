import axios from 'axios'

const handleLogin = ( email, password, setCurrentUser, localStorage, history) => {
    // fetch('http://localhost:3000/api/v1/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({email, password})
    // })
    // .then(res => res.json())
    // .then(user => {
    //     localStorage.setItem('token', user.jwt)
    //     console.log('this is localStorage', localStorage)
    //     setCurrentUser(user.user)
    //     // history.push('/')
    // })
    axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: { email, password},
        url: 'http://localhost:3000/api/v1/login'
    })
        .then(res => setCurrentUser(res.data.user))
}
export default handleLogin