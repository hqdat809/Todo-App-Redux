export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}
export const filterByStatus = (status) => {
    return {
        type: 'filters/filterByStatus',
        payload: status
    }
}

export const filterByPriority = (priorities) => {
    return {
        type: 'filters/filterByPriority',
        payload: priorities
    }
}

export const toggleCheckbox = (data) => {
    return {
        type: 'todoList/editStatus',
        payload: data
    }
}