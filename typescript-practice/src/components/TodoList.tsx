import React from 'react';
import './styles.css';
import { ToDo } from '../model';
import SingleTodoCard from './SingleTodoCard';

interface Props{
    todos: ToDo[]
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className="todos">
        {
            todos.map( todo => (
                <SingleTodoCard todo={todo.todo} key={todo.id} todos={todos} setTodos={setTodos}/>
            ))
        }
    </div>
  )
}

export default TodoList 