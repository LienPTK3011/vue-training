import http from "@/http"

class B_employee {
    getAll() {
        return http.get("/employee");
    }

    profile(id:any) {
        return http.get(`/employee/edit/${id}`);
    }

    addEmployee(data:any) {
        return http.post("/employee/add",data);
    }

    edit(id:any, data:any) {
        return http.post(`/employee/update/${id}`,data)
    }

    delete (id:number) {
        return http.post(`/employee/delete/${id}`)
    }

}
export default new B_employee();