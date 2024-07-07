import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_TODO } from "../graphql/mutations";
import { v4 as uuidv4 } from 'uuid';

const Todo: React.FC = () => {

    const [title, setTitle] = useState('');

    const [tags, setTags] = useState('');

    const [addTodo] = useMutation(ADD_TODO, {
        optimisticResponse: {
            addTodo: {
                id: uuidv4(),
                title: title,
                completed: false,
                tags: tags.split(',').map(tag => tag.trim())
            }
        },
        update: (cache, {data : {addTodo} }) => {
            console.log(addTodo);
            
        }
    });

    function handleAddTodo(e: React.FormEvent) {
        e.preventDefault();
        addTodo({
            variables: {
                title,
                tags: tags.split(',').map(tag => tag.trim())
            }
        })
    }

    return (
        <>
            <div>
                <h1>Graphql powered todo app</h1>

                <form onSubmit={handleAddTodo}>
                    <input
                        type="text"
                        value={title}
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        type="text"
                        value={tags}
                        placeholder="Put comma separated tags"
                        onChange={(e) => setTags(e.target.value)}
                    />

                    <button type="submit">Add Todo</button>

                </form>
            </div>
        </>
    );
}

export default Todo;