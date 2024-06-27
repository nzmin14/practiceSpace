import React from 'react'
import { ToDo } from '../model'
import {AiFillEdit, AiFillDelete } from 'react-icons/ai';

interface Props{
    todo: string,
    key: number,
    todos: ToDo[],
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const SingleTodoCard: React.FC<Props> = ({todo, key, todos, setTodos}) => {
  return (
    <form className="todos__single">
        <span className="todos__single--text">{todo}
            <div className="icon">
                <AiFillEdit />
            </div>
            <div className="icon">
                <AiFillDelete />
            </div>
            <div className="icon">
                <button className="done">Done</button>
            </div>
        </span>

    </form>
  )
}

export default SingleTodoCard