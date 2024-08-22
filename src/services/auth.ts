import http from './axios'


function login(username: string, password: string) {
  return http.post('/auth/signin', {
    username: username, password: password
  })
}

export default {
  login
}