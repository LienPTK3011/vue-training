export default function authHeader () {
  const storedUser= localStorage.getItem('token')
  const user = JSON.parse(storedUser ? storedUser : '')

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken }
  } else {
    return {}
  }
}
