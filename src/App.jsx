import './App.css'
import Navbar from './components/Navbar.jsx';
import Intro from './components/intro/Intro';
import Competences from './components/Compétences/competence';
import Contact from './components/contact';
import Portfolio from './components/Portfolio/portfolio';
import Footer from './components/Footer/footer';
import Loader from './components/loader';


function App() {
    return (

        <div className='App'>
            <Loader />
            <Navbar />
            <Intro />
            <Competences />
            <Portfolio />
            <Contact />
            <Footer />
        </div>

    );
}

export default App
