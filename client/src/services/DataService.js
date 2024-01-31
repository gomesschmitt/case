import http from "../http-common";


class DataService {
  getAll() {
    return http.get("/toDos");
  }

  get(id) {
    return http.get(`/toDos/${id}`); //nao tinha o s
  }

  async create(data) {
    console.log(data)
    return await http.post("/toDos", data); //nao tinha o s
  }

  update(id, data) {
    return http.patch(`/toDos/${id}`, data); //nao tinha o s
  }

  delete(id) {
    return http.delete(`/toDos/${id}`); //nao tinha o s
  }

}

export default new DataService();