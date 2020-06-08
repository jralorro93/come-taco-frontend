import axios from 'axios'

const handleLogin = ( email, password, setCurrentUser, localStorage, history) => {
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
        history.push('/')
}
export default handleLogin