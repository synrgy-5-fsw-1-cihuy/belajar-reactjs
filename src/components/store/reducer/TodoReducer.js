const initialStateTodo = {
    todos: ['Lorem']
};

const todoReducer = (state = initialStateTodo, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: state.todos.concat(action.payload)
            }
    
        default:
            return state;
    };
};

export default todoReducer;
