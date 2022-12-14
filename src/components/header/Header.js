import { useEffect } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "../store/Actions";

// Functional component
const Header = ({ todoState, addNewTodo, removeTodoRecord }) => {

    // Effect Hook
    useEffect(() => {
        console.log(todoState);
    }, [todoState]);

    const handleAddNewTodo = () => {
        addNewTodo("Ipsum");
    };

    const handleRemoveTodo = () => {
        removeTodoRecord();
    }

    return (
        <div>
            Header components is works!
            <button onClick={() => handleAddNewTodo()}>Add New Todo</button>
            <button onClick={() => handleRemoveTodo()}>Remove Todo</button>
            { todoState.todos.map((todo, index) => {
                return <li key={index}>{ todo }</li>
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    todoState: state.todoReducer
});

const mapDispatchToProps = (dispatch) => ({
    addNewTodo: (todo) => dispatch(addTodo(todo)),
    removeTodoRecord: () => dispatch(removeTodo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
