const initialState = {
    tasks: ['Joo', 'Jalil']
};

const tempArray = [];

const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat(action.task)
            }
        case 'REMOVE_TASK':
            state.tasks.pop();
            return {
                ...state
            }
        default:
            return state;
    }
};

export default appReducer;
