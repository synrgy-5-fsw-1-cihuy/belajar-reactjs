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

const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
})

export {
    addTask,
    removeTask,
    consoleState,
    addTodo
}