import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo, toggleCompleted } from '../features/todo/todoSlice'

function Todo() {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()
  const [editableId, setEditableId] = useState(null)
  const [todoMsg, setTodoMsg] = useState("")

  const editTodo = (id) => {
    dispatch(updateTodo({ id, text: todoMsg }))
    setEditableId(null)
  }

  const toggleComplete = (id) => {
    dispatch(toggleCompleted(id))
  }

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className={`flex border border-black/10 rounded-lg mt-2 px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
              }`}
            key={todo.id}
          >
            <input
              type="checkbox"
              className={`cursor-pointer `}
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />

            <input
              type="text"
              className={`border outline-none w-full bg-slate-300 px-2 rounded-lg text-black
                ${editableId === todo.id ? "border-black/10 px-3" : "border-transparent"} 
                ${todo.completed ? "line-through" : ""}`}
              value={editableId === todo.id ? todoMsg : todo.text}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={editableId !== todo.id}
            />

            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 
              justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                if (todo.completed) return
                if (editableId === todo.id) {
                  editTodo(todo.id)
                } else {
                  setEditableId(todo.id)
                  setTodoMsg(todo.text)
                }
              }}
              disabled={todo.completed}
            >
              {editableId === todo.id ? "📁" : "✏️"}
            </button>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
