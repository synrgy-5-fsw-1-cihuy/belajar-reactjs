const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task
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
    payload: todo
});

const removeTodo = () => ({
    type: 'REMOVE_TODO'
})

export {
    addTask,
    removeTask,
    consoleState,
    addTodo,
    removeTodo
}