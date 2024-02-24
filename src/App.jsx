import './App.css'
import Navbar from './components/Navbar';
import Intro from './components/intro/Intro';
import Compétences from './components/Compétences/compétence';
import Portfolio from './components/Portfolio/portfolio';


function App() {
  return (

    <div className='App'>
      <Navbar />
      <Intro />
      <Compétences />
      <Portfolio />
    </div>

  );
}

export default App
