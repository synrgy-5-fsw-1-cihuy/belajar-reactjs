import { useEffect } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/Actions";

// Functional component
const Header = ({ todoState, addNewTodo }) => {

    // Effect Hook
    useEffect(() => {
        console.log(todoState);
    }, []);

    const handleAddNewTodo = () => {
        console.log('test');
        addNewTodo("Ipsum");
    };

    return (
        <div>
            Header components is works!
            <button onClick={() => handleAddNewTodo()}>Add New Todo</button>
            { todoState.todos.map((todo) => {
                return <li>{ todo }</li>
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    todoState: state.todoReducer
});

const mapDispatchToProps = (dispatch) => ({
    addNewTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
