import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import Student from './components/Student';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/home' element = {<Home />} />
          <Route path='/student' element = {<Student />} />
          <Route path='/contact' element = {<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;