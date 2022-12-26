import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../store/Actions';

type HeaderProps = {
  todoState: any;
  addNewTodo: any;
  removeTodoRecord: any;
};

// Functional component
const Header = ({ todoState, addNewTodo, removeTodoRecord }: HeaderProps) => {
  // Effect Hook
  useEffect(() => {
    console.log(todoState);
  }, [todoState]);

  const handleAddNewTodo = () => {
    addNewTodo('Ipsum');
  };

  const handleRemoveTodo = () => {
    removeTodoRecord();
  };

  return (
    <div className="Header">
      Header components is works!
      <button onClick={() => handleAddNewTodo()}>Add New Todo</button>
      <button onClick={() => handleRemoveTodo()}>Remove Todo</button>
      {todoState.todos.map((todo: any, index: any) => {
        return <li key={index}>{todo}</li>;
      })}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  todoState: state.todoReducer
});

const mapDispatchToProps = (dispatch: any) => ({
  addNewTodo: (todo: any) => dispatch(addTodo(todo)),
  removeTodoRecord: () => dispatch(removeTodo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
