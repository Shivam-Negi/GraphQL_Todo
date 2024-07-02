import Todo from '../models/todo';
import ITodo from '../types/todo';

class TodoRepo {

    async getAll() : Promise<ITodo[]> {
        const todos = await Todo.find();
        return todos;
    }

    async create(title : String, tags: String[]) : Promise<ITodo> {
        const todo = await Todo.create({
            title,
            tags,
            completed: false
        });
        return todo;
    }
}

export default TodoRepo;