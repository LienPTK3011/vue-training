import axios from 'axios'

export default axios.create({
  baseURL: 'https://60cac46821337e0017e42f83.mockapi.io/api',
  headers: {
    'Content-type': 'application/json'
  }
})
