import { functions } from '../hooks/helpers'

function isAuthent (callback) {
    const token = functions.readCookies('jwt');

    fetch('http://192.168.1.101:8080/api/v1/users/auth', {
        method: 'POST',
        headers: {
            "authorization": token
        }
    })
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => console.error('Ups, un error!!', err))
}


export { isAuthent };