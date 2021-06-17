import http from '../http-common'
class StaffService {
  getAll () {
    return http.get('/staff')
  }

  //   get(id) {
  //     return http.get(`/tutorials/${id}`);
  //   }

  create (data: any) {
    return http.post('/staff', data)
  }

  update (id: any, data: any) {
    return http.put(`/staff/${id}`, data)
  }

  delete (id: any) {
    return http.delete(`/staff/${id}`)
  }

  //   deleteAll() {
  //     return http.delete(`/tutorials`);
  //   }

  //   findByTitle(title) {
  //     return http.get(`/tutorials?title=${title}`);
  //   }
}

export default new StaffService()
