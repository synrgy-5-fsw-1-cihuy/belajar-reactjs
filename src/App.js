import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';

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
      <Content 
      name="Jalil"
      age={20}
      />
      {/* FAQ */}
      {/* Footer */}
      
    </div>
  );
}

export default App;
