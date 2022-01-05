import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Cuestionario from './views/Cuestionario';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path=":param" element={<Cuestionario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
