import axios from 'axios'

const handleLogin = ( email, password, dispatch, localStorage, history) => {
    axios({
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: { email, password},
        url: 'http://localhost:3000/api/v1/login'
    })
        .then(res => {
            localStorage.setItem('token', res.data.jwt)
            dispatch({type: 'LOGIN_USER', payload: res.data.user})
            history.push('/')
        })
        
}
export default handleLogin

// Look to refactor this and handleSignup
// Same code except for URL