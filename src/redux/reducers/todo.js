const initialState = {
    todoList: [],
}

export default function todo(state = initialState, action) {
    switch (action.type) {
        case 'todo.addTodo':
            return addTodo(state, action)
        default:
            return state
    }
}

function addTodo(state, action) {
    return Object.assign({}, state, {todoList: action.todoList})
}
