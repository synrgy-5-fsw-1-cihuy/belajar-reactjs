import { useEffect } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { addTask, removeTask } from './components/store/Actions';
// import Contact from './components/contact/Contact';
// import Login from './components/login/Login';
// import OAuth from './components/oauth/OAuth';
// import Profile from './components/profile/Profile';
// import User from './components/user/User';
// import { addTask } from './components/store/Actions';

function App({ appState, addNewTask, removeLastTask }) {

  const handleAddTask = () => {
    addNewTask('Ganda');
  }

  const handleRemoveTask = () => {
    removeLastTask();
  }

  useEffect(() => {
    console.log("STATE COMP :", appState);
  }, [appState])

  return (
    <div className="App">
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
      <h3>List tasks</h3>
      <div>
        { appState.tasks.map((task) => {
          return <li>{task}</li>
        })}
      </div>
    </div>
  );
}

// Map State Redux to State Comp
const mapStateToProps = (state) => ({
  appState: state
});

// Map Dispatch Action to Props Comp
const mapDispatchToProps = (dispatch) => ({
  addNewTask: (task) => dispatch(addTask(task)),
  removeLastTask: () => dispatch(removeTask())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
