export const regHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
export const authHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
}