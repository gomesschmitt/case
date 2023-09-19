import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/toDos");
  }

  get(id) {
    return http.get(`/toDo/${id}`); //nao tinha o s
  }

  create(data) {
    return http.post("/toDo", data); //nao tinha o s
  }

  update(id, data) {
    return http.patch(`/toDo/${id}`, data); //nao tinha o s
  }

  delete(id) {
    return http.delete(`/toDo/${id}`); //nao tinha o s
  }

}

export default new DataService();