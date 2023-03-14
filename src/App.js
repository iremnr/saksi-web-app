import logo from './logo.svg';
import './App.css';
import './style.css'
import Main from './components/Main';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (

      <Routes>
          <Route path="/saksi" element={<Main />} />
       </Routes>
      
  );
}

export default App;
