import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import Login from './login';
import Register from './register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
