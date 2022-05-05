import filterReducer from "../components/Filters/FilterSlice"
import todoListReducer from "../components/TodoList/TodosSlice"

const rootReducer = (state = {}, action) => {
    return {
        filters: filterReducer(state.filters, action),
        todoList: todoListReducer(state.todoList, action),
    }
}

export default rootReducer