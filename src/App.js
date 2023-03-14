import logo from './logo.svg';
import './App.css';
import './style.css'
import Main_page from './components/Main';

function App() {
  return (


      <Routes>
          <Route path="/" element={<Main_page />} />
       </Routes>
      

  );
}

export default App;
