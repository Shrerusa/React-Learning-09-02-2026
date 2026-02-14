import { createContext, useContext } from "react"



export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Todo msg",
            complete: false
        }
    ],
    addTodo: (todo) => {}, 
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}

