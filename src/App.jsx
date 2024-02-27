import './App.css'
import Navbar from './components/Navbar';
import Intro from './components/intro/Intro';
import Compétences from './components/Compétences/compétence';
import Portfolio from './components/Portfolio/portfolio';
import Footer from './components/Footer/footer.jsx';

function App() {
  return (

    <div className='App'>
      <Navbar />
      <Intro />
      <Compétences />
      <Portfolio />
      <Footer />
    </div>

  );
}

export default App
