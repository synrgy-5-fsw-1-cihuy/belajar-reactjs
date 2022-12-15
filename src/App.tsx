import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import { addTask, removeTask, consoleState } from './components/store/Actions';
// import Contact from './components/contact/Contact';
// import Login from './components/login/Login';
// import OAuth from './components/oauth/OAuth';
// import Profile from './components/profile/Profile';
// import User from './components/user/User';
// import { addTask } from './components/store/Actions';
type ActionProps = {
  appState: {
    peoples: []
  },
  addNewTask: Function,
  removeLastTask: Function,
  debugConsoleState: Function
}

function App({ appState, addNewTask, removeLastTask, debugConsoleState }: ActionProps) {

  const handleAddTask = () => {
    addNewTask('Ganda');
  }

  const handleRemoveTask = () => {
    removeLastTask();
  }

  const handleDebugConsoleState = () => {
    debugConsoleState();
  }

  useEffect(() => {
    console.log("STATE COMP :", appState);
  }, [appState])

  return (
    <div className="App">
      <Header />
      <Content />
      {/* <Router>
         <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/user' element={<User />} />
            <Route path='/' element={<OAuth />} />
         </Routes>
      </Router> */}
      <button onClick={() => handleAddTask()}>Add Task to State</button>
      <button onClick={() => handleRemoveTask()}>Remove Task from State</button>
      <button onClick={() => handleDebugConsoleState()}>Debug Console State</button>
      <h3>List tasks</h3>
      <div>
        { appState.peoples.map((peop: any, index: any) => {
          return <li key={index}>{peop}</li>
        })}
      </div>
    </div>
  );
}

// Map State Redux to State Comp
const mapStateToProps = (state: any) => ({
  appState: state.appReducer
});

// Map Dispatch Action to Props Comp
const mapDispatchToProps = (dispatch: any) => ({
  addNewTask: (person: any) => dispatch(addTask(person)),
  removeLastTask: () => dispatch(removeTask()),
  debugConsoleState: () => dispatch(consoleState())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
