const initialState = {
    persons: ['Joo', 'Jalil']
};

const appReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                persons: state.persons.concat(action.task)
            }
        case 'REMOVE_TASK':
            state.persons.pop();
            return {
                ...state
            }
        case 'CONSOLE':
            console.log("LOG STATE FROM REDUCER :", state.persons);
            return state;
        default:
            return state;
    }
};

export default appReducer;
