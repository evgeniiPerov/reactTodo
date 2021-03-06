import React from 'react'
import Todo from './Todo'
import './TodoList.css'

export default function TodoList({ todos, toggleComplete, removeTodo }) {
    return (

        <ul className="todo-list"
            style={{ visibility: todos.length ? "visible" : "hidden" }}>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ul>

    )
}
