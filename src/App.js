import './App.css';
import Nav from './components/Nav';
import Title from './components/Title';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <Nav />
      <Title />
      <Search />
      <Results />
    </div>
  );
}

export default App;
