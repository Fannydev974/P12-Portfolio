import './App.css'
import Navbar from './components/Navbar';
import Intro from './components/intro/Intro';
import Travaux from './components/Travaux/travaux';
function App() {
  return (

    <div className='App'>
      <Navbar />
      <Intro />
      <Travaux />
    </div>

  );
}

export default App
