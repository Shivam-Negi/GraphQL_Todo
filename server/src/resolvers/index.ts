import TodoRepo from "../repository/todoRepo"
import TodoService from "../services/todoService"

const todoService = new TodoService(new TodoRepo());

const resolvers = {
    Query : {
        getTodos: async () => {
            return await todoService.getAll();
        }
    },
    Mutation : {
        addTodo: async (_: any, {title, tags} : {title: String, tags: String[]}) => {
            return await todoService.create(title, tags);
        }
    }
}

export default resolvers;