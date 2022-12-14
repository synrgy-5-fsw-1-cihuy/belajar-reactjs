const initialStateTodo = {
    todos: ['Lorem']
};

const todoReducer = (state = initialStateTodo, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todo: state.todos.concat(action.todo)
            }
    
        default:
            return state;
    };
};

export default todoReducer;
