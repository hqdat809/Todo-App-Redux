const initState = {
    search: '',
    status: 'All',
    priority: []
}

const filterReducer = (state = initState, action) => {
    console.log(state, action)
    console.log(initState)
    switch (action.type) {
        case 'filters/searchFilterChange':
            return {
                ...state,
                search: action.payload
            }
        case 'filters/filterByStatus':
            return {
                ...state,
                status: action.payload
            }
        case 'filters/filterByPriority':
            return {
                ...state,
                priority: action.payload
            }
        default:
            return state
    }
}

export default filterReducer