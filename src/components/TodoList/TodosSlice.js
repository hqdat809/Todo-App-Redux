const initState = []

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload
            ]
        case 'todoList/editStatus':
            console.log(state, action)
            return state.map((todo) => {
                return todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            })
        default:
            return state
    }
}

export default todoListReducer