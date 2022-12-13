const initialState = {
    tasks: ['Joo', 'Jalil']
};

const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat(action.task)
            }
        case 'REMOVE_TASK':
            return {
                tasks: state.tasks.pop()
            }
        default:
            return state;
    }
};

export default appReducer;
