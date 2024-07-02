import TodoRepo from "../repository/todoRepo";

class TodoService {

    todoRepo : TodoRepo;

    constructor(todoRepo : TodoRepo) {
        this.todoRepo = todoRepo;
    }

    async getAll() {
        return await this.todoRepo.getAll();
    }

    async create(title : String, tags : String[]) {
        return await this.todoRepo.create(title, tags);
    }

}

export default TodoService;