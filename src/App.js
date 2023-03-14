import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      {/* 
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/about'
            element={<About />}
          />

        </Routes>
      </BrowserRouter> */}

      <About />
    </div>
  );
}

export default App;