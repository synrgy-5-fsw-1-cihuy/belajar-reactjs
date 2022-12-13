const addTask = (task) => ({
    type: 'ADD_TASK',
    task
});

const removeTask = (task) => ({
    type: 'REMOVE_TASK',
    task
});

const consoleState = (task) => ({
    type: 'CONSOLE',
    task
});

export {
    addTask,
    removeTask,
    consoleState
}