import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/contact/Contact';
// import Content from './components/content/Content';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import User from './components/user/User';

function App() {
  const person = {
    name: "Farrel"
  };

  return (
    <div className="App">
      <Header 
      name="Jalil"
      age={20}
      person={person}
      />
      <Router>
         <Routes>
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/user' element={<User />} />
         </Routes>
      </Router>
      {/* <Content 
      name="Jalil"
      age={20}
      /> */}
      {/* FAQ */}
      {/* Footer */}
      
    </div>
  );
}

export default App;
