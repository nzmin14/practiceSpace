import React from 'react'
import "./styles.css";

interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  
    return (
    <form className="input" 
        onSubmit={(e) => {
        handleAdd(e);
        }}>

        <input type="input"
        value={todo}
        onChange={
            (e) => setTodo(e.target.value)
        }
        placeholder="Enter a task" className="input__box" 
        onKeyPress={e => e.key === 'Enter' && e.currentTarget.blur()} />
        <button className="input__submit" type="submit"> Add </button>
    </form>
  )
}

export default InputField