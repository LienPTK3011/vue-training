const resource = '/menu'

export default ($axios) => ({
    get() {
      return $axios.get(`${resource}`)
    }
})