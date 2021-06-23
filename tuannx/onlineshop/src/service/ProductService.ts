import http from '../http-common'
class ProductService {
  getAll () {
    return http.get('/getAllProduct')
  }

  //   get(id) {
  //     return http.get(`/tutorials/${id}`);
  //   }

//   create (data: any) {
//     return http.post('/', data)
//   }

//   update (id: any, data: any) {
//     return http.put(`/${id}`, data)
//   }

//   delete (id: any) {
//     return http.delete(`/${id}`)
//   }

  //   deleteAll() {
  //     return http.delete(`/tutorials`);
  //   }

  //   findByTitle(title) {
  //     return http.get(`/tutorials?title=${title}`);
  //   }
}

export default new ProductService()
