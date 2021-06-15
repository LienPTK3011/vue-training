import axios from "axios"

class Api {
    create(data: any) {
        return axios.post('http://127.0.0.1:8000/api/create', data)
    }

    getAll() {
        return axios.get('http://127.0.0.1:8000/api/lists')
    }

    delete(id: any) {
        return axios.get(`http://127.0.0.1:8000/api/delete/${id}`)
    }

    getItem(id: any) {
        return axios.get(`http://127.0.0.1:8000/api/item/${id}`)
    }

    update(data: any) {
        return axios.post(`http://127.0.0.1:8000/api/update`, data)
    }

    search(text: any) {
        return axios.post(`http://127.0.0.1:8000/api/search`, {text: text})
    }
}

export default new Api