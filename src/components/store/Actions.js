const addTask = (task) => ({
    type: 'ADD_TASK',
    task
});

const removeTask = (task) => ({
    type: 'REMOVE_TASK',
    task
});

export {
    addTask,
    removeTask
}