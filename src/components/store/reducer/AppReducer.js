const initialStateApp = {
    people: ['Joo', 'Jalil']
};

const appReducer = (state = initialStateApp, action) => {

    switch(action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                people: state.people.concat(action.task)
            }
        case 'REMOVE_TASK':
            state.people.pop();
            return {
                ...state
            }
        case 'CONSOLE':
            console.log("LOG STATE FROM REDUCER :", state.people);
            return state;
        default:
            return state;
    }
};

export default appReducer;
