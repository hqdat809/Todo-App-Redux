import { createSelector } from "reselect"

export const searchTextSelector = (state) => state.filters.search

export const searchStatusSelector = (state) => state.filters.status

export const searchPrioritySelector = (state) => state.filters.priority

export const todoListSelector = (state) => state.todoList

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    searchStatusSelector,
    searchPrioritySelector,
    (todoList, searchText, status, priorities) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities.length ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText)
            }

            const result = (
                todo.name.includes(searchText) && (status === 'Completed' ? todo.completed : !todo.completed)
                && (priorities.length ? priorities.includes(todo.priority) : true)
            )

            return result
        })
    }
)